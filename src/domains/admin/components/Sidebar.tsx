import { Box, Flex, HStack, IconButton, Text, VStack, Link, Image } from '@chakra-ui/react';
import {
  LogOutIcon,
  AppWindowIcon,
  SolarPanelIcon,
  PanelLeftOpenIcon,
  PanelLeftCloseIcon,
} from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import logo from '@/assets/logo.svg';

const items = [
  {
    label: '팝업창 관리',
    icon: <AppWindowIcon size={18} />,
    type: 'popup',
    path: '/hana/back/admin/popup',
  },
  {
    label: '시공 사례 관리',
    icon: <SolarPanelIcon size={18} />,
    type: 'portfolio',
    path: '/hana/back/admin/portfolio',
  },
];

export default function Sidebar() {
  const [isFolded, setIsFolded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
    window.location.href = '/';
  };

  return (
    <Flex
      as="aside"
      w={isFolded ? '72px' : '240px'}
      minW={isFolded ? '72px' : '240px'}
      bg="gray.800"
      color="white"
      direction="column"
      transition="width 0.2s ease, min-width 0.2s ease"
    >
      <Flex
        h="72px"
        px={isFolded ? 3 : 5}
        align="center"
        justify={isFolded ? 'center' : 'space-between'}
        borderBottomWidth="1px"
        borderColor="whiteAlpha.200"
      >
        {!isFolded && (
          <Link href="/" _hover={{ textDecoration: "none" }} outline="none">
            <HStack>
              <Flex>
                <Image src={logo} alt="logo" width={10} height={10} objectFit="contain" />
              </Flex>
              <VStack
                ml={1}
                align="flex-start"
              >
                <Text
                  fontSize="8px"
                  fontWeight="600"
                  color={"white"}
                  letterSpacing="0.15em"
                  textTransform="uppercase"
                  lineHeight={0.6}
                >
                  HanaSolution
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color={"white"}
                  letterSpacing="0.1em"
                  lineHeight={1.2}
                >
                  ㈜하나솔루션
                </Text>
              </VStack>
            </HStack>
          </Link>
        )}
        <IconButton
          aria-label={isFolded ? '사이드바 펼치기' : '사이드바 접기'}
          size="sm"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={() => setIsFolded((folded) => !folded)}
        >
          {isFolded ? <PanelLeftOpenIcon size={18} /> : <PanelLeftCloseIcon size={18} />}
        </IconButton>
      </Flex>

      <VStack as="nav" gap={1} p={2} align="stretch" flex="1">
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Box
              as="button"
              key={item.type}
              w="100%"
              h="40px"
              px={isFolded ? 0 : 2.5}
              display="flex"
              alignItems="center"
              justifyContent={isFolded ? 'center' : 'flex-start'}
              gap={2}
              borderRadius="sm"
              bg={isActive ? 'orange.600' : 'transparent'}
              color={isActive ? 'white' : 'gray.300'}
              cursor="pointer"
              transition="background 0.15s ease"
              _hover={{ bg: isActive ? 'orange.600' : 'whiteAlpha.200' }}
              title={isFolded ? item.label : undefined}
              onClick={() => navigate(item.path)}
            >
              <Box flexShrink={0}>{item.icon}</Box>
              {!isFolded && (
                <Text fontFamily="Pretendard" fontSize="14px" fontWeight="600" whiteSpace="nowrap">
                  {item.label}
                </Text>
              )}
            </Box>
          );
        })}
      </VStack>

      <Box p={2} borderTopWidth="1px" borderColor="whiteAlpha.200">
        <Box
          as="button"
          w="100%"
          h="40px"
          px={isFolded ? 0 : 2.5}
          display="flex"
          alignItems="center"
          justifyContent={isFolded ? 'center' : 'flex-start'}
          gap={2}
          borderRadius="sm"
          color="gray.300"
          cursor="pointer"
          transition="background 0.15s ease"
          _hover={{ bg: 'whiteAlpha.200', color: 'white' }}
          title={isFolded ? '로그아웃' : undefined}
          onClick={handleLogout}
        >
          <Box flexShrink={0}>
            <LogOutIcon size={18} />
          </Box>
          {!isFolded && (
            <Text fontFamily="Pretendard" fontSize="14px" fontWeight="600" whiteSpace="nowrap">
              로그아웃
            </Text>
          )}
        </Box>
      </Box>
    </Flex>
  );
}
