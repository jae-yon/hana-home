/**
 * ImageBlock
 *
 * Tiptap NodeViewWrapper 기반의 노션 스타일 이미지 블록.
 * - 선택 시 리사이즈 핸들 + 정렬 툴팁 표시
 * - 좌우 핸들 드래그로 너비 조절
 * - 정렬: left / center / right
 *
 * 사용법: CustomImage extension의 addNodeView에서 ReactNodeViewRenderer(ImageBlock) 로 등록
 */

import { useCallback, useEffect, useRef, useState } from 'react'
import { NodeViewWrapper } from '@tiptap/react'
import type { Node } from '@tiptap/pm/model'
import { Box, IconButton } from '@chakra-ui/react'
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react'

const MIN_WIDTH = 120
const HANDLE_WIDTH = 8

type AlignValue = 'left' | 'center' | 'right'

interface ImageBlockProps {
  node: Node & { attrs: { src?: string; alt?: string; width?: number | string; align?: AlignValue; 'data-loading'?: string | boolean } }
  updateAttributes: (attrs: Record<string, unknown>) => void
  selected: boolean
  /** 에디터 인스턴스 (뷰어일 때 editable: false → 리사이즈·정렬 비표시) */
  editor?: { isEditable: boolean }
}

export default function ImageBlock({ node, updateAttributes, selected, editor }: ImageBlockProps) {
  const isViewer = editor ? !editor.isEditable : false
  const { src, alt, width, align } = node.attrs

  const containerRef = useRef<HTMLDivElement>(null)
  const [isResizing, setIsResizing] = useState(false)
  const dragState = useRef<{ startX: number; startWidth: number; side: 'left' | 'right' } | null>(null)

  /* ── 리사이즈 핸들 마우스다운 ── */
  const onHandleMouseDown = useCallback(
    (e: React.MouseEvent, side: 'left' | 'right') => {
      e.preventDefault()
      e.stopPropagation()

      const containerWidth = containerRef.current?.offsetWidth ?? 0
      const currentWidth =
        typeof width === 'number'
          ? width
          : Math.round((parseFloat(String(width)) / 100) * containerWidth)

      dragState.current = { startX: e.clientX, startWidth: currentWidth, side }
      setIsResizing(true)
    },
    [width]
  )

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragState.current) return
      const { startX, startWidth, side } = dragState.current
      const delta = e.clientX - startX
      const next = Math.max(
        MIN_WIDTH,
        side === 'right' ? startWidth + delta : startWidth - delta
      )
      updateAttributes({ width: next })
    }

    const onMouseUp = () => {
      if (!dragState.current) return
      dragState.current = null
      setIsResizing(false)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [updateAttributes])

  /* ── 정렬 → justify 매핑 ── */
  const justifyMap: Record<AlignValue, string> = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  }

  const currentAlign: AlignValue = (align as AlignValue) ?? 'center'
  const currentWidth = width ?? '100%'
  const isLoading = node.attrs['data-loading'] === 'true' || node.attrs['data-loading'] === true

  return (
    <NodeViewWrapper
      data-drag-handle
      style={{
        display: 'flex',
        justifyContent: justifyMap[currentAlign],
        padding: '4px 2px',
        userSelect: isResizing ? 'none' : undefined,
        cursor: isResizing ? 'ew-resize' : undefined,
      }}
    >
      {/* 이미지 + 핸들 컨테이너 */}
      <Box
        ref={containerRef}
        position="relative"
        display="inline-flex"
        width={typeof currentWidth === 'number' ? `${currentWidth}px` : currentWidth}
        maxWidth="100%"
        borderRadius="4px"
        outline={selected && !isViewer ? '2px solid #2383e2' : '2px solid transparent'}
        outlineOffset="1px"
        transition="outline-color 0.15s"
        overflow="visible"
      >
        {/* 이미지 */}
        <Box
          position="relative"
          width="100%"
          borderRadius="4px"
          overflow="hidden"
        >
          <img
            src={src}
            alt={alt ?? ''}
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              borderRadius: '4px',
              opacity: isLoading ? 0.5 : 1,
              transition: 'opacity 0.2s',
              userSelect: 'none',
            }}
            draggable={false}
          />
        </Box>

        {/* 로딩 오버레이 */}
        {isLoading && (
          <Box
            position="absolute"
            inset={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="4px"
            bg="rgba(255,255,255,0.6)"
            fontSize="13px"
            color="gray.500"
            fontFamily="'Pretendard', sans-serif"
          >
            업로드 중…
          </Box>
        )}

        {/* 선택 시 리사이즈 핸들 + 정렬 툴팁 (뷰어 모드에서는 미표시) */}
        {selected && !isLoading && !isViewer && (
          <>
            <ResizeHandle side="left" onMouseDown={(e) => onHandleMouseDown(e, 'left')} />
            <ResizeHandle side="right" onMouseDown={(e) => onHandleMouseDown(e, 'right')} />
            <AlignToolbar
              currentAlign={currentAlign}
              onChange={(a: AlignValue) => updateAttributes({ align: a })}
            />
          </>
        )}
      </Box>
    </NodeViewWrapper>
  )
}

/* ── 리사이즈 핸들 ── */
function ResizeHandle({
  side,
  onMouseDown,
}: {
  side: 'left' | 'right'
  onMouseDown: (e: React.MouseEvent) => void
}) {
  return (
    <Box
      position="absolute"
      top="50%"
      transform="translateY(-50%)"
      {...(side === 'left' ? { left: `-${HANDLE_WIDTH / 2 + 2}px` } : { right: `-${HANDLE_WIDTH / 2 + 2}px` })}
      width={`${HANDLE_WIDTH}px`}
      height="48px"
      borderRadius="4px"
      bg="white"
      boxShadow="0 1px 4px rgba(0,0,0,0.28)"
      cursor="ew-resize"
      zIndex={10}
      onMouseDown={onMouseDown}
      _hover={{ bg: '#f0f0f0' }}
      transition="background 0.1s"
    />
  )
}

/* ── 정렬 툴바 ── */
function AlignToolbar({
  currentAlign,
  onChange,
}: {
  currentAlign: AlignValue
  onChange: (align: AlignValue) => void
}) {
  const buttons = [
    { value: 'left', icon: <AlignLeft size={13} />, label: '왼쪽 정렬' },
    { value: 'center', icon: <AlignCenter size={13} />, label: '가운데 정렬' },
    { value: 'right', icon: <AlignRight size={13} />, label: '오른쪽 정렬' },
  ]

  return (
    <Box
      position="absolute"
      bottom="-40px"
      left="50%"
      transform="translateX(-50%)"
      zIndex={20}
      bg="white"
      borderRadius="6px"
      boxShadow="0 2px 12px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.06)"
      p="3px"
      display="flex"
      gap="2px"
      // 클릭 시 에디터 포커스 뺏기지 않도록
      onMouseDown={(e: React.MouseEvent) => e.preventDefault()}
    >
      {buttons.map(({ value, icon, label }) => (
        <IconButton
          key={value}
          aria-label={label}
          title={label}
          size="xs"
          variant="ghost"
          onClick={() => onChange(value as AlignValue)}
          color={currentAlign === value ? '#37352f' : 'gray.500'}
          bg={currentAlign === value ? 'rgba(55,53,47,0.1)' : 'transparent'}
          _hover={{ bg: 'rgba(55,53,47,0.08)', color: '#37352f' }}
          _active={{ bg: 'rgba(55,53,47,0.14)' }}
          w="24px"
          h="24px"
          minW="26px"
          borderRadius="4px"
        >
          {icon}
        </IconButton>
      ))}
    </Box>
  )
}