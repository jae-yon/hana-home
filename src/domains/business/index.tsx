import { Button, Flex } from '@chakra-ui/react';

import { useResponsive } from '@/shared/hooks/useResponsive';

import { SubNavbarDesktop, SubNavbarMobile } from '@/shared/components/sub/SubNavbar';

import ProfitCalculator from '@/domains/business/profit/Profit';

import Repowering from '@/domains/business/repowering/Repowering';
import { useNavigate } from 'react-router-dom';

interface BusinessProps {
  type: 're-powering' | 'profit-calculator';
}

const navItems: { name: string, path: string }[] = [
  { name: '리파워링', path: '/business/re-powering' },
  { name: '예상 수익계산기', path: '/business/profit-calculator' },
];

export default function Business(props: BusinessProps) {
  const { type } = props;
  const { isDesktop } = useResponsive();

  const navigate = useNavigate();

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
      {type === 're-powering' && <Repowering />}

      <Flex
        py={16}
        width="100%"
        alignItems="center"
        justifyContent="center"
        backgroundColor="gray.800"
      >
        <Button
          px={12}
          py={8}
          size='xl'
          shadow='xl'
          bg='#F97316'
          color='white'
          fontSize='xl'
          fontWeight='bold'
          borderRadius='full'
          fontFamily='NanumSquareNeo'
          transition='all 0.3s ease-in-out'
          _hover={{ transform: 'translateY(-3px)', bg: 'orange.600' }}
          onClick={() => {
            navigate('/support/inquiry');
          }}
        >
          견적문의 바로가기
        </Button>
      </Flex>
    </Flex>
  );
}