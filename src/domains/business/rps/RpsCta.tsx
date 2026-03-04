import { useNavigate } from 'react-router-dom';

import { Box, Button, Text, VStack } from '@chakra-ui/react';

export default function RpsCta() {
  const navigate = useNavigate();

  return (
    <Box
      mx={{ base: 4, md: 0 }}
      p={{ base: 6, md: 8 }}
      py={{ base: 8, md: 10 }}
      mt={12}
      bg="orange.50"
      borderRadius="xl"
      borderWidth="2px"
      borderColor="orange.200"
      textAlign="center"
    >
      <VStack gap={6} align="center" maxW="720px" mx="auto">
        <Text
          fontSize={{ base: '16px', md: '18px', lg: '20px' }}
          color="gray.800"
          lineHeight="1.75"
          fontWeight="600"
          fontFamily="pretendard"
          wordBreak="keep-all"
        >
          ㈜하나솔루션은 맞춤형 RPS 계약을 통해<br />소비자와 발전 사업자 모두에게 최적의 혜택을 제공합니다.
        </Text>
        <Button
          size="lg"
          px={8}
          py={6}
          bg="orange.500"
          color="white"
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight="700"
          fontFamily="NanumSquareNeo"
          borderRadius="full"
          boxShadow="md"
          transition="all 0.2s"
          _hover={{
            bg: 'orange.600',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
          _active={{ transform: 'translateY(0)' }}
          onClick={() => navigate('/portfolio')}
        >
          시공사례 보러가기
        </Button>
      </VStack>
    </Box>
  );
}
