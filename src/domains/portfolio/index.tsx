
import { Flex } from '@chakra-ui/react';

import { useResponsive } from '@/shared/hooks/useResponsive';

import PortfolioContents from './components/PortfolioContents';

import { SubNavbarDesktop, SubNavbarMobile } from '@/shared/components/sub/SubNavbar';

const navItems: { name: string, path: string }[] = [
  { name: 'PPA(자가소비형)', path: '/portfolio/ppa' },
  { name: 'RPS(발전사업)', path: '/portfolio/rps' },
  { name: '가정용(상계거래형) 태양광', path: '/portfolio/residential' },
  { name: '전기공사업', path: '/portfolio/electrical-work' },
];

interface PortfolioProps {
  type: 'ppa' | 'rps' | 'residential' | 'electrical-work';
}

export default function Portfolio(props: PortfolioProps) {
  const { type } = props;
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
      {type === 'ppa' && <PortfolioContents isDesktop={isDesktop} type={type} />}
      {type === 'rps' && <PortfolioContents isDesktop={isDesktop} type={type} />}
      {type === 'residential' && <PortfolioContents isDesktop={isDesktop} type={type} />}
    </Flex> 
  )
}