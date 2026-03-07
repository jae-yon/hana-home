import { useCallback } from 'react';
import { Bold, Code, Italic, Quote, Strikethrough, Underline, SquareCode, Minus } from 'lucide-react';

import { Editor } from '@tiptap/react';

import { Flex, IconButton } from '@chakra-ui/react';

import useToolBar from '@/shared/components/editor/hooks/useToolbar';

interface ToolBarProps {
  editor: Editor | null;
}

export default function Toolbar({ editor }: ToolBarProps) {
  if (!editor) {
    return null;
  }

  useToolBar(editor);

  // Bold
  const toggleBold = useCallback(() => {
    editor.chain().focus().toggleBold().run();
  }, [editor]);

  // Italic
  const toggleItalic = useCallback(() => {
    editor.chain().focus().toggleItalic().run();
  }, [editor]);

  // Underline
  const toggleUnderline = useCallback(() => {
    editor.chain().focus().toggleUnderline().run();
  }, [editor]);

  // Strike
  const toggleStrike = useCallback(() => {
    editor.chain().focus().toggleStrike().run();
  }, [editor]);

  // Blockquote
  const toggleBlockquote = useCallback(() => {
    editor.chain().focus().toggleBlockquote().run();
  }, [editor]);

  // Horizontal Rule
  const insertHorizontalRule = useCallback(() => {
    editor.chain().focus().setHorizontalRule().run();
  }, [editor]);

  // Inline Code
  const toggleCode = useCallback(() => {
    editor.chain().focus().toggleCode().run();
  }, [editor]);

  // Code Block
  const toggleCodeBlock = useCallback(() => {
    editor.chain().focus().toggleCodeBlock().run();
  }, [editor]);

  return (
    <Flex
      p={2}
      gap={2}
      justify="start"
      align="center"
      bg="white"
      borderBottom="1px solid gray.200"
    >
      {/* Bold */}
      <IconButton 
        onClick={toggleBold}
        title="굵은 글씨"
        aria-label="굵은 글씨"
        size="xs"
        borderRadius="md"
        backgroundColor={editor.isActive('bold') ? 'gray.800' : 'gray.500'}
        _hover={{
          backgroundColor: 'gray.800',
        }}
      >
        <Bold />
      </IconButton>
      
      {/* Italic */}
      <IconButton 
        onClick={toggleItalic}
        title="기울임 글씨"
        aria-label="굵은 글씨"
        size="xs"
        borderRadius="md"
        backgroundColor={editor.isActive('italic') ? 'gray.800' : 'gray.500'}
        _hover={{
          backgroundColor: 'gray.800',
        }}
      >
        <Italic />
      </IconButton>

      {/* Underline */}
      <IconButton
        onClick={toggleUnderline}
        title="밑줄"
        aria-label="밑줄"
        size="xs"
        borderRadius="md"
        backgroundColor={editor.isActive('underline') ? 'gray.800' : 'gray.500'}
        _hover={{
          backgroundColor: 'gray.800',
        }}
      >
        <Underline />
      </IconButton>

      {/* Strike */}
      <IconButton
        onClick={toggleStrike}
        title="취소선"
        aria-label="취소선"
        size="xs"
        borderRadius="md"
        backgroundColor={editor.isActive('strike') ? 'gray.800' : 'gray.500'}
        _hover={{
          backgroundColor: 'gray.800',
        }}
      >
        <Strikethrough />
      </IconButton>

      {/* Blockquote */}
      <IconButton
        onClick={toggleBlockquote}
        title="인용구"
        aria-label="인용구"
        size="xs"
        borderRadius="md"
        backgroundColor={editor.isActive('blockquote') ? 'gray.800' : 'gray.500'}
        _hover={{
          backgroundColor: 'gray.800',
        }}
      >
        <Quote />
      </IconButton>

      {/* Horizontal Rule */}
      <IconButton
        onClick={insertHorizontalRule}
        title="수평선"
        aria-label="수평선"
        size="xs"
        borderRadius="md"
        backgroundColor="gray.500"
      >
        <Minus />
      </IconButton>

      {/* Inline Code */}
      <IconButton
        onClick={toggleCode}
        title="코드"
        aria-label="코드"
        size="xs"
        borderRadius="md"
        backgroundColor={editor.isActive('code') ? 'gray.800' : 'gray.500'}
        _hover={{
          backgroundColor: 'gray.800',
        }}
      >
        <Code />
      </IconButton>

      {/* Code Block */}
      <IconButton
        onClick={toggleCodeBlock}
        title="코드 블럭"
        aria-label="코드 블럭"
        size="xs"
        borderRadius="md"
        backgroundColor={editor.isActive('codeBlock') ? 'gray.800' : 'gray.500'}
        _hover={{
          backgroundColor: 'gray.800',
        }}
      >
        <SquareCode />
      </IconButton>
    </Flex>
  );
}