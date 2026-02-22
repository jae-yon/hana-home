import { useMemo } from 'react';

import { Card, Heading, Stack } from '@chakra-ui/react';

import Chart from '@/shared/components/charts';

import { Smp } from '@/types/smp';
import { Region } from '@/types/common';

// "MM.DD" 형식으로 포맷팅
function formatDate(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${month}.${day}`;
}

// SMP 데이터를 파싱하여 { label: string, value: number } 배열로 반환
function parseSmpData(region: Region, data: Smp[]): { label: string, value: number }[] {
  const parsedData: { label: string, value: number }[] = [];

  if (!data?.length) return parsedData;

  // region에 맞는 데이터만 필터 (ALL이면 전부)
  const filtered =
    region === 'ALL' ? data : data.filter((d) => d.area_code === region);

  // 동일한 날짜의 데이터를 합치고, 평균 가격 계산
  const byDate = new Map<string, number[]>();
  for (const d of filtered) {
    const arr = byDate.get(d.trade_date) ?? [];
    arr.push(d.smp);
    byDate.set(d.trade_date, arr);
  }

  // 날짜순 정렬 후 { label, value } 배열로 변환
  const sortedDates = [...byDate.keys()].sort();
  for (const tradeDate of sortedDates) {
    const values = byDate.get(tradeDate)!;
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    const date = new Date(tradeDate + 'T00:00:00');
    parsedData.push({
      label: formatDate(date),
      value: Math.round(avg * 100) / 100,
    });
  }

  return parsedData;
}

interface SmpWeeklyChartProps {
  region: Region;
  data: Smp[];
}

export function SmpWeeklyChart(props: SmpWeeklyChartProps) {
  const { region, data } = props;
  
  const parsedData = useMemo(() => parseSmpData(region, data), [region, data]);

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
              SMP 주간 차트
            </Heading>
          </Stack>
        </Card.Header>
        <Card.Body>
          <Chart 
            color="orange"
            data={parsedData}
            chartStyle="line"
          />
        </Card.Body>
      </Card.Root>
    </Stack>
  )
}