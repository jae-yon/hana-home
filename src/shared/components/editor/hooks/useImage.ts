/**
 * CustomImage — Tiptap Extension
 *
 * 공식 @tiptap/extension-image 를 extend해서
 * width / align / data-loading 속성을 추가하고
 * ImageBlock 컴포넌트를 NodeView로 등록합니다.
 *
 * 의존성:
 *   npm install @tiptap/extension-image @tiptap/react
 */
import { useCallback, useRef } from 'react'

import Image from '@tiptap/extension-image'

import { ReactNodeViewRenderer } from '@tiptap/react'

import supabase from '@/shared/config/supabase'
import ImageBlock from '@/shared/components/editor/ImageBlock'

// Supabase Storage
const BUCKET = 'hana_solution_images'

export const CustomImage = Image.extend({
  // 블록 레벨로 사용
  inline: false,
  group: 'block',

  addAttributes() {
    return {
      // 기본 속성 유지
      ...this.parent?.(),

      // 픽셀 너비 (number) 또는 '100%' 같은 string
      width: {
        default: '100%',
        parseHTML: (el) => el.getAttribute('data-width') ?? el.getAttribute('width') ?? '100%',
        renderHTML: (attrs) => ({ 'data-width': attrs.width }),
      },

      // 정렬: 'left' | 'center' | 'right'
      align: {
        default: 'center',
        parseHTML: (el) => el.getAttribute('data-align') ?? 'center',
        renderHTML: (attrs) => ({ 'data-align': attrs.align }),
      },

      // 업로드 중 낙관적 렌더링 플래그
      'data-loading': {
        default: null,
        parseHTML: () => null,    // HTML 직렬화 시 포함하지 않음
        renderHTML: () => ({}),
      },
    }
  },

  addNodeView() {
    return ReactNodeViewRenderer(ImageBlock)
  },
})

/**
 * UploadImage
 *
 * Supabase Storage에 이미지를 업로드하고 images 테이블에 메타데이터를 저장합니다.
 * post_id는 업로드 시점에 없으므로 null로 insert하고,
 * 글 저장 시 linkImagesToPost()로 post_id를 연결합니다.
 *
 * 사용법:
 *   const { uploadImage, linkImagesToPost } = UploadImage()
 *
 *   // 에디터 이미지 업로드
 *   const url = await uploadImage(file)
 *
 *   // 글 저장 시 post_id 연결
 *   await linkImagesToPost(postId, imageUrls)
 */

export const UploadImage = () => {
  // 현재 글 작성 세션에서 업로드한 이미지 URL 목록 추적
  const uploadedUrls = useRef<string[]>([])

  /**
   * 이미지 파일을 업로드하고 공개 URL을 반환합니다.
   * @param {File} file
   * @returns {Promise<string>} 공개 URL
   */
  const uploadImage = useCallback(async (file: File) => {
    // 1. 고유 경로 생성: images/{timestamp}_{randomId}_{filename}
    const ext = file.name.split('.').pop()
    const uniqueName = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}.${ext}`
    const storagePath = `uploads/${uniqueName}`

    // 2. Storage에 업로드
    const { error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(storagePath, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.type,
      })

    if (uploadError) throw new Error(`Storage 업로드 실패: ${uploadError.message}`)

    // 3. 공개 URL 획득
    const { data: urlData } = supabase.storage
      .from(BUCKET)
      .getPublicUrl(storagePath)

    const publicUrl = urlData.publicUrl

    // 4. images 테이블에 메타데이터 저장 (post_id는 나중에 연결)
    const { error: dbError } = await supabase.from('images').insert({
      url: publicUrl,
      path: storagePath,
      size: file.size,
      filename: uniqueName,
      mimetype: file.type,
      originalname: file.name,
      // post_id: null (기본값)
    })

    if (dbError) {
      // DB 저장 실패 시 Storage에서도 제거 (정합성 유지)
      await supabase.storage.from(BUCKET).remove([storagePath])
      throw new Error(`DB 저장 실패: ${dbError.message}`)
    }

    // 5. 세션 내 업로드 목록에 추가
    uploadedUrls.current.push(publicUrl)

    return publicUrl
  }, [])

  /**
   * 글 저장 시점에 이 글에서 사용된 이미지들의 post_id를 연결합니다.
   *
   * 에디터 content에서 img src를 추출해서 넘기거나,
   * uploadedUrls.current를 직접 사용해도 됩니다.
   *
   * @param {string} postId
   * @param {string[]} urlsInContent - 실제 content에 포함된 이미지 URL 배열
   */
  const linkImagesToPost = useCallback(async (postId: string, urlsInContent: string[]) => {
    if (!urlsInContent?.length) return

    const { error } = await supabase
      .from('images')
      .update({ post_id: postId })
      .in('url', urlsInContent)
      .is('post_id', null) // 이미 연결된 것은 건드리지 않음

    if (error) throw new Error(`post_id 연결 실패: ${error.message}`)
  }, [])

  /**
   * 에디터 HTML content에서 이미지 URL 목록을 추출합니다.
   * linkImagesToPost에 넘길 urlsInContent를 구할 때 사용하세요.
   *
   * @param {string} htmlContent - editor.getHTML()
   * @returns {string[]}
   */
  const extractImageUrls = useCallback((htmlContent: string): string[] => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlContent, 'text/html')
    return Array.from(doc.querySelectorAll('img'))
      .map((img) => img.getAttribute('src'))
      .filter((src): src is string => Boolean(src))
  }, [])

  return {
    uploadImage,
    linkImagesToPost,
    extractImageUrls,
    uploadedUrls: uploadedUrls.current,
  }
}