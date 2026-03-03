import { useEffect, useState } from 'react';

import { Box, createListCollection, Flex, Grid, Heading, Text } from '@chakra-ui/react';

import { Impactor } from '@/shared/components/common/Impactor';

import { ProfitSum } from './components/ProfitSum';
import { ProfitConditon } from './components/ProfitConditon';
import { ProfitAnalysis } from './components/ProfitAnalysis';
import { useMonthlyRec } from '@/shared/hooks/useRec';
import { useWeeklySmp } from '@/shared/hooks/useSmp';
import { RecMonthlyItem } from '@/types/rec';
import { SmpDailyWeightedSummary } from '@/types/smp';
import { useAddressToLocation } from '@/shared/hooks/useMap';
import { useCalcOptions } from './hooks/useProfit';

const areaType = createListCollection({
  items: [
    { value: 'land', label: '토지' },
    { value: 'building', label: '건물' },
  ]
});

const initialValues = {
  address: '',
  areaType: areaType.items[0],
  capacity: 0,
  constructionCost: 0,
  recPrice: 0,
  smpPrice: 0,
  loanRate: 0,
  loanInterestRate: 0,
  generationTime: 0,
  rateOfReturn: 0,
  monthlyProfit: 0,
  annualProfit: 0,
  latitude: 37.5665,
  longitude: 126.9780,
  roadAddress: '',
  jibunAddress: '',
}

export default function ProfitCalculator() {
  const [values, setValues] = useState(initialValues);

  // 주간 SMP 데이터
  const { data: weeklySmpData } = useWeeklySmp() as { data: SmpDailyWeightedSummary[] };
  
  // 월간 REC 데이터
  const { data: monthlyRecData } = useMonthlyRec() as { data: RecMonthlyItem[] };

  // 수익 계산 옵션 데이터
  const { data: calcOptionsData } = useCalcOptions() as { data: { constructionCost: number; loanRate: number; loanInterestRate: number } };

  useEffect(() => {
    setValues(initialValues);
    if (weeklySmpData && monthlyRecData) {
      setValues((prev) => ({ ...prev, smpPrice: weeklySmpData[weeklySmpData.length - 1].totalWeightedAvg, recPrice: (monthlyRecData[0].unifiedAvgPrice)/1000 }));
    }
    if (calcOptionsData) {
      setValues((prev) => ({ ...prev, constructionCost: calcOptionsData.constructionCost, loanRate: calcOptionsData.loanRate, loanInterestRate: calcOptionsData.loanInterestRate }));
    }
  }, []);

  // 값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: name === 'capacity' ? (value === '' ? 0 : Number(value)) : value,
    }));
  };

  // 사업지유형 변경 핸들러
  const handleAreaTypeChange = (item: { value: string; label: string }) => {
    setValues((prev) => ({ ...prev, areaType: item }));
  };

  // 주소 좌표 조회 훅
  const { mutateAsync: addressToLocation, isPending: isAddressToLocationPending } = useAddressToLocation();
  
  // 주소 좌표 조회 핸들러
  const handleAddressToLocation = async (address: string) => {
    const data = await addressToLocation(address);
    setValues((prev) => ({
      ...prev,
      longitude: data.longitude,
      latitude: data.latitude,
      roadAddress: data.roadAddress ?? '',
      jibunAddress: data.jibunAddress ?? '',
    }));
  }

  // 수익 계산 핸들러
  const handleCalculateProfit = async (address: string) => {
    await handleAddressToLocation(address);
  }

  return (
    <Flex 
      mb={12}
      mt={12}
      gap={6}
      width="100%"
      height="auto"
      maxW="960px"
      borderRadius="lg"
      overflow="hidden"
      direction="column"
      position="relative"
      p={{ base: 0, md: 12 }}
    >
      <Impactor direction="bottom" once>
        <Box p={4}>
          <Heading
            mb={4}
            size="5xl"
            color="gray.800"
            lineHeight="1.35"
            fontWeight="semibold"
          >
            수익계산기
          </Heading>
          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            color="gray.600"
          >
            발전소 운영 데이터를 기반으로 예상 발전량과 수익을 지금 바로 확인해보세요.
          </Text>
        </Box>
      </Impactor>

      <Grid
        p={4}
        width="100%"
        gap={{ base: 4, md: 8 }}
        templateColumns="1fr"
      >
        <Impactor direction="bottom" once delay={1.0}>
          <ProfitConditon 
            areaType={areaType} 
            values={values} 
            onChange={handleChange} 
            onAreaTypeChange={handleAreaTypeChange} 
            onCalculateProfit={handleCalculateProfit} 
            isPending={isAddressToLocationPending}
          />
        </Impactor>
        <Impactor direction="bottom" once delay={1.3}>
          <ProfitAnalysis values={values} />
        </Impactor>
        <Impactor direction="bottom" once delay={1.6}>
          <ProfitSum values={values} />
        </Impactor>
      </Grid>
    </Flex>
  );
}