import { useCallback, useMemo, useState } from 'react';
import { Paintbrush } from 'lucide-react';

import type { Editor } from '@tiptap/react';

import { Flex, IconButton, Menu } from '@chakra-ui/react';

interface TextColorProps {
  editor: Editor | null;
}

const TextColor = ({ editor }: TextColorProps) => {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  const colors = useMemo(
    () => [
      { name: '빨간색', textColor: '#D44C47' },
      { name: '주황색', textColor: '#D9730D' },
      { name: '노란색', textColor: '#CB912F' },
      { name: '초록색', textColor: '#448361' },
      { name: '파란색', textColor: '#337EA9' },
      { name: '보라색', textColor: '#9065B0' },
      { name: '핑크색', textColor: '#C14C8A' },
      { name: '회색', textColor: '#787774' },
    ],
    [],
  );

  // 텍스트 색상 적용 함수
  const applyTextColor = useCallback((color: string) => {
    if (!editor) return;
    editor.chain().focus().setMark('textStyle', { color }).run();
    setIsPaletteOpen(false);
  }, [editor]);

  // 텍스트 색상 제거 함수
  const removeTextColor = useCallback(() => {
    if (!editor) return;
    editor.chain().focus().unsetMark('textStyle').run();
    setIsPaletteOpen(false);
  }, [editor]);

  if (!editor) return null;
  
  // 현재 텍스트 색상 가져오기
  const currentColor = editor.getAttributes('textStyle').color;
  const isActive = Boolean(currentColor);

  return (
    <Menu.Root
      open={isPaletteOpen}
      onOpenChange={(e) => setIsPaletteOpen(e.open)}
      positioning={{ placement: 'bottom-start' }}
    >
      <Menu.Trigger asChild>
        <IconButton
          p={2}
          type="button"
          aria-label="텍스트 색상"
          title="텍스트 색상"
          size="xs"
          borderRadius="sm"
          color={isActive ? 'white' : 'gray.900'}
          backgroundColor={isActive ? 'gray.800' : 'white'}
          _hover={{
            backgroundColor: 'gray.800',
            color: 'white',
          }}
        >
          <Paintbrush size={16} />
        </IconButton>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content
          p={2}
          minW="180px"
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="sm"
          boxShadow="md"
          zIndex={50}
        >
          <Flex wrap="wrap" gap={2}>
            {colors.map((c) => {
              const selected = currentColor === c.textColor;
              return (
                <IconButton
                  key={c.name}
                  aria-label={c.name}
                  title={c.name}
                  size="xs"
                  w="28px"
                  h="28px"
                  minW="28px"
                  borderRadius="sm"
                  border="1px solid"
                  borderColor={selected ? 'gray.800' : 'gray.200'}
                  bg="white"
                  color={c.textColor}
                  _hover={{ bg: 'gray.50' }}
                  onClick={() => applyTextColor(c.textColor)}
                >
                  A
                </IconButton>
              );
            })}
            <IconButton
              aria-label="텍스트 색상 제거"
              title="텍스트 색상 제거"
              size="xs"
              px={2}
              h="28px"
              borderRadius="sm"
              border="1px solid"
              borderColor="gray.200"
              bg="white"
              color="gray.700"
              _hover={{ bg: 'gray.100' }}
              onClick={removeTextColor}
            >
              지우기
            </IconButton>
          </Flex>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default TextColor;
