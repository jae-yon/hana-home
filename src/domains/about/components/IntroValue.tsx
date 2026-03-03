import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { Stack, Box, Heading, Grid, Flex, Image, Text } from '@chakra-ui/react';

import coreValueImg_01 from '@/assets/images/3d/3d_icon_01.png';
import coreValueImg_02 from '@/assets/images/3d/3d_icon_02.png';
import coreValueImg_03 from '@/assets/images/3d/3d_icon_03.png';
import coreValueImg_04 from '@/assets/images/3d/3d_icon_04.png';

const core_value_bg = "https://images.unsplash.com/photo-1598837443404-47d99b7228dc?q=80&w=1280&auto=format&fit=crop"

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
      {/* background image */}
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
      />

      {/* backdrop */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-b, blackAlpha.800 40%, blackAlpha.900 100%)"
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
          textShadow="0 0 5px rgba(0, 0, 0, 0.5)"
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
          gap={{ base: 8, md: 10 }}
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        >
          <Box
            bg="blue.100"
            boxShadow="lg"
            borderRadius="xl"
            p={{ base: 6, md: 8 }}
            opacity={isView ? 1 : 0}
            transition="transform 1.5s ease, opacity 1s ease"
            transform={isView ? 'translateY(0)' : 'translateY(100px)'}
          >
            <Flex 
              mb={2}
              direction="column"
              alignItems="center" 
              justifyContent="center"
            >
              <Image 
                width={200} 
                height={200} 
                objectFit="contain" 
                src={coreValueImg_01} 
              />
              <Text 
                color="gray.800" 
                fontSize="24px"
                fontWeight="900" 
                textAlign="center"
                letterSpacing="-0.01em"
                fontFamily="NanumSquareNeo"
              >
                품질 우선
              </Text>
              <Text 
                mb={8}
                fontSize="16px"
                color="gray.800" 
                fontWeight="700" 
                textAlign="center"
                letterSpacing="-0.01em"
                fontFamily="NanumSquareNeo"
              >
                Quality First
              </Text>
              <Text 
                fontSize="14px" 
                color="gray.600" 
                lineHeight="1.7"
                fontWeight="700"
                textAlign="start"
                letterSpacing="-0.01em"
                fontFamily="NanumSquareNeo"
              >
                철저한 품질 관리와 알루미늄 구조 기술로
                내구성과 안정성을 완성합니다.
              </Text>
            </Flex>
          </Box>
          <Box
           boxShadow="lg"
           bg="orange.100"
           borderRadius="xl"
           p={{ base: 6, md: 8 }}
           opacity={isView ? 1 : 0}
            transition="transform 1.5s ease, opacity 1s ease"
           transform={isView ? 'translateY(0)' : 'translateY(100px)'}
           _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
          >
            <Flex 
              mb={2}
              direction="column"
              alignItems="center" 
              justifyContent="center"
            >
              <Image 
                width={200} 
                height={200} 
                objectFit="contain" 
                src={coreValueImg_02} 
              />
              <Text 
                color="gray.800" 
                fontSize="24px"
                fontWeight="900" 
                textAlign="center"
                letterSpacing="-0.01em"
                fontFamily="NanumSquareNeo"
              >
                현장 중심 솔루션
              </Text>
              <Text 
                mb={8}
                fontSize="16px"
                color="gray.800" 
                fontWeight="700" 
                textAlign="center"
                letterSpacing="-0.01em"
                fontFamily="NanumSquareNeo"
              >
                Optimized Solution
              </Text>
              <Text 
                fontSize="14px" 
                color="gray.600" 
                lineHeight="1.7"
                textAlign="start"
                letterSpacing="-0.01em"
                fontWeight="700"
                fontFamily="NanumSquareNeo"
              >
                현장에 최적화된 설계로
                맞춤형 태양광 솔루션을 제공하겠습니다.
              </Text>
            </Flex>
          </Box>
          <Box
            boxShadow="lg"
            bg="red.100"
            borderRadius="xl"
            p={{ base: 6, md: 8 }}
            opacity={isView ? 1 : 0}
            transition="transform 1.5s ease, opacity 1s ease"
            transform={isView ? 'translateY(0)' : 'translateY(100px)'}
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
          >
            <Flex 
              mb={2}
              direction="column"
              alignItems="center" 
              justifyContent="center"
            >
              <Image 
                width={200} 
                height={200} 
                objectFit="contain" 
                src={coreValueImg_03} 
              />
              <Text 
                color="gray.800" 
                fontSize="24px"
                fontWeight="900" 
                textAlign="center"
                letterSpacing="-0.01em"
                fontFamily="NanumSquareNeo"
              >
                신뢰와 책임
              </Text>
              <Text 
                mb={8}
                fontSize="16px"
                color="gray.800" 
                fontWeight="700" 
                textAlign="center"
                letterSpacing="-0.01em"
                fontFamily="NanumSquareNeo"
              >
                Trust & Responsibility
              </Text>
              <Text 
                fontSize="14px" 
                color="gray.600" 
                lineHeight="1.7"
                textAlign="start"
                letterSpacing="-0.01em"
                fontWeight="700"
                fontFamily="NanumSquareNeo"
              >
                사업 전 과정을 책임지는
                신뢰받는 파트너가 되겠습니다.
              </Text>
            </Flex>
          </Box>
          <Box
            boxShadow="lg"
            bg="green.100"
            borderRadius="xl"
            p={{ base: 6, md: 8 }}
            opacity={isView ? 1 : 0}
            transition="transform 1.5s ease, opacity 1s ease"
            transform={isView ? 'translateY(0)' : 'translateY(100px)'}
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
          >
            <Flex 
              mb={2}
              direction="column"
              alignItems="center" 
              justifyContent="center"
            >
              <Image 
                width={200} 
                height={200} 
                objectFit="contain" 
                src={coreValueImg_04} 
              />
              <Text 
                color="gray.800" 
                fontSize="24px"
                fontWeight="900" 
                textAlign="center"
                letterSpacing="-0.01em"
                fontFamily="NanumSquareNeo"
              >
                지속가능성
              </Text>
              <Text 
                mb={8}
                fontSize="16px"
                color="gray.800" 
                fontWeight="700" 
                textAlign="center"
                letterSpacing="-0.01em"
                fontFamily="NanumSquareNeo"
              >
                Sustainability
              </Text>
              <Text 
                fontSize="14px" 
                color="gray.600" 
                lineHeight="1.7"
                textAlign="start"
                letterSpacing="-0.01em"
                fontWeight="700"
                fontFamily="NanumSquareNeo"
              >
                친환경 에너지 확산으로
                지속가능한 미래를 만들겠습니다.
              </Text>
            </Flex>
          </Box>
        </Grid>
      </Box>
    </Stack>
  )
}