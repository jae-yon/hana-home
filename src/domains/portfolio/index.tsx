
import { Flex } from '@chakra-ui/react';

import { useResponsive } from '@/shared/hooks/useResponsive';

import PortfolioContents from './components/PortfolioContents';
import PortfolioNavBarMobile from './components/PortfolioNavBarMobile';
import PortfolioNavBarDesktop from './components/PortfolioNavBarDesktop';

import { Portfolio as PortfolioType } from '@/types/common';

const navItems: { name: string, path: string }[] = [
  { name: 'PPA', path: '/portfolio/ppa' },
  { name: 'RPS', path: '/portfolio/rps' },
  { name: '가정용태양광', path: '/portfolio/residential' },
];

interface PortfolioProps {
  items: PortfolioType[];
}

export default function Portfolio(props: PortfolioProps) {
  const { items } = props;
  const { isDesktop } = useResponsive();
  return (
    <Flex 
      gap={12}
      width="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      {isDesktop ? <PortfolioNavBarDesktop items={navItems} /> : <PortfolioNavBarMobile items={navItems} />}
      <PortfolioContents isDesktop={isDesktop} items={items} />
    </Flex> 
  )
}