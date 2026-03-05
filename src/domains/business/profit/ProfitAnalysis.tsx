import { Badge, Box, Grid, Separator, Text } from '@chakra-ui/react';

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
      borderRadius="2xl"
      overflow="hidden"
      borderWidth="1px"
      borderColor="gray.200"
    >
      <Box
        px={2}
        mb={4}
        gap={2}
        display="flex"
        alignItems="center"
        flexDirection={{base: 'column', md: 'row'}}
        justifyContent={{base: 'center', md: 'space-between'}}
      >
        <Text
          fontSize="2xl"
          fontWeight="800"
          color="gray.700"
          fontFamily="pretendard"
        >
          분석조건정보
        </Text>
        <Badge
          px={4}
          py={2}
          borderRadius="full"
          backgroundColor="blackAlpha.700"
        >
          <Text
            fontSize="xs"
            fontWeight="700"
            color="white"
            fontFamily="NanumSquareNeo"
          >
            ※ 현장에 따라 공사비용이 다를 수 있음
          </Text>
        </Badge>
      </Box>
      <Grid
        gap={4}
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
      >
        {/* 설치용량 */}
        <Box
          px={4}
          py={8}
          gap={2}
          display="flex"
          borderWidth="1px"
          borderRadius="2xl"
          textAlign="center"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          borderColor="gray.200"
          backgroundColor="gray.50"
        >
          <Text
            fontSize="lg"
            fontWeight="800"
            color="orange.600"
            fontFamily="NanumSquareNeo"
          >
            설치용량
          </Text>
          <Text
            fontSize="xs"
            fontWeight="700"
            color="gray.500"
            fontFamily="NanumSquareNeo"
          >
            <Text as="span" fontSize="3xl" fontWeight="800" color="gray.800">{formatCapacityDisplay(values.capacity)}</Text>&nbsp;kW
          </Text>
        </Box>
        {/* 공사비용 */}
        <Box
          px={4}
          py={8}
          gap={2}
          display="flex"
          borderWidth="1px"
          borderRadius="2xl"
          textAlign="center"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          borderColor="gray.200"
          backgroundColor="gray.50"
        >
          <Text
            fontSize="lg"
            fontWeight="800"
            color="orange.600"
            fontFamily="NanumSquareNeo"
          >
            공사비용
          </Text>
          <Text
            fontSize="xs"
            fontWeight="700"
            color="gray.500"
            fontFamily="NanumSquareNeo"
          >
            <Text as="span" fontSize="3xl" fontWeight="800" color="gray.800">
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
          borderRadius="2xl"
          textAlign="center"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          borderColor="gray.200"
          backgroundColor="gray.50"
          position="relative"
        >
          <Badge
            px={4}
            py={1.5}
            borderRadius="full"
            backgroundColor="orange.500"
            position="absolute"
            top={2}
            right={2}
          >
            <Text
              fontSize="xs"
              fontWeight="800"
              color="white"
              fontFamily="NanumSquareNeo"
            >
              실시간
            </Text>
          </Badge>
          <Text
            fontSize="lg"
            fontWeight="800"
            color="orange.600"
            fontFamily="NanumSquareNeo"
          >
            REC 단가
          </Text>
          <Text
            fontSize="xs"
            fontWeight="800"
            color="gray.500"
            fontFamily="NanumSquareNeo"
          >
            <Text as="span" fontSize="3xl" fontWeight="800" color="gray.800">{formatCountUpPrice(values.recPrice)}</Text>&nbsp;원/kW
          </Text>
        </Box>
        {/* SMP 단가 */}
        <Box
          px={4}
          py={8}
          gap={2}
          display="flex"
          borderWidth="1px"
          borderRadius="2xl"
          textAlign="center"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          borderColor="gray.200"
          backgroundColor="gray.50"
          position="relative"
        >
          <Badge
            px={4}
            py={1.5}
            borderRadius="full"
            backgroundColor="orange.500"
            position="absolute"
            top={2}
            right={2}
          >
            <Text
              fontSize="xs"
              fontWeight="800"
              color="white"
              fontFamily="NanumSquareNeo"
            >
              실시간
            </Text>
          </Badge>
          <Text
            fontSize="lg"
            fontWeight="800"
            color="orange.600"
            fontFamily="NanumSquareNeo"
          >
            SMP 단가
          </Text>
          <Text
            fontSize="xs"
            fontWeight="800"
            color="gray.500"
            fontFamily="NanumSquareNeo"
          >
            <Text as="span" fontSize="3xl" fontWeight="800" color="gray.800">{formatCountUpPrice(values.smpPrice.toFixed(2))}</Text>&nbsp;원/kWh
          </Text>
        </Box>
      </Grid>

      {values.rateOfReturn > 0 && (
        <>
          <Separator my={4} />

          <Box
            px={2}
            mb={4}
            gap={2}
            display="flex"
            alignItems="center"
            flexDirection={{base: 'column', md: 'row'}}
            justifyContent="center"
          >
            <Text
              fontSize="2xl"
              fontWeight="800"
              color="gray.700"
              fontFamily="pretendard"
            >
              분석결과
            </Text>
          </Box>

          <Grid
            gap={4}
            templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          >
            {/* 지역 발전시간 */}
            <Box
              px={4}
              py={8}
              gap={2}
              display="flex"
              borderWidth="1px"
              borderRadius="2xl"
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
                color="gray.700"
              >
                지역 발전시간
              </Text>
              <Text
                fontSize="sm"
                fontWeight="700"
                color="gray.700"
                fontFamily="NanumSquareNeo"
              >
                <Text as="span" fontSize="5xl" fontWeight="800" color="orange.600">
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
              borderRadius="2xl"
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
                color="gray.700"
              >
                수익률
              </Text>
              <Text
                fontSize="sm"
                fontWeight="700"
                color="gray.700"
                fontFamily="NanumSquareNeo"
              >
                <Text as="span" fontSize="5xl" fontWeight="800" color="orange.600">
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
              borderRadius="2xl"
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
                color="gray.700"
              >
                월 평균 수익금
              </Text>
              <Text
                fontSize="sm"
                fontWeight="700"
                color="gray.700"
                fontFamily="NanumSquareNeo"
              >
                <Text as="span" fontSize="5xl" fontWeight="800" color="orange.600">
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
              borderRadius="2xl"
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
                color="gray.700"
              >
                연 평균 수익금
              </Text>
              <Text
                fontSize="sm"
                fontWeight="700"
                color="gray.700"
                fontFamily="NanumSquareNeo"
              >
                <Text as="span" fontSize="5xl" fontWeight="800" color="orange.600">
                  {values.annualProfit === 0 ? '--' : formatCountUpPrice(values.annualProfit)}
                </Text>
                &nbsp;만원
              </Text>
            </Box>
          </Grid>
        </>
      )}
    </Box>
  );
}
          