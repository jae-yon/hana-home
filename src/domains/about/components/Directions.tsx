import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import Map from '@/shared/components/map';

export function Directions() {
  return (
    <Flex
      mb={24}
      mt={12}
      gap={12}
      p={{ base: 0, md: 12 }}
      width="100%"
      height="auto"
      maxW="1280px"
      borderRadius="lg"
      overflow="hidden"
      direction="column"
      position="relative"
    >
      <Heading
        mb={8}
        fontWeight="bold"
        color="gray.800"
        lineHeight="1.25"
        letterSpacing="0.02em"
        ms={{ base: 4, md: 0 }}
        fontSize={{ base: '28px', sm: '32px', md: '36px', lg: '48px' }}
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
    </Flex>
  );
}