import { useEffect } from 'react';

import { Box } from '@chakra-ui/react';

import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import { TextStyle, Color } from '@tiptap/extension-text-style';
import { EditorContent, useEditor, type JSONContent } from '@tiptap/react';

import { CustomImage } from '@/shared/components/editor/hooks/useImage';

// CSS import
import '@/shared/components/editor/index.css';

interface EditorViewerProps {
  content: JSONContent | null | undefined;
  /** 뷰어 영역에 적용할 추가 스타일 */
  className?: string;
}

export default function EditorViewer({ content, className }: EditorViewerProps) {
  const editor = useEditor({
    extensions: [
      StarterKit, 
      CustomImage, 
      TextStyle, 
      Color, 
      Highlight.configure({
        multicolor: true,
      })
    ],
    content: content ?? { type: 'doc', content: [] },
    editable: false,
    editorProps: {
      attributes: {
        class: 'editor-viewer-content',
      },
    },
  });

  useEffect(() => {
    if (!editor || editor.isDestroyed) return;
    const nextContent = content ?? { type: 'doc', content: [] };
    editor.commands.setContent(nextContent, { emitUpdate: false });
  }, [editor, content]);

  useEffect(() => {
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  if (!editor) return null;

  return (
    <Box className={className} width="100%">
      <EditorContent editor={editor} className="editor-content editor-content--viewer" />
    </Box>
  );
}
