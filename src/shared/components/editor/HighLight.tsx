import { useCallback, useMemo, useState } from 'react';
import { Highlighter } from 'lucide-react';

import type { Editor } from '@tiptap/react';

import { Flex, IconButton, Menu } from '@chakra-ui/react';

interface HighLightProps {
  editor: Editor | null;
}

const HighLight = ({ editor }: HighLightProps) => {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  const colors = useMemo(
    () => [
      { name: '빨간색', highlightColor: '#F8D8D9' },
      { name: '주황색', highlightColor: '#F5D8C5' },
      { name: '노란색', highlightColor: '#F6E8C5' },
      { name: '초록색', highlightColor: '#E3E8D8' },
      { name: '파란색', highlightColor: '#DDE8F0' },
      { name: '보라색', highlightColor: '#EDE8F0' },
      { name: '핑크색', highlightColor: '#F5E8EB' },
      { name: '회색', highlightColor: '#E8E8E5' },
    ],
    [],
  );

  // 하이라이트 적용 함수
  const applyHighlight = useCallback((color: string) => {
    if (!editor) return;
    editor.chain().focus().setHighlight({ color }).run();
    setIsPaletteOpen(false);
  }, [editor]);

  // 하이라이트 제거 함수
  const removeHighlight = useCallback(() => {
    if (!editor) return;
    editor.chain().focus().unsetHighlight().run();
    setIsPaletteOpen(false);
  }, [editor]);

  if (!editor) return null;

  // 현재 하이라이트 색상 가져오기
  const currentColor = editor.getAttributes('highlight').color;
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
          aria-label="하이라이트"
          title="하이라이트"
          size="xs"
          borderRadius="sm"
          color={isActive ? 'white' : 'gray.900'}
          backgroundColor={isActive ? 'gray.800' : 'white'}
          _hover={{
            backgroundColor: 'gray.800',
            color: 'white',
          }}
        >
          <Highlighter size={16} />
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
              const selected = currentColor === c.highlightColor;
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
                  bg={c.highlightColor}
                  _hover={{ filter: 'brightness(0.98)' }}
                  onClick={() => applyHighlight(c.highlightColor)}
                />
              );
            })}
            <IconButton
              aria-label="하이라이트 제거"
              title="하이라이트 제거"
              size="xs"
              px={2}
              h="28px"
              borderRadius="sm"
              border="1px solid"
              borderColor="gray.200"
              bg="white"
              color="gray.700"
              _hover={{ bg: 'gray.100' }}
              onClick={removeHighlight}
            >
              지우기
            </IconButton>
          </Flex>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default HighLight;