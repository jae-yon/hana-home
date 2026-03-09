import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { Stack, Text, Image, Box } from '@chakra-ui/react';

import logo from '@/assets/logo.svg';

export function IntroGreetings() {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });

  return (
    <Stack
      mb={10}
      py={28}
      px={10}
      width="100%"
    >
      <Box 
        mb={10}
        display="flex" 
        alignItems="center" 
        justifyContent="center"
        ref={ref}
        opacity={isView ? 1 : 0}
        transition="transform 1s ease, opacity 1s ease"
        transform={isView ? 'translateY(0)' : 'translateY(100px)'}
      >
        <Image src={logo} alt="logo" width={100} height={100} objectFit="contain" />
      </Box>
      <Box 
        mx="auto"
        width={{ base: '100%', md: '75%', lg: '60%' }}
        ref={ref}
        opacity={isView ? 1 : 0}
        transition="transform 1.5s ease, opacity 1s ease"
        transform={isView ? 'translateY(0)' : 'translateY(100px)'}
      >
        <Stack gap={{ base: 4 }}>
          <Text
            color="gray.700"
            fontWeight="semibold"
            fontFamily="pretendard"
            fontSize={{ base: '17px', sm: '18px', md: '19px', lg: '20px' }}
            letterSpacing="-0.01em"
            lineHeight={{ base: '1.6', md: '1.8' }}
          >
            ㈜하나솔루션은 태양광 구조물 개발 및 제작부터 태양광 발전사업 시행, 시공까지 태양광 사업의 전반을 제공하는 기업입니다.
          </Text>
          <Text
            color="gray.700"
            fontWeight="semibold"
            fontFamily="pretendard"
            fontSize={{ base: '17px', sm: '18px', md: '19px', lg: '20px' }}
            letterSpacing="-0.01em"
            lineHeight={{ base: '1.7', md: '1.8' }}
          >
            자체 기술개발 연구 결과와 풍부한 현장 경험을 바탕으로 각 현장에 맞춘 최적의 태양광 발전소를 제안해드립니다.
          </Text>
          <Text
            color="gray.700"
            fontWeight="semibold"
            fontFamily="pretendard"
            fontSize={{ base: '17px', sm: '18px', md: '19px', lg: '20px' }}
            letterSpacing="-0.01em"
            lineHeight={{ base: '1.7', md: '1.8' }}
          >
            믿을 수 있는 태양광 발전 시스템과 용융아연도금 및 포스맥 구조물 적용, 신속한 업무 처리를 통해
            태양광 발전사업의 든든한 사업 파트너로 함께하고 있습니다.
          </Text>
          <Text
            color="gray.700"
            fontWeight="semibold"
            fontFamily="pretendard"
            fontSize={{ base: '17px', sm: '18px', md: '19px', lg: '20px' }}
            letterSpacing="-0.01em"
            lineHeight={{ base: '1.7', md: '1.8' }}
          >
            친환경 에너지 보급과 고객님의 밝은 미래를 위해 최고의 품질과 합리적인 발전 비용으로
            고객 만족을 위해 최선을 다하겠습니다.
          </Text>
        </Stack>
      </Box>
    </Stack>
  )
}