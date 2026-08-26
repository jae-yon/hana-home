import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { Stack, Box, Heading, Grid, Flex, Image, Text } from '@chakra-ui/react';

import coreValueImg_01 from '@/assets/images/3d/3d_icon_01.png';
import coreValueImg_02 from '@/assets/images/3d/3d_icon_02.png';
import coreValueImg_03 from '@/assets/images/3d/3d_icon_03.png';
import coreValueImg_04 from '@/assets/images/3d/3d_icon_04.png';

const core_value_bg = "https://images.unsplash.com/photo-1598837443404-47d99b7228dc?q=80&w=1280&auto=format&fit=crop"

function CoreValueBox(props: {
  isView: boolean;
  image: string;
  title: string;
  subTitle: string;
  description: string;
}) {
  const { isView, image, title, subTitle, description } = props;

  return (
    <Box
      p={{ base: 6, md: 8 }}
      bg="gray.100/90"
      borderRadius="xl"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      opacity={isView ? 1 : 0}
      transition="transform 1.5s ease, opacity 1s ease"
      transform={isView ? 'translateY(0)' : 'translateY(100px)'}
    >
      <Flex 
        mb={2}
        direction="column"
        alignItems="center" 
        justifyContent="center"
        fontFamily="NanumSquareNeo"
      >
        <Image 
          width={200} 
          height={200} 
          objectFit="contain" 
          src={image} 
        />
        <Text 
          color="gray.800" 
          fontSize="24px"
          fontWeight="900" 
          textAlign="center"
          letterSpacing="-0.01em"
        >
          {title}
        </Text>
        <Text 
          mb={8}
          fontSize="16px"
          color="gray.800" 
          fontWeight="700" 
          textAlign="center"
          letterSpacing="-0.01em"
        >
          {subTitle}
        </Text>
        <Text 
          fontSize="14px" 
          color="gray.600" 
          lineHeight="1.7"
          fontWeight="700"
          textAlign="start"
          letterSpacing="-0.01em"
        >
          {description}
        </Text>
      </Flex>
    </Box>
  )
}

// 회사소개 - 핵심가치
export function IntroValue() {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });

  return (
    <Stack
      py={20}
      ref={ref}
      width="100%"
      overflow="hidden"
      position="relative"
      minH={{ base: '720px', md: '960px' }}
    >
      {/* background image, faded at the edges */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundImage={`url(${core_value_bg})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        css={{
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 35%, black 65%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 35%, black 65%, transparent 100%)',
        }}
      />

      {/* top fade — connect to the dark section above */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h={{ base: '280px', md: '420px' }}
        pointerEvents="none"
        background="linear-gradient(to bottom, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 40%, rgba(0,0,0,0.35) 70%, transparent 100%)"
      />

      {/* bottom fade — connect to the white section below */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h={{ base: '280px', md: '420px' }}
        pointerEvents="none"
        background="linear-gradient(to top, #fff 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0.4) 70%, transparent 100%)"
      />

      {/* content */}
      <Box
        position="relative"
        zIndex={1}
        width="100%"
        py={{ base: 12, md: 16 }}
        px={{ base: 4, md: 10 }}
      >
        <Heading
          mb={20}
          color="white"
          fontWeight="bold"
          textAlign="center"
          letterSpacing="0.05em"
          textShadow="0 0 4px rgba(0, 0, 0, 0.8)"
          fontSize={{ base: '28px', sm: '32px', md: '56px' }}
          opacity={isView ? 1 : 0}
          transition="transform 1s ease, opacity 1s ease"
          transform={isView ? 'translateY(0)' : 'translateY(-100px)'}
        >
          CORE VALUE
        </Heading>
        <Grid
          mx="auto"
          w="100%"
          p={{ base: 4, md: 8 }}
          gap={{ base: 8, md: 12 }}
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        >
          <CoreValueBox
            isView={isView}
            image={coreValueImg_01}
            title="품질 우선"
            subTitle="Quality First"
            description="철저한 품질 관리와 알루미늄 구조 기술로 내구성과 안정성을 완성합니다."
          />
          <CoreValueBox
            isView={isView}
            image={coreValueImg_02}
            title="현장 중심 솔루션"
            subTitle="Optimized Solution"
            description="현장에 최적화된 설계로 맞춤형 태양광 솔루션을 제공하겠습니다."
          />
          <CoreValueBox
            isView={isView}
            image={coreValueImg_03}
            title="신뢰와 책임"
            subTitle="Trust & Responsibility"
            description="사업 전 과정을 책임지는 신뢰받는 파트너가 되겠습니다."
          />
          <CoreValueBox
            isView={isView}
            image={coreValueImg_04}
            title="지속가능성"
            subTitle="Sustainability"
            description="친환경 에너지 확산으로 지속가능한 미래를 만들겠습니다."
          />
        </Grid>
      </Box>
    </Stack>
  )
}