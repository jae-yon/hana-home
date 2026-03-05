import { Box, Text, Heading, Grid, GridItem, Image } from '@chakra-ui/react';

const parking_lot_img = "https://images.unsplash.com/photo-1530945564459-9cf30d0bf77a?q=80&w=764&auto=format&fit=crop";

export default function SolarParkingWhatIs() {
  return (
    <Box as="section" py={20} px={{ base: 4, md: '6vw' }}>
      <Box maxW="1280px" mx="auto">
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          gap={{ base: 8, md: '5vw' }}
          alignItems="center"
        >
          <GridItem>
            <Box
              position="relative"
              borderRadius="xl"
              overflow="hidden"
              aspectRatio={4 / 3}
            >
              <Image
                src={parking_lot_img}
                width="100%"
                height="100%"
                objectFit="cover"
                loading="lazy"
                _hover={{ transform: 'scale(1.04)' }}
                transition="transform 0.6s ease"
              />
              <Box
                position="absolute"
                inset={0}
                borderWidth="1px"
                borderColor="orange.300"
                borderStyle="solid"
                borderRadius="xl"
                pointerEvents="none"
                opacity={0.5}
              />
            </Box>
          </GridItem>
          <GridItem>
            <Heading
              as="h2"
              fontSize={{ base: 'xl', md: '2xl', lg: '3rem' }}
              lineHeight={1.2}
              color="gray.800"
              mb={5}
            >
              주차장 태양광이란?
            </Heading>
            <Text
              color="gray.700"
              fontSize="md"
              maxW="560px"
              lineHeight={1.85}
            >
              주차장 상부에 캐노피 형태의 구조물을 세우고, 지붕면에 태양광 모듈을
              설치하는 복합 에너지 시스템입니다.
              <br />
              <br />
              유휴 공간을 에너지 생산 공간으로 전환함으로써 별도의 부지 없이도
              신재생에너지를 도입할 수 있습니다. 공공기관, 대형마트, 물류창고,
              아파트 등 다양한 시설에 적용 가능합니다.
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
