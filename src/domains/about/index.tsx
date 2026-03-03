import { Flex } from '@chakra-ui/react';

import { useResponsive } from '@/shared/hooks/useResponsive';
import { SubNavbarDesktop, SubNavbarMobile } from '@/shared/components/sub/SubNavbar';

import { Intro } from './components/Intro';

interface AboutProps {
  type: 'introduction' | 'location';
}

const navItems: { name: string, path: string }[] = [
  { name: '회사소개', path: '/about/introduction' },
  { name: '오시는 길', path: '/about/location' },
];

export default function About(props: AboutProps) {
  const { type } = props;
  const { isDesktop } = useResponsive();
  return (
    <Flex 
      width="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      {isDesktop ? <SubNavbarDesktop type={type} items={navItems} /> : <SubNavbarMobile type={type} items={navItems} />}
      {type === 'introduction' && <Intro isDesktop={isDesktop} />}
    </Flex>
  );
}
    
