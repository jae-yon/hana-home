import { Box, Heading, Text, Grid, GridItem, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { LucideArrowRight } from 'lucide-react';

import portfolioRpsImage04 from '@/assets/images/portfolio/portfolio_rps_04.png';
import portfolioRpsImage06 from '@/assets/images/portfolio/portfolio_rps_06.png';

const EXAMPLE_IMAGES = [
  {
    src: portfolioRpsImage04,
    alt: '주차장 태양광 시공 사례 1',
  },
  {
    src: portfolioRpsImage06,
    alt: '주차장 태양광 시공 사례 2',
  },
];

export default function SolarParkingExample() {
  return (
    <Box
      as="section"
      bg="blue.800"
      overflow="hidden"
      position="relative"
      py={{ base: 16, md: 28 }}
      px={{ base: 4, md: '6vw' }}
    >
      <Box
        position="absolute"
        bottom="-2rem"
        left="10rem"
        fontFamily="NanumSquareNeo"
        fontSize="14vw"
        color="blue.600/20"
        pointerEvents="none"
        lineHeight={1}
      >
        SOLAR PARKING
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
          검증된 주차장 태양광 <Text as="span" color="orange.500">시공 사례</Text>
        </Heading>
        <Text
          fontFamily="pretendard"
          fontSize="md"
          color="whiteAlpha.700"
          lineHeight={1.8}
          maxW="580px"
          mb={16}
        >
          하나솔루션의 주차장 태양광 설치 현장을 통해 검증된 시공 품질을 확인하세요.
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
          <RouterLink to="/portfolio/rps" style={{ textDecoration: 'none', display: 'inline-block' }}>
            <Box
              as="span"
              display="inline-flex"
              alignItems="center"
              fontSize={{ base: 'lg', md: 'xl' }} 
              fontWeight="700" 
              color="gray.100" 
              bg="orange.500"
              letterSpacing="0.06em"
              py={4}
              px={8}
              gap={2}
              cursor="pointer"
              borderRadius="xl"
              _hover={{ bg: 'orange.600' }}
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