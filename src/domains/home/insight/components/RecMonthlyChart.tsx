import { useMemo } from 'react';

import { Card, Heading, Stack } from '@chakra-ui/react';

import Chart from '@/shared/components/charts';

import { Rec } from '@/types/rec';
import { Region } from '@/types/common';

interface RecMonthlyChartProps {
  region: Region;
  data: Rec[];
}

// "MM.DD" 형식으로 포맷팅
function formatDate(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${month}.${day}`;
}

// REC 데이터를 파싱하여 { label: string, value: number } 배열로 반환
function parseRecData(region: Region, data: Rec[]): { label: string, value: number }[] {
  const parsedData: { label: string, value: number }[] = [];

  if (!data?.length) return parsedData;

  // 조회 데이터가 내림차순이므로 날짜 기준 오름차순으로 재정렬
  const sortedData = [...data].sort(
    (a, b) => new Date(a.trade_date).getTime() - new Date(b.trade_date).getTime()
  );

  sortedData.forEach((item) => {
    const date = formatDate(new Date(item.trade_date));
    parsedData.push({ label: date, value: 0 });

    switch (region) {
      case 'ALL':
        parsedData[parsedData.length - 1].value = (item.land_avg_price + item.jeju_avg_price) / 2;
        break;
      case 'LAND':
        parsedData[parsedData.length - 1].value = item.land_avg_price;
        break;
      case 'JEJU':
        parsedData[parsedData.length - 1].value = item.jeju_avg_price;
        break;
    }
  });

  return parsedData;
}

export function RecMonthlyChart(props: RecMonthlyChartProps) {
  const { region, data } = props;

  const parsedData = useMemo(() => parseRecData(region, data), [region, data]);
  
  return (
    <Stack>
      <Card.Root
        shadow="xs"
        width="100%"
        variant="outline"
        overflow="hidden"
        borderRadius="xl"
        borderColor="gray.200"
      >
        <Card.Header>
          <Stack>
            <Heading
              fontSize="xl"
              fontWeight="medium"
              color="gray.800"
              letterSpacing="-0.05em"
            >
              REC 현물 월간 차트
            </Heading>
          </Stack>
        </Card.Header>
        <Card.Body>
          <Chart 
            color="teal"
            data={parsedData}
            chartStyle="line"
          />
        </Card.Body>
      </Card.Root>
    </Stack>
  );
}