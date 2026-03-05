import { Box, Heading, Text, HStack, Link } from '@chakra-ui/react';

// const solar_parking_bg = "https://images.unsplash.com/photo-1604275291560-55f54cec0e4d?q=90&w=1280&auto=format&fit=crop";

export default function SolarParkingHero() {
  return (
    <Box
      as="section"
      minH="600px"
      bg="blue.800"
      display="flex"
      overflow="hidden"
      position="relative"
      alignItems={{ base: 'center', md: 'flex-end' }}
      padding={{ base: 4, md: '0 6vw 8vh' }}
      borderRadius={{ base: '0', lg: '2xl' }}
    > 
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        width="60vw"
        height="60vw"
        maxW="600px"
        maxH="600px"
        borderRadius="full"
        bg="blue.500"
        opacity={0.18}
        pointerEvents="none"
      />

      <Box
        position="absolute"
        bottom="-10%"
        left="-5%"
        width="60vw"
        height="60vw"
        maxW="400px"
        maxH="400px"
        borderRadius="full"
        bg="blue.500"
        opacity={0.18}
        pointerEvents="none"
      />

      {/* background image */}
      {/* <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex={1}
        backgroundImage={`url(${solar_parking_bg})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      /> */}

      {/* backdrop */}
      {/* <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex={1}
        background="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.5) 100%)"
        borderRadius={{ base: '0', md: '2xl' }}
      /> */}

      <Box
        mx="auto"
        zIndex={2}
        width="100%"
        maxW="1280px"
        display="flex"
        alignItems="center"
        position="relative"
        justifyContent="center"
        flexDirection="column"
        px={{ base: 4, md: 6 }}
      >
        <Box maxW="760px" textAlign="center">
          <Heading
            as="h1"
            fontSize={{ base: '4rem', lg: '6.2rem' }}
            lineHeight={1.12}
            letterSpacing="-0.02em"
            color="white"
            textAlign="center"
          >
            주차장을
            <br />
            <Text as="span" color="orange.500">
              발전소
            </Text>
            로
          </Heading>
          <Text
            mt={5}
            fontSize="md"
            textAlign="center"
            lineHeight={1.7}
            color="whiteAlpha.800"
          >
            버려지는 주차 공간 위에 태양광을 더해
            <br />
            에너지 비용을 절감하고 탄소중립을 실현합니다.
          </Text>
          <HStack mt={8} gap={4} flexWrap="wrap" justify="center">
            <Link
              href="#benefits"
              display="inline-flex"
              alignItems="center"
              borderWidth="1px"
              borderColor="whiteAlpha.400"
              color="white"
              fontWeight={600}
              fontSize="lg"
              letterSpacing="0.06em"
              py={4}
              px={8}
              borderRadius="xl"
              _hover={{ bg: 'whiteAlpha.100' }}
              transition="background 0.2s"
              fontFamily="pretendard"
            >
              더 알아보기
            </Link>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
