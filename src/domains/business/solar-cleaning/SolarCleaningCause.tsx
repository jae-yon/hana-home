import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { Box, Text, Stack } from '@chakra-ui/react';

export default function SolarCleaningCause() {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Box
      px={{ base: 4, md: '6vw' }}
      my={24}
      width="100%"
    >
      <Text
        mb={2}
        color="blue.500"
        fontWeight="800"
        fontFamily="NanumSquareNeo"
        fontSize={{ base: '12px', sm: '16px' }}
        ref={ref}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateY(0)" : "translateY(30px)"}
        transition="all 0.7s cubic-bezier(0.22,1,0.36,1)"
      >
        Why Solar Cleaning?
      </Text>
      <Text
        mb={8}
        color="gray.800"
        fontWeight="700"
        fontSize={{ base: '32px', sm: '32px', md: '48px', lg: '56px' }}
        ref={ref}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateY(0)" : "translateY(30px)"}
        transition="all 0.7s cubic-bezier(0.22,1,0.36,1)"
      >
        태양광 패널
        <br /> 
        청소가 필요한 이유
      </Text>

      <Stack
        ref={ref}
        opacity={isView ? 1 : 0}
        fontFamily="NanumSquareNeo"
        transform={isView ? "translateY(0)" : "translateY(30px)"}
        transition="all 1.4s cubic-bezier(0.22,1,0.36,1)"
        maxW="800px"
        gap={{ base: 4, md: 5 }}
      >
        <Text
          color="gray.700"
          fontSize={{ base: '15px', md: '16px' }}
          lineHeight={{ base: '1.9', md: '2.0' }}
          letterSpacing="-0.2px"
        >
          일반적으로 태양광 패널은 먼지, 꽃가루, 배설물 등 이물질이 쌓이면 광 투과가 방해를 받아 출력 효율이{' '}
          <Text as="span" fontWeight="800" color="blue.600">
            약 15~20%
          </Text>{' '}
          까지 감소합니다. 또한 청소되지 않은 패널은 정체 상태에서 일일{' '}
          <Text as="span" fontWeight="800" color="blue.600">
            0.05%
          </Text>{' '}
          정도의 효율 저하가 누적될 수 있습니다.
        </Text>
        <Text
          color="gray.700"
          fontSize={{ base: '15px', md: '16px' }}
          lineHeight={{ base: '1.9', md: '2.0' }}
          letterSpacing="-0.2px"
        >
          <Text as="span" color="gray.600" fontWeight="700">
            “Solar Panel Self-Cleaning Mechanisms”
          </Text>{' '}
          연구에서는 태양광 패널에 자가세척 시스템을 도입할 경우, 발전 효율이{' '}
          <Text as="span" fontWeight="800" color="green.600">
            약 14.8%
          </Text>{' '}
          향상되는 것으로 보고되며, 일부 사례에서는 외부 오염 제거를 통해{' '}
          <Text as="span" fontWeight="800" color="green.600">
            최대 18.3%
          </Text>{' '}
          효율 증가가 확인되었습니다.
        </Text>
        <Text
          color="gray.800"
          fontSize={{ base: '15px', md: '16px' }}
          lineHeight={{ base: '1.9', md: '2.0' }}
          letterSpacing="-0.2px"
          fontWeight="700"
        >
          즉, 자가세척 또는 청소 장치 도입 시 태양광 효율 회복과 상승을 기대할 수 있습니다.
        </Text>
      </Stack>
    </Box>
  );
}