import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';

export default function Re100Desc() {
  const ref = useRef(null);
  const isView = useInView(ref);

  return (
    <Stack
      p={{ base: 4, md: 0 }}
      gap={8}
      mb={12}
      direction="column"
      alignItems="center"
      ref={ref}
    >
      <Flex
        gap={8}
        direction="column"
        alignItems="center"
      >
        <Heading
          pb={4}
          fontWeight="bold"
          color="gray.8800"
          lineHeight="1.35"
          textAlign="start"
          wordBreak="keep-all"
          letterSpacing="-0.02em"
          overflowWrap="break-word"
          borderBottom="4px solid"
          borderColor="green.600"
          fontSize={{ base: '24px', md: '32px', lg: '48px' }}
          opacity={isView ? 1 : 0}
          transform={isView ? "translateY(0)" : "translateY(20px)"}
          transition="all 1s ease"
        >
          <Text as="span" fontSize={{ base: '36px', md: '48px', lg: '56px' }} color="green.600">RE100</Text>이란?
        </Heading>
        <Text
          fontSize={{ base: '16px', md: '20px', lg: '24px' }}
          color="gray.800"
          lineHeight="1.75"
          fontWeight="700"
          textAlign="start"
          wordBreak="keep-all"
          letterSpacing="0.02em"
          overflowWrap="break-word"
          fontFamily="NanumSquareNeo"
          opacity={isView ? 1 : 0}
          transform={isView ? "translateY(0)" : "translateY(20px)"}
          transition="all 1.2s ease"
        >
          RE100(Renewable Energy 100%)은 전 세계 영향력 있는 기업들이 사용하는 전력의 100%를 재생에너지로 조달하겠다는 자발적 약속을 실천하는 글로벌 캠페인입니다.
        </Text>

      </Flex>
      <Box
        width="90%"
        height="auto"
        borderLeftRadius="xl"
        backgroundColor="green.600"
        position="relative"
        marginLeft="auto"
        opacity={isView ? 1 : 0}
        transform={isView ? "translateX(0)" : "translateX(100px)"}
        transition="all 2s ease"
      >
        <Text
          py={6}
          ps={6}
          color="white"
          lineHeight="1.75"
          fontWeight="800"
          textAlign="start"
          wordBreak="keep-all"
          letterSpacing="0.02em"
          overflowWrap="break-word"
          fontFamily="NanumSquareNeo"
          textShadow="1px 1px 1px rgba(0,0,0,0.2)"
          fontSize={{ base: '16px', md: '20px', lg: '24px' }}
        >
          RE100은 단순한 선언이 아니라 기업이 책임 있는 에너지 사용을 실천하는 글로벌 행동 표준입니다.
        </Text>
      </Box>
    </Stack>
  );
}