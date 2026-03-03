import { Box, Heading, Text } from '@chakra-ui/react';

import Map from '@/shared/components/map';

export function Directions() {
  return (
    <Box
      px={{ base: 4, md: 10 }}
      py={{ base: 4, md: 10 }}
      my={{ base: 0, md: 28 }}
      width="100%"
      maxW="1280px"
    >
      <Heading
        mb={10}
        color="gray.900"
        lineHeight="1.25"
        fontWeight="bold"
        letterSpacing="0.02em"
        fontSize={{ base: '28px', sm: '32px', md: '36px', lg: '56px' }}
      >
        오시는 길
      </Heading>

      <Box
        width="100%"
        height="100%"
        borderRadius="lg"
        overflow="hidden"
      >
        <Map 
          location={{ lat: 37.46627415745321, lng: 126.88716676242454 }}
        />

        <Text
          fontSize="16px"
          color="gray.900"
          lineHeight="1.25"
          fontWeight="medium"
          letterSpacing="0.02em"
          fontFamily="Pretendard"
          mt={{ base: 4, md: 4 }}
          textAlign={{ base: 'center', md: 'right' }}
        >
          서울특별시 금천구 가산디지털1로 1, 더루벤스밸리 1407호
        </Text>
      </Box>
    </Box>
  );
}