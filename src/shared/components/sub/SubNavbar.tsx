import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LucideArrowRight, LucideArrowLeft, LucideChevronLeft } from 'lucide-react';

import { Flex, Button, Text, IconButton, Drawer } from '@chakra-ui/react';

interface SubNavbarProps {
  type: any;
  items: { name: string, path: string }[];
}

export function SubNavbarDesktop(props: SubNavbarProps) {
  const { type, items } = props;

  const navigate = useNavigate();
  
  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <Flex
      gap={0}
      shadow="sm"
      width="100%"
      flexDirection="row"
      flexWrap="wrap"
      alignItems="center"
      justify="flex-start"
      backgroundColor="gray.800"
    >
      {items.map((item) => (
        <Button
          px={10}
          py={10}
          h="auto"
          minW="auto"
          border="none"
          fontSize="lg"
          key={item.path}
          borderRadius={0}
          overflow="hidden"
          position="relative"
          fontWeight="semibold"
          letterSpacing="0.2em"
          fontFamily="NanumSquareNeo"
          color={type === item.path.split('/')[2] ? 'white' : 'white'}
          bg={type === item.path.split('/')[2] ? 'orange.500' : 'transparent'}
          _before={{
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '0%',
            height: '100%',
            bg: 'orange.500',
            transition: 'width 0.35s ease-in-out',
            zIndex: 0,
          }}
          _hover={{
            color: 'white',
            _before: {
              width: '100%',
            },
          }}
          _active={{
            color: 'white',
            _before: {
              width: '100%',
            },
          }}
          onClick={() => handleClick(item.path)}
        >
          <Text as="span" position="relative" zIndex={1} display="flex" alignItems="center" gap={2}>
            {item.name}
            <LucideArrowRight size={16} strokeWidth={2} />
          </Text>
        </Button>
      ))}
    </Flex>
  );
}

export function SubNavbarMobile(props: SubNavbarProps) {
  const { type, items } = props;

  const navigate = useNavigate();
  
  const [open, setOpen] = useState(false);

  const handleClick = (path: string) => {
    navigate(path);
    setOpen(!open);
  };

  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="flex-end"
      backgroundColor="gray.800"
      shadow="sm"
    >
      <Drawer.Root
        placement="end"
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        size="xs"
      >
        <Drawer.Backdrop />
        {/* 메뉴 열기 버튼 */}
        <Drawer.Trigger asChild>
          <IconButton
            p={2}
            size="2xl"
            fontSize="4xl"
            variant="subtle"
            color="white"
            bg="orange.500"
            border="none"
            borderRadius="none"
            aria-label="메뉴 열기"
          >
            <LucideChevronLeft size={32} strokeWidth={2} />
          </IconButton>
        </Drawer.Trigger>
        
        {/* 메뉴 레이아웃 */}
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Body pt={4}>
              <Flex flexDirection="column" gap={4}>
                {items.map((item) => {
                  const isActive = type === item.path.split('/')[2];
                  return (
                    <Button
                      key={item.path}
                      py={4}
                      px={4}
                      h="auto"
                      minW="auto"
                      justifyContent="flex-start"
                      border="none"
                      fontSize="md"
                      color={isActive ? 'white' : 'gray.700'}
                      bg={isActive ? 'orange.500' : 'transparent'}
                      borderRadius={0}
                      overflow="hidden"
                      position="relative"
                      fontWeight="semibold"
                      letterSpacing="0.2em"
                      fontFamily="NanumSquareNeo"
                      _before={{
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '0%',
                        height: '100%',
                        bg: 'orange.500',
                        transition: 'width 0.5s ease-in-out',
                        zIndex: 0,
                      }}
                      _hover={{
                        color: 'white',
                        _before: {
                          width: '100%',
                        },
                      }}
                      _active={{
                        color: 'white',
                        _before: {
                          width: '100%',
                        },
                      }}
                      onClick={() => handleClick(item.path)}
                    >
                      <Text
                        gap={2}
                        as="span"
                        zIndex={1}
                        display="flex"
                        position="relative"
                        alignItems="center"
                        fontSize="sm"
                      >
                        <LucideArrowLeft size={16} strokeWidth={2} />
                        {item.name}
                      </Text>
                    </Button>
                  );
                })}
              </Flex>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Flex>
  );
}