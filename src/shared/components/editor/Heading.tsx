import { useState, useCallback } from 'react';
import { ChevronDownIcon, Heading1Icon, Heading2Icon, Heading3Icon, HeadingIcon } from 'lucide-react';

import type { Editor } from '@tiptap/react';

import { IconButton, Menu } from '@chakra-ui/react';

interface HeadingProps {
  editor: Editor | null;
}

const Heading = ({ editor }: HeadingProps) => {
  const [isHeadingMenuOpen, setIsHeadingMenuOpen] = useState(false);
  const toggleHeading = useCallback((level: 1 | 2 | 3) => {
    if (!editor) return;
    editor.chain().focus().toggleHeading({ level }).run();
    setIsHeadingMenuOpen(false);
  }, [editor]);

  if (!editor) {
    return null;
  }

  const getActiveHeading = () => {
    if (editor.isActive('heading', { level: 1 })) return <Heading1Icon size={16} />;
    if (editor.isActive('heading', { level: 2 })) return <Heading2Icon size={16} />;
    if (editor.isActive('heading', { level: 3 })) return <Heading3Icon size={16} />;
    return <HeadingIcon size={16} />;
  };

  const isHeadingActive = editor.isActive('heading');

  return (
    <Menu.Root
      open={isHeadingMenuOpen}
      onOpenChange={(e) => setIsHeadingMenuOpen(e.open)}
      positioning={{ placement: 'bottom-start' }}
    >
      <Menu.Trigger asChild>
        <IconButton
          p={2}
          type="button"
          aria-label="제목"
          title="제목"
          size="xs"
          borderRadius="sm"
          color={isHeadingActive ? 'white' : 'gray.900'}
          backgroundColor={isHeadingActive ? 'gray.800' : 'transparent'}
          _hover={{
            color: 'white',
            backgroundColor: 'gray.800',
          }}
          display="flex"
          alignItems="center"
          gap={1}
        >
          {getActiveHeading()}
          <ChevronDownIcon size={12} />
        </IconButton>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content
          p={1}
          minW="56px"
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="sm"
          boxShadow="md"
          zIndex={50}
        >
          <Menu.Item
            value="h1"
            w="full"
            px={3}
            py={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            color={editor.isActive('heading', { level: 1 }) ? 'blue.600' : 'gray.600'}
            bg={editor.isActive('heading', { level: 1 }) ? 'blue.50' : 'transparent'}
            borderRadius="sm"
            cursor="pointer"
            _hover={{ bg: editor.isActive('heading', { level: 1 }) ? 'blue.50' : 'gray.100' }}
            _focus={{ outline: 'none', bg: 'gray.200' }}
            onClick={() => toggleHeading(1)}
          >
            <Heading1Icon size={16} />
          </Menu.Item>
          <Menu.Item
            value="h2"
            w="full"
            px={3}
            py={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            color={editor.isActive('heading', { level: 2 }) ? 'blue.600' : 'gray.600'}
            bg={editor.isActive('heading', { level: 2 }) ? 'blue.50' : 'transparent'}
            borderRadius="sm"
            cursor="pointer"
            _hover={{ bg: editor.isActive('heading', { level: 2 }) ? 'blue.50' : 'gray.100' }}
            _focus={{ outline: 'none', bg: 'gray.200' }}
            onClick={() => toggleHeading(2)}
          >
            <Heading2Icon size={16} />
          </Menu.Item>
          <Menu.Item
            value="h3"
            w="full"
            px={3}
            py={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            color={editor.isActive('heading', { level: 3 }) ? 'blue.600' : 'gray.600'}
            bg={editor.isActive('heading', { level: 3 }) ? 'blue.50' : 'transparent'}
            borderRadius="sm"
            cursor="pointer"
            _hover={{ bg: editor.isActive('heading', { level: 3 }) ? 'blue.50' : 'gray.100' }}
            _focus={{ outline: 'none', bg: 'gray.200' }}
            onClick={() => toggleHeading(3)}
          >
            <Heading3Icon size={16} />
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default Heading;
