import { Box, Flex, Stack } from '@chakra-ui/react';

import { useResponsive } from '@/shared/hooks/useResponsive';

import { PerformanceHead } from './components/PerformanceHead';
import { PerformanceContents } from './components/PerformanceContents';

import performanceImage01 from '@/assets/images/performance/performance_image_01.jpg';
import performanceImage02 from '@/assets/images/performance/performance_image_02.jpg';
import performanceImage03 from '@/assets/images/performance/performance_image_03.jpg';
import performanceImage05 from '@/assets/images/performance/performance_image_05.jpg';
import performanceImage07 from '@/assets/images/performance/performance_image_07.jpg';

const performanceItems = [
  {
    id: 1,
    image: performanceImage01,
    title: "태양광 발전소",
    subtitle: "태양광 발전소",
    href: "#performance",
  },
  {
    id: 2,
    image: performanceImage02,
    title: "태양광 발전소",
    subtitle: "태양광 발전소",
    href: "#performance",
  },
  {
    id: 3,
    image: performanceImage03,
    title: "태양광 발전소",
    subtitle: "태양광 발전소",
    href: "#performance",
  },
  {
    id: 4,
    image: performanceImage05,
    title: "태양광 발전소",
    subtitle: "태양광 발전소",
    href: "#performance",
  },
  {
    id: 5,
    image: performanceImage07,
    title: "태양광 발전소",
    subtitle: "태양광 발전소",
    href: "#performance",
  },
]

export default function Performance() {
  const { isDesktop } = useResponsive();

  return (
    <Box 
      width="100%"
      backgroundColor="gray.100"
      paddingY={8}
    >
      <Stack
        maxW="1280px"
        height={isDesktop ? "1000px" : "auto"}
        mx="auto"
        py={{ base: "48px", md: "80px" }}
        px={{ base: 4, md: 8 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        <Flex
          width="100%"
          flexDirection={isDesktop ? 'row' : 'column'}
          gap={8}
          alignItems={isDesktop ? 'center' : 'stretch'}
          justifyContent="center"
        >
          {/* 모바일: CaseHead 위, CaseContents 아래 / 데스크톱: Contents 왼쪽, Head 오른쪽 */}
          {!isDesktop ? (
            <>
              <Box width="100%">
                <PerformanceHead isDesktop={isDesktop} />
              </Box>
              <Box width="100%" flex={1}>
                <PerformanceContents items={performanceItems} />
              </Box>
            </>
          ) : (
            <>
              <Box flex={1} minW={0} maxW="50%" px={{ md: 4 }}>
                <PerformanceContents items={performanceItems} />
              </Box>
              <Box flexShrink={0} width={{ md: '50%' }} maxW="50%" px={{ md: 4 }}>
                <PerformanceHead isDesktop={isDesktop} />
              </Box>
            </>
          )}
        </Flex>
      </Stack>
    </Box>
  );
}