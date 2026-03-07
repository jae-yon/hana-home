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
import { ReactNodeViewRenderer } from '@tiptap/react'
import ImageBlock from '@/shared/components/editor/ImageBlock'

const CustomImage = Image.extend({
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

export default CustomImage