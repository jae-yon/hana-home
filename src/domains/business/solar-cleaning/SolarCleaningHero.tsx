import { Box, Text } from '@chakra-ui/react';

const SOLAR_CLEANING_BG = "https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=1170&auto=format&fit=crop";

export default function SolarCleaningHero() {
  return (
    <Box
      as="section"
      position="relative"
      minH="480px"
      display="flex"
      alignItems="center"
      overflow="hidden"
      bg="gray.900"
      borderRadius={{ base: '0', lg: '2xl' }}
    >
      {/* background image */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage={`url(${SOLAR_CLEANING_BG})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderRadius={{ base: '0', md: '2xl' }}
      />

      {/* backdrop */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={1}
        background="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.5) 100%)"
        borderRadius={{ base: '0', md: '2xl' }}
      />

      <Box
        position="relative"
        zIndex={10}
        maxW="1200px"
        margin="0 auto"
        px={{ base: 4 }}
        width="100%"
        mb={24}
      >
        <Text
          fontFamily="pretendard"
          fontSize={{ base: '3rem', md: '3rem', lg: '4rem' }}
          fontWeight={800}
          color="gray.300"
        >
          전문적인<br/><Text as="span" color="orange.500">태양광 모듈</Text> 청소로
        </Text>
        <Text
          fontFamily="pretendard"
          fontSize={{ base: '3rem', md: '3rem', lg: '4rem' }}
          fontWeight={800}
          color="gray.300"
        >
          발전 효율을 극대화
        </Text>
      </Box>

      <Box
        position="absolute"
        display="flex"
        flexDirection="row"
        zIndex={10}
        bottom={6}
        right={6}
        gap={4}
      >
        <Box
          bg="orange.600"
          color="gray.100"
          fontSize="14px"
          w="fit-content"
          rounded="full"
          textAlign="center"
          py={6}
          px={4}
          boxShadow="0 4px 24px rgba(252, 143, 0, 0.68)"
        >
          <Text as="span">효율 저하<br/>방지</Text>
        </Box>
        <Box
          bg="blue.600"
          color="gray.100"
          fontSize="14px"
          w="fit-content"
          rounded="full"
          textAlign="center"
          py={6}
          px={4}
          boxShadow="0 4px 24px rgba(59, 130, 246, 0.68)"
        >
          <Text as="span">패널 수명<br/>연장</Text>
        </Box>
      </Box>
    </Box>
  );
}