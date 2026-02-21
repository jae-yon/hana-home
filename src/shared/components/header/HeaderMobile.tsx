import { useState } from 'react';

import { Box, Collapsible, Image, Link, Text } from '@chakra-ui/react';

import { COMPANY_NAME } from '@/shared/config/constants';

interface headerLayoutProps {
  logo: string;
  isScrolled: boolean;
  headerMenu: { name: string, path: string, childMenu: { name: string, path: string }[] }[];
}

export default function HeaderMobile(props: headerLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Box width='100%'>
      {/* Top bar */}
      <Box
        width='100%'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        paddingX={4}
        paddingY={3}
        minHeight='56px'
        bg={isOpen || props.isScrolled ? 'white' : 'transparent'}
      >
        <Link href='/' display='flex' alignItems='center' gap={2} _hover={{ textDecoration: 'none' }}>
          {/* <Image src={props.logo} alt='logo' width={8} height={8} objectFit='contain' /> */}
          <Text fontSize='md' fontWeight='semibold' color={props.isScrolled || isOpen ? 'gray.800' : 'white'}>
            {COMPANY_NAME}
          </Text>
        </Link>

        {/* Hamburger button */}
        <Box
          as='button'
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          width='28px'
          height='28px'
          display='flex'
          alignItems='center'
          justifyContent='center'
          borderRadius='lg'
          borderColor={isOpen || props.isScrolled ? 'blackAlpha.200' : 'transparent'}
          bg={isOpen || props.isScrolled ? 'white' : 'transparent'}
          cursor='pointer'
          _active={{ transform: 'scale(0.98)', bg: 'blackAlpha.100' }}
        >
          <Text fontSize='xl' lineHeight='1' color={isOpen || props.isScrolled ? 'gray.800' : 'white'} userSelect='none'>
            {isOpen ? '✕' : '☰'}
          </Text>
        </Box>
      </Box>

      {/* Menu panel */}
      <Collapsible.Root open={isOpen}>
        <Collapsible.Content>
          <Box
            width='100%'
            bg='white'
            borderBottom='1px solid'
            borderColor='blackAlpha.100'
            boxShadow='0 10px 25px rgba(0,0,0,0.06)'
            paddingX={3}
            paddingBottom={3}
          >
            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
              {props.headerMenu.map((menu) => (
                <Link
                  key={menu.name}
                  href={menu.path}
                  width='100%'
                  paddingX={4}
                  paddingY={3}
                  borderRadius='lg'
                  color='gray.800'
                  fontWeight='medium'
                  fontSize='md'
                  transition='all 0.3s ease'
                  justifyContent='center'
                  _hover={{ textDecoration: 'none', bg: 'orange.500', color: 'white' }}
                >
                  {menu.name}
                </Link>
              ))}
            </Box>
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
}