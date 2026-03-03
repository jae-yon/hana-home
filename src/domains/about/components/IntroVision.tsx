import { Box, Flex, Heading, Stack, Text, Image } from '@chakra-ui/react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface IntroVisionProps {
  isDesktop: boolean;
}

const intro_img_vision = "https://images.unsplash.com/photo-1694248407533-d74c41fb5b68?q=80&w=1024&auto=format&fit=crop"

export function IntroVision(props: IntroVisionProps) {
  const { isDesktop } = props;
  const ref = useRef(null);
  const isView = useInView(ref);

  return (
    <Stack
      py={28}
      width="100%"
      backgroundColor="blackAlpha.900"
    >
      <Heading
        mb={10}
        px={10}
        ref={ref}
        fontWeight="bold"
        lineHeight="1.25"
        letterSpacing="0.02em"
        color="white"
        opacity={isView ? 1 : 0}
        transition="transform 1s ease, opacity 1s ease"
        transform={isView ? 'translateX(0)' : 'translateX(-200px)'}
        fontSize={{ base: '28px', sm: '32px', md: '36px', lg: '56px' }}
      >
        OUR VISION
      </Heading>
      <Flex
        gap={{ base: 10, md: 0 }}
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
        justifyContent={{ base: 'center', md: 'center' }}
      >
        <Box 
          px={10}
          ref={ref}
          opacity={isView ? 1 : 0}
          width={{ base: '100%', md: '50%' }} 
          transition="transform 1.5s ease, opacity 1s ease"
          transform={isView ? 'translateX(0)' : 'translateX(-200px)'}
        >
          <Text 
            mb={2}
            color="white" 
            fontWeight="semibold" 
            fontFamily="pretendard" 
            fontSize={{ base: '14px', sm: '18px', md: '19px', lg: '20px' }} 
            letterSpacing="-0.01em" lineHeight={{ base: '1.6', md: '1.8' }}
          >
            ㈜하나솔루션은 태양광 구조물 기술력과 발전사업 수행 역량을 기반으로
            지속가능한 에너지 생태계를 선도하는 친환경 에너지 전문 기업으로 성장하고자 합니다.
          </Text>
          <Text 
            color="white" 
            fontWeight="semibold" 
            fontFamily="pretendard" 
            fontSize={{ base: '14px', sm: '18px', md: '19px', lg: '20px' }} 
            letterSpacing="-0.01em" lineHeight={{ base: '1.6', md: '1.8' }}
          >
          우리는 기술 혁신과 사업 실행력을 바탕으로 에너지 산업의 새로운 기준을 제시하며 고객과 사회에 장기적 가치를 창출합니다.
          </Text>
        </Box>
        <Box 
          display="flex"
          alignItems="end"
          justifyContent="end"
          ref={ref}
          opacity={isView ? 1 : 0}
          width={{ base: '100%', md: '50%' }}
          transition="transform 1.5s ease, opacity 1s ease"
          transform={isView ? 'translateY(0)' : 'translateY(200px)'}
        >
          <Image
            ref={ref}
            width="90%"
            objectFit="cover" 
            borderLeftRadius="xl"
            opacity={isView ? 1 : 0}
            src={intro_img_vision} 
            height={isDesktop ? '480px' : '360px'}
          />
        </Box>
      </Flex>
    </Stack>
  )
}