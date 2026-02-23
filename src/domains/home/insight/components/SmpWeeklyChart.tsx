import { useMemo } from 'react';

import { Card, Heading, Stack } from '@chakra-ui/react';

import Chart from '@/shared/components/charts';

import { SmpDailyWeightedSummary } from '@/types/smp';
import { Region } from '@/types/common';

/** dateFormatted(YYYY년 MM월 DD일)에서 'MM월 DD일'만 추출 */
function formatLabel(dateFormatted: string): string {
  return dateFormatted.replace(/^\d{4}년\s*/, '').trim();
}

/** region에 해당하는 가중평균 값 반환 */
function getValueByRegion(
  item: SmpDailyWeightedSummary,
  region: Region
): number {
  switch (region) {
    case 'LAND':
      return item.landWeightedAvg;
    case 'JEJU':
      return item.jejuWeightedAvg;
    case 'ALL':
    default:
      return item.totalWeightedAvg;
  }
}

/** SmpDailyWeightedSummary[] → 차트용 { label, value }[] */
function parseSmpData(
  data: SmpDailyWeightedSummary[],
  region: Region
): { label: string; value: number }[] {
  if (!data?.length) return [];

  return [...data]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((item) => ({
      label: formatLabel(item.dateFormatted),
      value: Math.round(getValueByRegion(item, region) * 100) / 100,
    }));
}

interface SmpWeeklyChartProps {
  region: Region;
  data: SmpDailyWeightedSummary[];
}

export function SmpWeeklyChart(props: SmpWeeklyChartProps) {
  const { region, data } = props;
  
  const parsedData = useMemo(() => parseSmpData(data, region), [data, region]);

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
            color="red"
            data={parsedData}
            chartStyle="line"
          />
        </Card.Body>
      </Card.Root>
    </Stack>
  )
}