import { useNavigate } from 'react-router-dom';

import { Box, VStack, Heading, Text, Button } from '@chakra-ui/react';

export default function PreparePage() {
  const navigate = useNavigate();

  return (
    <Box minH="100vh" position="relative" overflow="hidden" display="flex" alignItems="center" justifyContent="center">

      {/* Card */}
      <Box
        position="relative"
        zIndex={1}
        bg="whiteAlpha.800"
        p={{ base: "48px 32px", md: "64px 72px" }}
        maxW="560px"
        w="90%"
        textAlign="center"
      >
        <VStack gap={0}>
          {/* Heading */}
          <Box mb={3}>
            <Heading
              fontSize={{ base: "32px", md: "48px" }}
              lineHeight={1.2}
              fontWeight="900"
              color="gray.900"
              fontFamily="NanumSquareNeo"
            >
              준비중...
            </Heading>
          </Box>

          {/* Divider */}
          <Box mb={5}>
            <Box
              w="48px" h="3px"
              bgGradient="linear(to-r, brand.500, brand.300)"
              borderRadius="full"
              mx="auto"
            />
          </Box>

          {/* Description */}
          <Box mb={7}>
            <Text fontSize="16px" fontWeight="700" color="gray.700" fontFamily="NanumSquareNeo">
              요청하신 페이지는 현재 준비 중입니다.
            </Text>
          </Box>

          {/* CTA Button */}
          <Box>
            <Button
              bg="gray.900"
              color="white"
              size="lg"
              px={10}
              borderRadius="full"
              fontFamily="pretendard"
              fontWeight="600"
              fontSize="15px"
              boxShadow="0 4px 20px rgba(249,115,22,0.35)"
              _hover={{
                bg: "brand.400",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 28px rgba(249,115,22,0.45)",
              }}
              _active={{ transform: "translateY(0)", bg: "brand.600" }}
              transition="all 0.2s"
              onClick={() => navigate('/')}
            >
              홈으로 돌아가기
            </Button>
          </Box>

        </VStack>
      </Box>
    </Box>
  );
}