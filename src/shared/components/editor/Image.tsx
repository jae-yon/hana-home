import { useRef } from 'react'
import { IconButton } from '@chakra-ui/react'
import { ImagePlus } from 'lucide-react'
import type { Editor } from '@tiptap/react'

/**
 * ImageToolbarButton
 *
 * 툴바에 배치하는 이미지 삽입 버튼.
 * 파일을 선택하면 에디터에 이미지를 삽입합니다.
 * onUpload가 있으면 업로드 후 반환된 URL로 교체하고, 없으면 선택한 파일의 blob URL로 바로 표시합니다.
 *
 * Props:
 *   editor     - Tiptap editor instance
 *   onUpload   - (optional) async (file: File) => string | undefined  (업로드 후 URL 반환, 없으면 blob 유지)
 *   isDisabled - boolean (optional)
 */
interface ImageProps {
  editor: Editor | null
  onUpload?: (file: File) => Promise<string | null | undefined>
  isDisabled?: boolean
}

export default function Image({ editor, onUpload, isDisabled }: ImageProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef.current?.click()
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !editor) return

    // 미리보기용 blob URL (업로드 완료 전 낙관적 렌더링)
    const blobUrl = URL.createObjectURL(file)
    editor
      .chain()
      .focus()
      .setImage({ src: blobUrl, 'data-loading': 'true' } as { src: string })
      .run()

    // onUpload 없으면 blob URL로 바로 확정 (로딩 플래그만 제거, revoke 하지 않음)
    if (!onUpload) {
      replaceImageSrc(editor, blobUrl, blobUrl)
      e.target.value = ''
      return
    }

    try {
      const url = await onUpload(file)
      if (url) {
        replaceImageSrc(editor, blobUrl, url)
        URL.revokeObjectURL(blobUrl)
      } else {
        replaceImageSrc(editor, blobUrl, blobUrl)
        // blob 유지 시 revoke 하지 않음
      }
    } catch (err) {
      removeImageBySrc(editor, blobUrl)
      URL.revokeObjectURL(blobUrl)
      console.error('Image upload failed:', err)
    } finally {
      e.target.value = ''
    }
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <IconButton
        aria-label="이미지 삽입"
        title="이미지 삽입"
        size="xs"
        borderRadius="sm"
        color="gray.900"
        backgroundColor="white"
        disabled={isDisabled || !editor}
        onClick={handleClick}
        _hover={{
          backgroundColor: 'gray.800',
          color: 'white',
        }}
      >
        <ImagePlus size={16} />
      </IconButton>
    </>
  )
}

/* ── helpers ── */

function replaceImageSrc(editor: Editor, oldSrc: string, newSrc: string) {
  const { state, view } = editor
  const { tr, doc } = state
  let replaced = false

  doc.descendants((node, pos) => {
    if (node.type.name === 'image' && node.attrs.src === oldSrc) {
      tr.setNodeMarkup(pos, undefined, {
        ...node.attrs,
        src: newSrc,
        'data-loading': null,
      })
      replaced = true
    }
  })

  if (replaced) view.dispatch(tr)
}

function removeImageBySrc(editor: Editor, src: string) {
  const { state, view } = editor
  const { tr, doc } = state

  doc.descendants((node, pos) => {
    if (node.type.name === 'image' && node.attrs.src === src) {
      tr.delete(pos, pos + node.nodeSize)
    }
  })

  view.dispatch(tr)
}