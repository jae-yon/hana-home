import { useState } from 'react';

import { Box, Collapsible, Link, Text } from '@chakra-ui/react';

import { COMPANY_NAME } from '@/shared/config/constants';

interface headerLayoutProps {
  logo: string;
  isScrolled: boolean;
  headerMenu: { name: string, path: string, childMenu: { name: string, path: string }[] }[];
}

export default function HeaderDesktop(props: headerLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
      <Box display='flex' alignItems='center' justifyContent='center' marginTop={4} paddingTop={4}>
        {/* logo */}
        {/* <Image src={props.logo} alt='logo' width={16} objectFit='cover' padding={4} /> */}
        <Link href='/' outline="none">
          <Text fontSize='lg' fontWeight='semibold' color={props.isScrolled ? 'gray.800' : 'white'}>{COMPANY_NAME}</Text>
        </Link>
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        position='relative'
        backgroundColor={!props.isScrolled ? '' : 'transparent'}
        padding={4}
        margin={4}
        _hover={!props.isScrolled ? { backgroundColor: 'blackAlpha.300', borderRadius: 'xl', backdropFilter: 'blur(5px)', transition: 'all 1s ease-in-out' } : {}}
      >
        {/* menu */}
        <Box 
          display='flex' 
          alignItems='start' 
          justifyContent='center' 
          gap={8} 
          paddingX={4} 
          onMouseEnter={() => setTimeout(() => setIsOpen(true))}
          onMouseLeave={() => setTimeout(() => setIsOpen(false))}
        >
          {/* default menu */}
          {props.headerMenu.map((menu) => (
            <Box key={menu.name} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
              <Link href={menu.path}>
                <Text
                  paddingX={10}
                  paddingY={2}
                  fontSize='lg'
                  color={props.isScrolled ? 'gray.700' : 'white'}
                  fontWeight='medium'
                  transition='all 0.3s ease-in-out'
                  borderBottom='2px solid transparent'
                  _hover={{ borderBottomColor: 'orange.border', color: 'orange.border' }}
                >
                  {menu.name}
                </Text>
              </Link>
              {/* sub menu */}
              <Collapsible.Root open={isOpen}>
                <Collapsible.Content>
                  <Box
                    display='flex'
                    alignItems='center'
                    flexDirection='column'
                    justifyContent='center'
                    gap={2}
                    paddingY={2}
                  >
                    {menu.childMenu.map((child) => (
                      <Link
                        key={child.name}
                        href={child.path}
                        paddingX={4}
                        paddingY={2}
                        fontSize='sm'
                        borderRadius='md'
                        bg='transparent'
                        color={props.isScrolled ? 'gray.700' : 'white'}
                        fontWeight='medium'
                        transition='all 0.3s ease-in-out'
                        letterSpacing='0.1em'
                        _hover={{ color: 'orange.border', backgroundColor: 'orange.100/50' }}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </Box>
                </Collapsible.Content>
              </Collapsible.Root>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}