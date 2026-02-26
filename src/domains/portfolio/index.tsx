
import { Flex } from '@chakra-ui/react';

import { useResponsive } from '@/shared/hooks/useResponsive';

import PortfolioContents from './components/PortfolioContents';

import { Portfolio as PortfolioType } from '@/types/common';

import { SubNavbarDesktop, SubNavbarMobile } from '@/shared/components/sub/SubNavbar';

const navItems: { name: string, path: string }[] = [
  { name: 'PPA(자가소비형)', path: '/portfolio/ppa' },
  { name: 'RPS(발전사업)', path: '/portfolio/rps' },
  { name: '가정용(상계거래형) 태양광', path: '/portfolio/residential' },
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