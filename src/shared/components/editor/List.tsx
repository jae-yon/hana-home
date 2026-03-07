import { useState, useCallback } from 'react';
import { ChevronDownIcon, ListIcon, ListOrderedIcon } from 'lucide-react';

import type { Editor } from '@tiptap/react';

import { IconButton, Menu } from '@chakra-ui/react';

interface ListProps {
  editor: Editor | null;
}

const List = ({ editor }: ListProps) => {
  const [isListMenuOpen, setIsListMenuOpen] = useState(false);

  const toggleBulletList = useCallback(() => {
    if (!editor) return;
    editor.chain().focus().toggleBulletList().run();
    setIsListMenuOpen(false);
  }, [editor]);

  const toggleOrderedList = useCallback(() => {
    if (!editor) return;
    editor.chain().focus().toggleOrderedList().run();
    setIsListMenuOpen(false);
  }, [editor]);

  if (!editor) {
    return null;
  }

  const getActiveList = () => {
    if (editor.isActive('bulletList')) return <ListIcon size={16} />;
    if (editor.isActive('orderedList')) return <ListOrderedIcon size={16} />;
    return <ListIcon size={16} />;
  };

  const isListActive = editor.isActive('bulletList') || editor.isActive('orderedList');

  return (
    <Menu.Root
      open={isListMenuOpen}
      onOpenChange={(e) => setIsListMenuOpen(e.open)}
      positioning={{ placement: 'bottom-start' }}
    >
      <Menu.Trigger asChild>
        <IconButton
          p={2}
          type="button"
          aria-label="리스트"
          title="리스트"
          size="xs"
          borderRadius="sm"
          color={isListActive ? 'white' : 'gray.900'}
          backgroundColor={isListActive ? 'gray.800' : 'transparent'}
          _hover={{
            color: 'white',
            backgroundColor: 'gray.800',
          }}
          display="flex"
          alignItems="center"
          gap={1}
          letterSpacing="wider"
        >
          {getActiveList()}
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
            value="bullet"
            w="full"
            px={3}
            py={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            color={editor.isActive('bulletList') ? 'blue.600' : 'gray.600'}
            bg={editor.isActive('bulletList') ? 'blue.50' : 'transparent'}
            borderRadius="sm"
            cursor="pointer"
            _hover={{ bg: editor.isActive('bulletList') ? 'blue.50' : 'gray.100' }}
            _focus={{ outline: 'none', bg: 'gray.200' }}
            onClick={toggleBulletList}
          >
            <ListIcon size={16} />
          </Menu.Item>
          <Menu.Item
            value="ordered"
            w="full"
            px={3}
            py={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            color={editor.isActive('orderedList') ? 'blue.600' : 'gray.600'}
            bg={editor.isActive('orderedList') ? 'blue.50' : 'transparent'}
            borderRadius="sm"
            cursor="pointer"
            _hover={{ bg: editor.isActive('orderedList') ? 'blue.50' : 'gray.100' }}
            _focus={{ outline: 'none', bg: 'gray.200' }}
            onClick={toggleOrderedList}
          >
            <ListOrderedIcon size={16} />
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default List;
