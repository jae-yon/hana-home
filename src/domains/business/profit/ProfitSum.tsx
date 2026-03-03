import { Box, Grid, Text } from '@chakra-ui/react';

import { formatCountUpPrice } from '@/shared/hooks/useCountUp';

interface ProfitSumProps {
  values: any;
}

export function ProfitSum(props: ProfitSumProps) {
  const { values } = props;

  return (
    <Grid
      p={4}
      gap={4}
      boxShadow="md"
      borderRadius="lg"
      overflow="hidden"
      borderWidth="1px"
      borderColor="gray.200"
      templateColumns={{ base: '1fr', md: '1fr 1fr' }}
    >
      {/* 지역 발전시간 */}
      <Box
        px={4}
        py={8}
        gap={2}
        display="flex"
        borderWidth="1px"
        borderRadius="lg"
        textAlign="center"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        borderColor="orange.200"
        backgroundColor="orange.50"
      >
        <Text
          fontSize="lg"
          fontWeight="500"
          color="gray.600"
        >
          지역 발전시간
        </Text>
        <Text
          fontSize="sm"
          fontWeight="700"
          color="gray.600"
          fontFamily="NanumSquareNeo"
        >
          <Text as="span" fontSize="4xl" fontWeight="800" color="orange.600">
            {values.generationTime === 0 ? '--' : values.generationTime.toFixed(1)}
          </Text>
          &nbsp;시간
        </Text>
      </Box>
      {/* 수익률 */}
      <Box
        px={4}
        py={8}
        gap={2}
        display="flex"
        borderWidth="1px"
        borderRadius="lg"
        textAlign="center"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        borderColor="orange.200"
        backgroundColor="orange.50"
      >
        <Text
          fontSize="lg"
          fontWeight="500"
          color="gray.600"
        >
          수익률
        </Text>
        <Text
          fontSize="sm"
          fontWeight="700"
          color="gray.600"
          fontFamily="NanumSquareNeo"
        >
          <Text as="span" fontSize="4xl" fontWeight="800" color="orange.600">
            {values.rateOfReturn === 0 ? '--' : values.rateOfReturn.toFixed(1)}
          </Text>
          &nbsp;%
        </Text>
      </Box>
      {/* 월 평균 수익금 */}
      <Box
        px={4}
        py={8}
        gap={2}
        display="flex"
        borderWidth="1px"
        borderRadius="lg"
        textAlign="center"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        borderColor="orange.200"
        backgroundColor="orange.50"
      >
        <Text
          fontSize="lg"
          fontWeight="500"
          color="gray.600"
        >
          월 평균 수익금
        </Text>
        <Text
          fontSize="sm"
          fontWeight="700"
          color="gray.600"
          fontFamily="NanumSquareNeo"
        >
          <Text as="span" fontSize="4xl" fontWeight="800" color="orange.600">
            {values.monthlyProfit === 0 ? '--' : formatCountUpPrice(values.monthlyProfit)}
          </Text>
          &nbsp;만원
        </Text>
      </Box>
      {/* 연 평균 수익금 */}
      <Box
        px={4}
        py={8}
        gap={2}
        display="flex"
        borderWidth="1px"
        borderRadius="lg"
        textAlign="center"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        borderColor="orange.200"
        backgroundColor="orange.50"
      >
        <Text
          fontSize="lg"
          fontWeight="500"
          color="gray.600"
        >
          연 평균 수익금
        </Text>
        <Text
          fontSize="sm"
          fontWeight="700"
          color="gray.600"
          fontFamily="NanumSquareNeo"
        >
          <Text as="span" fontSize="4xl" fontWeight="800" color="orange.600">
            {values.annualProfit === 0 ? '--' : formatCountUpPrice(values.annualProfit)}
          </Text>
          &nbsp;만원
        </Text>
      </Box>
    </Grid>
  );
}