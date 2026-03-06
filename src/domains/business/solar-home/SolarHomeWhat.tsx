import { Box, Badge, Text } from '@chakra-ui/react';

export default function SolarHomeWhat() {
  return (
    <Box
      p={4}
      mt={16}
      maxW="960px"
      mx="auto"
    >
      <Badge 
        px={12} 
        py={6}
        mb={8} 
        fontSize={{ base: '20px', md: '28px' }} 
        fontWeight="800" 
        color="gray.100" 
        bg="orange.500" 
        borderRadius="full"
        fontFamily="NanumSquareNeo"
      >
        가정용태양광 이란?
      </Badge>

      <Text
        color="gray.700"
        lineHeight={1.8}
        fontFamily="pretendard"
        fontSize={{ base: 'lg', md: 'xl' }}
      >
        가정용 태양광은 우리 집(지붕,마당 등)에 설치된 태양광 설비로 전기를 직접 생산하여 우선 사용하고, 남은 전력은 한전으로 역전송되어 다음 달 전기요금에서 차감되는 구조입니다. 
        전력이 계속 남을 경우 다음 달로 이월되어 장기적으로 전기요금 부담을 줄이는 효과가 있습니다.
      </Text>
    </Box>
  );
}