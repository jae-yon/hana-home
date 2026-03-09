import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';

export default function Re100Desc() {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });

  return (
    <Stack
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
          color="gray.800"
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
          px={4}
          mb={8}
          fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}
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
          RE100(Renewable Energy 100%)은 기업이 사용하는 전력의 100%를 재생에너지로 조달하겠다는 목표를 실천하는 글로벌 캠페인입니다.
          <Text as="span" color="green.600">&nbsp;기업은 재생에너지 사용 확대를 통해 탄소 배출을 줄이고 지속가능한 에너지 전환을 추진합니다.</Text>
        </Text>
      </Flex>

      <Flex
        gap={8}
        direction="column"
        alignItems="center"
      >
        <Heading
          pb={4}
          fontWeight="bold"
          color="gray.800"
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
          <Text as="span" fontSize={{ base: '36px', md: '48px', lg: '56px' }} color="green.600">RE100</Text>이 왜 중요한가?
        </Heading>
        <Text
          px={4}
          fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}
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
          기업들이 RE100에 참여하는 이유
        </Text>
      </Flex>

      <Box
        width="80%"
        height="auto"
        borderRightRadius="xl"
        backgroundColor="green.600"
        position="relative"
        marginRight="auto"
        opacity={isView ? 1 : 0}
        transform={isView ? "translateX(0)" : "translateX(-100px)"}
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
          fontSize={{ base: 'xs', md: 'lg', lg: 'xl' }}
        >
          ✔ 글로벌 기업 공급망 요구 증가<br />
          글로벌 기업들이 협력사에도 재생에너지 사용을 요구하면서 공급망 전반에서 RE100 대응이 확대되고 있습니다.
        </Text>
      </Box>

      <Box
        width="80%"
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
          fontSize={{ base: 'xs', md: 'lg', lg: 'xl' }}
        >
          ✔ 탄소 규제 및 ESG 경영 대응<br />
          탄소 배출 규제와 ESG 평가 기준 강화로 기업의 재생에너지 사용이 중요한 경영 요소가 되고 있습니다.
        </Text>
      </Box>

      <Box
        width="80%"
        height="auto"
        borderRightRadius="xl"
        backgroundColor="green.600"
        position="relative"
        marginRight="auto"
        opacity={isView ? 1 : 0}
        transform={isView ? "translateX(0)" : "translateX(-100px)"}
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
          fontSize={{ base: 'xs', md: 'lg', lg: 'xl' }}
        >
          ✔ 기업 경쟁력 확보<br />
          재생에너지 사용은 기업의 지속가능 경영과 글로벌 시장 경쟁력 강화에 기여합니다.
        </Text>
      </Box>
    </Stack>
  );
}