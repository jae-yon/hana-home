import { Box, Grid, Heading, Text } from '@chakra-ui/react';

import { formatManUnit } from '@/shared/utils/number';
import { formatCountUpPrice } from '@/shared/hooks/useCountUp';

interface ProfitAnalysisProps {
  values: any;
}

export function ProfitAnalysis(props: ProfitAnalysisProps) {
  const { values } = props;

  /** 숫자만 추출 후 천 단위 콤마 포맷 */
  const formatCapacityDisplay = (v: string | number): string => {
    if (v === '' || v === undefined || v === null) return '';
    const digits = String(v).replace(/\D/g, '');
    if (digits === '') return '';
    return Number(digits).toLocaleString('ko-KR');
  };

  return (
    <Box
      p={4}
      boxShadow="md"
      borderRadius="lg"
      overflow="hidden"
      borderWidth="1px"
      borderColor="gray.200"
    >
      <Box
        mb={4}
        textAlign="center"
      >
        <Heading
          size="2xl"
          color="gray.700"
          lineHeight="1.35"
        >
          분석조건정보
        </Heading>
      </Box>
      <Grid
        gap={4}
        templateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr' }}
      >
        {/* 설치용량 */}
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
          borderColor="gray.200"
          backgroundColor="gray.50"
        >
          <Text
            fontSize="md"
            fontWeight="500"
            color="orange.600"
          >
            설치용량
          </Text>
          <Text
            fontSize="xs"
            fontWeight="700"
            color="gray.500"
            fontFamily="NanumSquareNeo"
          >
            <Text as="span" fontSize="2xl" fontWeight="800" color="gray.800">{formatCapacityDisplay(values.capacity)}</Text>&nbsp;kW
          </Text>
        </Box>
        {/* 공사비용 */}
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
          borderColor="gray.200"
          backgroundColor="gray.50"
        >
          <Text
            fontSize="md"
            fontWeight="500"
            color="orange.600"
          >
            공사비용
          </Text>
          <Text
            fontSize="xs"
            fontWeight="700"
            color="gray.500"
            fontFamily="NanumSquareNeo"
          >
            <Text as="span" fontSize="2xl" fontWeight="800" color="gray.800">
              {values.constructionCost === 0 ? '--' : formatManUnit(values.constructionCost)}
            </Text>
            &nbsp;만원/kW
          </Text>
        </Box>
        {/* REC 단가 */}
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
          borderColor="gray.200"
          backgroundColor="gray.50"
        >
          <Text
            fontSize="md"
            fontWeight="500"
            color="orange.600"
          >
            REC 단가
          </Text>
          <Text
            fontSize="xs"
            fontWeight="700"
            color="gray.500"
            fontFamily="NanumSquareNeo"
          >
            <Text as="span" fontSize="2xl" fontWeight="800" color="gray.800">{formatCountUpPrice(values.recPrice)}</Text>&nbsp;원/kW
          </Text>
        </Box>
        {/* SMP 단가 */}
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
          borderColor="gray.200"
          backgroundColor="gray.50"
        >
          <Text
            fontSize="md"
            fontWeight="500"
            color="orange.600"
          >
            SMP 단가
          </Text>
          <Text
            fontSize="xs"
            fontWeight="700"
            color="gray.500"
            fontFamily="NanumSquareNeo"
          >
            <Text as="span" fontSize="2xl" fontWeight="800" color="gray.800">{formatCountUpPrice(values.smpPrice.toFixed(2))}</Text>&nbsp;원/kWh
          </Text>
        </Box>
        {/* 대출비율 */}
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
          borderColor="gray.200"
          backgroundColor="gray.50"
        >
          <Text
            fontSize="md"
            fontWeight="500"
            color="orange.600"
          >
            대출비율
          </Text>
          <Text
            fontSize="xs"
            fontWeight="700"
            color="gray.500"
            fontFamily="NanumSquareNeo"
          >
            <Text as="span" fontSize="2xl" fontWeight="800" color="gray.800">
              {values.loanRate === 0 ? '--' : values.loanRate.toFixed(0)}
            </Text>&nbsp;%
          </Text>
        </Box>
        {/* 대출금리 */}
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
          borderColor="gray.200"
          backgroundColor="gray.50"
        >
          <Text
            fontSize="md"
            fontWeight="500"
            color="orange.600"
          >
            대출금리
          </Text>
          <Text
            fontSize="xs"
            fontWeight="700"
            color="gray.500"
            fontFamily="NanumSquareNeo"
          >
            <Text as="span" fontSize="2xl" fontWeight="800" color="gray.800">
              {values.loanInterestRate === 0 ? '--' : values.loanInterestRate.toFixed(1)}
            </Text>&nbsp;%
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}
          