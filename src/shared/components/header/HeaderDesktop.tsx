import { useState } from 'react';

import { Box, Collapsible, Link, Text } from '@chakra-ui/react';

interface headerLayoutProps {
  logo: string;
  isScrolled: boolean;
  headerMenu: { name: string, path: string, childMenu: { name: string, path: string }[] }[];
}

export default function HeaderDesktop(props: headerLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
      {/* logo */}
      <Box display='flex' alignItems='center' justifyContent='center' marginTop={4} paddingTop={4}>
        {/* <Image src={props.logo} alt='logo' width={16} objectFit='cover' padding={4} /> */}
        <Text fontSize='lg' fontWeight='medium' color='white' letterSpacing='0.1em'>㈜하나솔루션</Text>
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        position='relative'
        onMouseEnter={() => setTimeout(() => setIsOpen(true), 100)}
        onMouseLeave={() => setTimeout(() => setIsOpen(false), 100)}
        backgroundColor={!props.isScrolled ? '' : 'transparent'}
        padding={4}
        margin={4}
        _hover={!props.isScrolled ? { backgroundColor: 'blackAlpha.300', borderRadius: 'xl', backdropFilter: 'blur(5px)', transition: 'all 0.5s ease-in-out' } : {}}
      >
        {/* menu */}
        <Box display='flex' alignItems='start' justifyContent='center' gap={8} paddingX={4} >
          {/* default menu */}
          {props.headerMenu.map((menu) => (
            <Box key={menu.name} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
              <Link href={menu.path}>
                <Text
                  paddingX={8}
                  paddingY={2}
                  fontSize='lg'
                  color={props.isScrolled ? 'gray.700' : 'white'}
                  fontWeight='medium'
                  letterSpacing='0.1em'
                  transition='all 0.5s ease'
                  borderBottom='3px solid transparent'
                  _hover={{ borderBottomColor: 'red.400', color: 'red.border', fontWeight: 'bold' }}
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
                        color={props.isScrolled ? 'gray.700' : 'white'}
                        fontWeight='medium'
                        transition='all 0.5s ease'
                        letterSpacing='0.1em'
                        _hover={{ color: 'red.solid', fontWeight: 'bold' }}
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