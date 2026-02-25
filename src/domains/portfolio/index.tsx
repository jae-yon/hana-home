
import { Flex } from '@chakra-ui/react';

import { useResponsive } from '@/shared/hooks/useResponsive';

import PortfolioContents from './components/PortfolioContents';

import { Portfolio as PortfolioType } from '@/types/common';

import { SubNavbarDesktop, SubNavbarMobile } from '@/shared/components/sub/SubNavbar';

const navItems: { name: string, path: string }[] = [
  { name: 'PPA', path: '/portfolio/ppa' },
  { name: 'RPS', path: '/portfolio/rps' },
  { name: '가정용태양광', path: '/portfolio/residential' },
];

interface PortfolioProps {
  type: 'ppa' | 'rps' | 'residential';
  items: PortfolioType[];
}

export default function Portfolio(props: PortfolioProps) {
  const { type, items } = props;
  const { isDesktop } = useResponsive();
  return (
    <Flex 
      gap={12}
      width="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      {isDesktop ? <SubNavbarDesktop type={type} items={navItems} /> : <SubNavbarMobile type={type} items={navItems} />}
      <PortfolioContents isDesktop={isDesktop} items={items} />
    </Flex> 
  )
}