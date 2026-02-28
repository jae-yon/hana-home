import { Flex } from '@chakra-ui/react';

import { useResponsive } from '@/shared/hooks/useResponsive';

import { SubNavbarDesktop, SubNavbarMobile } from '@/shared/components/sub/SubNavbar';

import ProfitCalculator from '@/domains/profit';

interface BusinessProps {
  type: 'profit-calculator';
}

const navItems: { name: string, path: string }[] = [
  { name: '예상 수익계산기', path: '/business/profit-calculator' },
];

export default function Business(props: BusinessProps) {
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
      {type === 'profit-calculator' && <ProfitCalculator />}
    </Flex>
  );
}