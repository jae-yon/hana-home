import { useEffect } from 'react';

import { Flex } from '@chakra-ui/react';

import StarterKit from '@tiptap/starter-kit';
import { EditorContent, useEditor, type JSONContent } from '@tiptap/react';

import Toolbar from '@/shared/components/editor/Toolbar';
import { CustomImage, UploadImage } from '@/shared/components/editor/hooks/useImage';

// CSS import
import '@/shared/components/editor/index.css';

interface EditorProps {
  content?: JSONContent;
  onUpdate?: (content: JSONContent, contentText: string) => void;
}

export default function Editor({content, onUpdate}: EditorProps) {
  const { uploadImage } = UploadImage()

  const editor = useEditor({
    extensions: [
      StarterKit,
      CustomImage,
    ],
    content: content || {
      type: 'doc',
      content: [],
    },
    editorProps: {
      handleKeyDown: (view, event) => {
        // Tab 키 처리
        if (event.key === 'Tab') {
          const { state } = view;
          const { $from } = state.selection;
          
          // 리스트 항목 내부에 있는지 확인
          let isInListItem = false;
          for (let depth = $from.depth; depth > 0; depth--) {
            const node = $from.node(depth);
            if (node.type.name === 'listItem') {
              isInListItem = true;
              break;
            }
          }
          
          // 리스트 항목 내부에 있으면 TipTap의 기본 동작 허용 (들여쓰기/내어쓰기)
          if (isInListItem) {
            // 기본 동작 허용
            return false;
          }
          
          // 코드블럭 내부에 있는지 확인
          let isInCodeBlock = false;
          for (let depth = $from.depth; depth > 0; depth--) {
            const node = $from.node(depth);
            if (node.type.name === 'codeBlock') {
              isInCodeBlock = true;
              break;
            }
          }
          
          // 코드블럭 내부에 있으면 공백 삽입
          if (isInCodeBlock) {
            event.preventDefault();
            const { dispatch } = view;
            const { selection } = state;
            const tr = state.tr.insertText('  ', selection.from, selection.to);
            dispatch(tr);
            return true;
          }
          
          // 일반 텍스트에서는 공백 2개 삽입 (기본 동작 방지)
          event.preventDefault();
          const { dispatch } = view;
          const { selection } = state;
          const tr = state.tr.insertText('  ', selection.from, selection.to);
          dispatch(tr);
          return true;
        }
        
        // 다른 키는 기본 동작 허용
        return false;
      },
    },
    onUpdate: ({ editor }) => {
      if (onUpdate) {
        try {
          const json = editor.getJSON();
          const text = editor.getText();
          onUpdate(json, text);
        } catch (error) {
          console.error('Editor update failed:', error);
        }
      }
    }
  });

  // content prop synchronization
  useEffect(() => {
    if (!editor || editor.isDestroyed) return;

    if (editor.isFocused) return;
  
    const newContent = content || { type: 'doc', content: [] };
    const editorContent = editor.getJSON();

    if (JSON.stringify(editorContent) !== JSON.stringify(newContent)) {
      queueMicrotask(() => {
        editor.commands.setContent(newContent, {
          emitUpdate: false,
        });
      });
    }
  }, [editor, content]);

   // cleanup
   useEffect(() => {
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  if (!editor) return null;

  return (
    <Flex
      direction="column"
      borderRadius="sm"
      overflow="hidden"
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      _focusWithin={{
        borderColor: 'gray.500',
        boxShadow: '0 0 0 1px var(--chakra-colors-gray-500)',
      }}
      transition="border-color 0.2s, box-shadow 0.2s"
    >
      <Toolbar editor={editor} onImageUpload={uploadImage} />
      <Flex
        bg="white"
        minHeight="50vh"
        maxHeight="70vh"
        borderTop="1px solid"
        borderColor="gray.200"
      >
        <EditorContent
          className="editor-content"
          editor={editor}
        />
      </Flex>
    </Flex>
  );
}