import { Box, Container, VStack, Text } from '@chakra-ui/react';

export default function RepoweringSelect() {
  return (
    <Box
      py={12}
      width="100%"
      display="flex"
      overflow="hidden"
      position="relative"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Container>
        {/* header */}
        <VStack
          gap={3} mb={4} textAlign="center"
        >
          <Text
            color="gray.900"
            fontWeight="800"
            fontFamily="NanumSquareNeo"
            fontSize={{ base: '24px', sm: '32px', md: '48px', lg: '56px' }}
          >
            <Text as="span" color="blue.700">리파워링</Text> 대상 발전소
          </Text>
          <Text
            mb={8}
            color="gray.500"
            fontWeight="800"
            fontFamily="NanumSquareNeo"
            fontSize={{ base: '12px', sm: '16px' }}
          >
            다음과 같은 발전소는 리파워링 검토가 필요할 수 있습니다.
          </Text>
        </VStack>
        {/* contents */}
        <Box
          gap={8}
          display="flex"
          flexDirection="column"
        >
          <Box
            width="50%"
            height="auto"
            borderRightRadius="full"
            backgroundColor="blue.700"
            position="relative"
            marginRight="auto"
          >
            <Text
              py={6}
              pe={8}
              color="white"
              lineHeight="1.75"
              fontWeight="800"
              textAlign="end"
              wordBreak="keep-all"
              letterSpacing="0.02em"
              overflowWrap="break-word"
              fontFamily="NanumSquareNeo"
              textShadow="1px 1px 1px rgba(0,0,0,0.2)"
              fontSize={{ base: 'xs', md: 'lg', lg: 'xl' }}
            >
              설치 후 10년 이상 경과한 태양광 발전소
            </Text>
          </Box>

          <Box
            width="50%"
            height="auto"
            borderLeftRadius="full"
            backgroundColor="blue.700"
            position="relative"
            marginLeft="auto"
          >
            <Text
              py={6}
              ps={8}
              color="white"
              lineHeight="1.75"
              fontWeight="800"
              textAlign="start"
              wordBreak="keep-all"
              letterSpacing="0.02em"
              overflowWrap="break-word"
              fontFamily="NanumSquareNeo"
              textShadow="1px 1px 1px rgba(0,0,0,0.2)"
              fontSize={{ base: 'xs', md: 'lg', lg: 'xl' }}
            >
              인버터 고장 및 유지관리 문제가 발생하는 발전소
            </Text>
          </Box>

          <Box
            width="50%"
            height="auto"
            borderRightRadius="full"
            backgroundColor="blue.700"
            position="relative"
            marginRight="auto"
          >
            <Text
              py={6}
              pe={8}
              color="white"
              lineHeight="1.75"
              fontWeight="800"
              textAlign="end"
              wordBreak="keep-all"
              letterSpacing="0.02em"
              overflowWrap="break-word"
              fontFamily="NanumSquareNeo"
              textShadow="1px 1px 1px rgba(0,0,0,0.2)"
              fontSize={{ base: 'xs', md: 'lg', lg: 'xl' }}
            >
              발전량 감소가 지속적으로 발생하는 발전소
            </Text>
          </Box>

          <Box
            width="50%"
            height="auto"
            borderLeftRadius="full"
            backgroundColor="blue.700"
            position="relative"
            marginLeft="auto"
          >
            <Text
              py={6}
              ps={8}
              color="white"
              lineHeight="1.75"
              fontWeight="800"
              textAlign="start"
              wordBreak="keep-all"
              letterSpacing="0.02em"
              overflowWrap="break-word"
              fontFamily="NanumSquareNeo"
              textShadow="1px 1px 1px rgba(0,0,0,0.2)"
              fontSize={{ base: 'xs', md: 'lg', lg: 'xl' }}
            >
              고효율 모듈 적용이 가능한 발전소
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}