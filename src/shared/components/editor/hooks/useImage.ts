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
import Image from '@tiptap/extension-image'

import type { JSONContent } from '@tiptap/react'
import { ReactNodeViewRenderer } from '@tiptap/react'

import supabase from '@/shared/config/supabase'
import ImageBlock from '@/shared/components/editor/ImageBlock'

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

/** JSONContent에서 이미지 URL 목록을 추출합니다. (linkImagesToPost에 넘길 때 사용) */
export function extractImageUrlsFromJson(content: JSONContent | null | undefined): string[] {
  const urls: string[] = []
  function walk(node: JSONContent) {
    if (node.type === 'image' && node.attrs?.src) {
      const src = node.attrs.src
      if (typeof src === 'string') urls.push(src)
    }
    node.content?.forEach(walk)
  }
  if (content) walk(content)
  return urls
}

/**
 * 에디터 HTML content에서 이미지 URL 목록을 추출합니다.
 * linkImagesToPost에 넘길 urlsInContent를 구할 때 사용하세요.
 *
 * @param {string} htmlContent - editor.getHTML()
 * @returns {string[]}
 */
export function extractImageUrls(htmlContent: string): string[] {
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlContent, 'text/html')
  return Array.from(doc.querySelectorAll('img'))
    .map((img) => img.getAttribute('src'))
    .filter((src): src is string => Boolean(src))
}

/**
 * 글 저장 시점에 이 글에서 사용된 이미지들의 post_id를 연결합니다.
 *
 * @param {string} postId
 * @param {string[]} urlsInContent - 실제 content에 포함된 이미지 URL 배열
 */
export async function linkImagesToPost(postId: string, urlsInContent: string[]) {
  if (!urlsInContent?.length) return

  const { error } = await supabase
    .from('images')
    .update({ post_id: postId })
    .in('url', urlsInContent)
    .is('post_id', null) // 이미 연결된 것은 건드리지 않음

  if (error) throw new Error(`post_id 연결 실패: ${error.message}`)
}
