import { useMemo } from 'react';

import { Card, Heading, Stack } from '@chakra-ui/react';

import Chart from '@/shared/components/charts';

import { RecMonthlyItem } from '@/types/rec';
import { Region } from '@/types/common';

interface RecMonthlyChartProps {
  region: Region;
  data: RecMonthlyItem[];
}

/** dateFormatted(YYYY년 MM월 DD일)에서 'MM월 DD일'만 추출 */
function formatLabel(dateFormatted: string): string {
  return dateFormatted.replace(/^\d{4}년\s*/, '').trim();
}

/** region에 해당하는 평균 값 반환 */
function getValueByRegion(
  item: RecMonthlyItem,
  region: Region
): number {
  switch (region) {
    case 'LAND':
      return item.landAvgPrice;
    case 'JEJU':
      return item.jejuAvgPrice;
    case 'ALL':
    default:
      return item.unifiedAvgPrice;
  }
}

/** RecMonthlyItem[] → 차트용 { label: string, value: number }[] */
function parseRecData(
  data: RecMonthlyItem[],
  region: Region
): { label: string, value: number }[] {
  if (!data?.length) return [];

  return [...data]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((item) => ({
      label: formatLabel(item.dateFormatted),
      value: Math.round(getValueByRegion(item, region) * 100) / 100,
    }));
}

export function RecMonthlyChart(props: RecMonthlyChartProps) {
  const { region, data } = props;

  const parsedData = useMemo(() => parseRecData(data, region), [data, region]);
  
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
              fontFamily="Pretendard"
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