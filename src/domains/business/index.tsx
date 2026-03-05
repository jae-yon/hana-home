import { useNavigate } from 'react-router-dom';

import { Button, Flex } from '@chakra-ui/react';

import { useResponsive } from '@/shared/hooks/useResponsive';

import { SubNavbarDesktop, SubNavbarMobile } from '@/shared/components/sub/SubNavbar';

import Ppa from '@/domains/business/ppa/Ppa';
import Rps from '@/domains/business/rps/Rps';
import Re100 from '@/domains/business/re100/Re100';
import ProfitCalculator from '@/domains/business/profit/Profit';
import SolarHome from '@/domains/business/solar-home/SolarHome';
import Repowering from '@/domains/business/repowering/Repowering';
import SolarParking from '@/domains/business/solar-parking/SolarParking';

interface BusinessProps {
  type: 'ppa' | 'rps' | 're100' | 're-powering' | 'profit-calculator' | 'solar-home' | 'solar-parking';
}

const navItems: { name: string, path: string }[] = [
  { name: '가정용태양광', path: '/business/solar-home' },
  { name: '주차장태양광', path: '/business/solar-parking' },
  { name: '자가용 PPA', path: '/business/ppa' },
  { name: '발전사업 RPS', path: '/business/rps' },
  { name: 'RE100', path: '/business/re100' },
  { name: '리파워링', path: '/business/re-powering' },
  { name: '예상 수익계산기', path: '/business/profit-calculator' },
];

export default function Business(props: BusinessProps) {
  const { type } = props;
  const { isDesktop } = useResponsive();

  const navigate = useNavigate();

  return (
    <Flex 
      width="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      {isDesktop ? <SubNavbarDesktop type={type} items={navItems} /> : <SubNavbarMobile type={type} items={navItems} />}
      {type === 'ppa' && <Ppa />}
      {type === 'rps' && <Rps />}
      {type === 're100' && <Re100 />}
      {type === 'solar-home' && <SolarHome />}
      {type === 're-powering' && <Repowering />}
      {type === 'solar-parking' && <SolarParking />}
      {type === 'profit-calculator' && <ProfitCalculator />}

      <Flex
        py={24}
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