import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { CheckCircleIcon, SettingsIcon, ShieldCheckIcon, SolarPanelIcon } from 'lucide-react';

import { Box, Grid, Text } from '@chakra-ui/react';

const benefits = [
  {
    num: '01',
    title: '안정성 확보',
    desc: '태양광 패널은 고압 전류가 흐릅니다. 잘못된 방법으로 청소하면 감전이나 화재 위험이 발생할 수 있습니다. 전문가들은 안전 장비와 절차를 숙지해 위험을 예방합니다.',
    icon: <ShieldCheckIcon />,
  },
  {
    num: '02',
    title: '효율성 극대화',
    desc: '일반적인 물청소나 걸레질은 먼지, 미세 오염물, 조류 배설물 등을 완전히 제거하기 어렵습니다. 전문가는 전용 장비와 세제를 사용해 패널 손상 없이 깨끗하게 청소합니다.',
    icon: <CheckCircleIcon />,
  },
  {
    num: '03',
    title: '패널 수명 연장',
    desc: '패널 표면을 잘못 닦으면 미세 스크래치가 생겨 빛 흡수가 방해되고, 장기적으로 수명이 짧아질 수 있습니다. 전문가는 재질에 맞는 방법으로 관리해 내구성을 유지합니다.',
    icon: <SolarPanelIcon />,
  },
  {
    num: '04',
    title: '정기적 관리 및 점검',
    desc: '전문 청소업체는 청소와 함께 패널 상태를 점검합니다. 균열, 접속 불량, 오염 패턴 등을 확인해 조기에 문제를 발견하고 추가 손해를 막을 수 있습니다.',
    icon: <SettingsIcon />,
  },
];

export default function SolarCleaningBenefits() {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Box
      px={{ base: 4, md: '6vw' }}
      my={24}
      width="100%"
    >
      <Text
        mb={2}
        color="green.500"
        fontWeight="800"
        fontFamily="NanumSquareNeo"
        fontSize={{ base: '12px', sm: '16px' }}
        ref={ref}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateY(0)" : "translateY(30px)"}
        transition="all 0.7s cubic-bezier(0.22,1,0.36,1)"
      >
        professional solar cleaning service
      </Text>
      <Text
        mb={8}
        color="gray.800"
        fontWeight="700"
        fontSize={{ base: '32px', sm: '32px', md: '48px', lg: '56px' }}
        ref={ref}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateY(0)" : "translateY(30px)"}
        transition="all 0.7s cubic-bezier(0.22,1,0.36,1)"
      >
        태양광 패널 청소를 
        <br /> 
        <Text as="span" color="green.500">윤성클린산업</Text>에 맡겨보세요
      </Text>

      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap={{ base: 4, md: 6 }}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateY(0)" : "translateY(30px)"}
        transition="all 1.2s cubic-bezier(0.22,1,0.36,1)"
      >
        {benefits.map((benefit) => (
          <Box
            key={benefit.num}
            bg="gray.50"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="lg"
            p={{ base: 5, md: 6 }}
            boxShadow="sm"
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: 'lg',
            }}
            transition="all 0.7s cubic-bezier(0.22,1,0.36,1)"
          >
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={4}>
              <Text
                fontFamily="NanumSquareNeo"
                fontWeight="900"
                color="green.600"
                fontSize={{ base: '14px', md: '16px' }}
              >
                {benefit.num}
              </Text>
              <Box
                aria-hidden
                color="green.500"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: '22px', md: '26px' }}
              >
                {benefit.icon}
              </Box>
            </Box>

            <Text
              mb={2}
              color="gray.800"
              fontWeight="800"
              fontFamily="NanumSquareNeo"
              fontSize={{ base: '18px', md: '20px' }}
              letterSpacing="-0.3px"
            >
              {benefit.title}
            </Text>
            <Text
              color="gray.700"
              fontFamily="NanumSquareNeo"
              fontSize={{ base: '14px', md: '15px' }}
              lineHeight={{ base: '1.9', md: '2.0' }}
              letterSpacing="-0.2px"
            >
              {benefit.desc}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}