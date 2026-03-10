import { Box, Heading, Text, Grid, GridItem, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { LucideArrowRight } from 'lucide-react';

import portfolioPpaImage01 from '@/assets/images/portfolio/portfolio_ppa_01.png';
import portfolioPpaImage02 from '@/assets/images/portfolio/portfolio_ppa_02.png';

const EXAMPLE_IMAGES = [
  {
    src: portfolioPpaImage01,
    alt: '가정용 태양광 시공 사례 1',
  },
  {
    src: portfolioPpaImage02,
    alt: '가정용 태양광 시공 사례 2',
  },
];

export default function PpaExample() {
  return (
    <Box
      as="section"
      bg="gray.900"
      overflow="hidden"
      position="relative"
      py={{ base: 16, md: 28 }}
      px={{ base: 4, md: '6vw' }}
    >
      <Box
        position="absolute"
        left="-2rem"
        bottom="-2rem"
        fontFamily="NanumSquareNeo"
        fontSize="18vw"
        color="blue.600/20"
        pointerEvents="none"
        lineHeight={1}
      >
        PPA
      </Box>

      <Box maxW="1200px" margin="0 auto" position="relative" zIndex={1}>
        <Heading
          as="h2"
          fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
          lineHeight={1.15}
          color="white"
          mb={6}
          textAlign={{base: 'center', md: 'start'}}
        >
          자가용 PPA <Text as="span" color="blue.500">시공 사례</Text>
        </Heading>
        <Text
          fontFamily="pretendard"
          fontSize="md"
          color="whiteAlpha.700"
          lineHeight={1.8}
          maxW="580px"
          mb={16}
        >
          하나솔루션은 맞춤형 PPA 계약을 통해<br />소비자와 발전 사업자 모두에게 최적의 혜택을 제공합니다.
        </Text>

        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={8}
          mb={10}
        >
          {EXAMPLE_IMAGES.map((img) => (
            <GridItem key={img.alt} height="100%">
              <Box
                bg="gray.800"
                position="relative"
                overflow="hidden"
                height="100%"
                aspectRatio="4/3"
                transition="transform 0.3s ease"
                _hover={{
                  transform: 'scale(1.02)',
                }}
                borderRadius="2xl"
                >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              </Box>
            </GridItem>
          ))}
        </Grid>

        <Box textAlign={{ base: 'center', md: 'left' }}>
          <RouterLink to="/portfolio/ppa" style={{ textDecoration: 'none', display: 'inline-block' }}>
            <Box
              as="span"
              display="inline-flex"
              alignItems="center"
              fontSize={{ base: 'lg', md: 'xl' }} 
              fontWeight="700" 
              color="gray.100" 
              bg="blue.500"
              letterSpacing="0.06em"
              py={4}
              px={8}
              gap={2}
              cursor="pointer"
              borderRadius="xl"
              _hover={{ bg: 'blue.600' }}
              transition="background 0.2s"
              fontFamily="pretendard"
            >
              시공사례로 이동
              <LucideArrowRight size={20} strokeWidth={2.5} />
            </Box>
          </RouterLink>
        </Box>
      </Box>
    </Box>
  );
}