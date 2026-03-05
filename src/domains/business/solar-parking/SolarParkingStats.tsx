import { Box, HStack, Text } from '@chakra-ui/react';

const stats = [
  { num: '25년', label: '패널 보증 기간' },
  { num: '40%↓', label: '전기료 절감 효과' },
  { num: '5~7년', label: '평균 투자 회수 기간' },
  { num: 'CO₂ 제로', label: '운영 탄소 배출량' },
];

export default function SolarParkingStats() {
  return (
    <Box
      bgGradient="to-r"
      gradientFrom="orange.500"
      gradientTo="blue.500"
      py={10}
      px={{ base: 4, md: '6vw' }}
      borderRadius={{ base: '0', md: '2xl' }}
    >
      <Box maxW="1280px" mx="auto">
        <HStack
          justify="space-around"
          flexWrap="wrap"
          gap={{ base: 4, md: 8 }}
        >
          {stats.map((item) => (
            <Box key={item.label} textAlign="center">
              <Text
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="800"
                color="gray.900"
                lineHeight={1}
                fontFamily="NanumSquareNeo"
              >
                {item.num}
              </Text>
              <Text
                fontSize="xs"
                color="blackAlpha.700"
                fontWeight="800"
                mt={1}
                letterSpacing="0.1em"
                fontFamily="pretendard"
              >
                {item.label}
              </Text>
            </Box>
          ))}
        </HStack>
      </Box>
    </Box>
  );
}
