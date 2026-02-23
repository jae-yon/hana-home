import { useState } from 'react';

import { Box, Flex, Group, Stack } from '@chakra-ui/react';

import { Smp } from '@/types/smp';
import { Rec } from '@/types/rec';
import { Region } from '@/types/common';

import { useResponsive } from '@/shared/hooks/useResponsive';
import { Impactor } from '@/shared/components/common/Impactor';
import { useLatestRec, useMonthlyRec } from '@/shared/hooks/useRec';
import { useLatestSmp, useWeeklySmp, useYesterdaySmp } from '@/shared/hooks/useSmp';

import { SmpMarketPrice } from './components/SmpMarketPrice';
import { RecMarketPrice } from './components/RecMarketPrice';
import { SmpRecSumPrice } from './components/SmpRecSumPrice';
import { SmpWeeklyChart } from './components/SmpWeeklyChart';
import { RecMonthlyChart } from './components/RecMonthlyChart';
import { InSightHeadDesktop, InSightHeadMobile } from './components/InSightHead';

export default function Insight() {
  const { isDesktop } = useResponsive();

  const [region, setRegion] = useState<Region>('LAND');

  const { data: currentSmpData } = useLatestSmp() as { data: Smp[] };
  const { data: yesterdaySmpData } = useYesterdaySmp() as { data: Smp[] };
  const { data: recData } = useLatestRec() as { data: Rec[] };

  const { data: weeklySmpData } = useWeeklySmp() as { data: Smp[] };
  const { data: monthlyRecData } = useMonthlyRec() as { data: Rec[] };
  return (
    <Box
      width="100%"
      height="100%"
      bg="transparent"
      mx="auto"
      my={8}
      py={{ base: "48px", md: "80px" }}
      px={{ base: 4, md: 8 }}
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Flex width="100%" maxW="1280px" flexDirection="column" gap={8}>
        {/* 헤더 영역 */}
        <Impactor direction="bottom">
          <Box px={8}>
            {isDesktop ? <InSightHeadDesktop region={region} setRegion={setRegion} /> : <InSightHeadMobile region={region} setRegion={setRegion} />}
          </Box>
        </Impactor>

        {/* 콘텐츠 영역 */}
        <Stack width='100%' px={isDesktop ? 8 : 0} mt={4} gap={8}>
          {/* 실시간 가격 동향 */}
          <Group
            display='flex'
            flexDirection={isDesktop ? 'row' : 'column'}
            alignItems='stretch'
            justifyContent='stretch'
            gap={8}
            width='100%'
            flexWrap='nowrap'
          >
            {/* SMP 시세 */}
            <Box flex={isDesktop ? 1 : undefined} minWidth={0} width={isDesktop ? undefined : '100%'}>
              <Impactor direction="bottom">
                <SmpMarketPrice region={region} currentSmpData={currentSmpData} yesterdaySmpData={yesterdaySmpData} />
              </Impactor>
            </Box>

            {/* REC 현물 시세 */}
            <Box flex={isDesktop ? 1 : undefined} minWidth={0} width={isDesktop ? undefined : '100%'}>
              <Impactor direction="bottom" delay={1}>
                <RecMarketPrice region={region} recData={recData} />
              </Impactor>
            </Box>

            {/* SMP + (REC/1000 x 가중치) 수익 합계 */}
            <Box flex={isDesktop ? 1 : undefined} minWidth={0} width={isDesktop ? undefined : '100%'}>
              <Impactor direction="bottom" delay={1.3}>
                <SmpRecSumPrice region={region} smpData={currentSmpData} recData={recData?.[0]} />
              </Impactor>
            </Box>
          </Group>

          <Group
            display='flex'
            flexDirection={isDesktop ? 'row' : 'column'}
            alignItems='stretch'
            justifyContent='stretch'
            gap={8}
            width='100%'
            flexWrap='nowrap'
          >
            {/* SMP 주간 추이 차트 */}
            <Box flex={isDesktop ? 1 : undefined} minWidth={0} width={isDesktop ? undefined : '100%'}>
              <Impactor direction="bottom">
                <SmpWeeklyChart region={region} data={weeklySmpData} />
              </Impactor>
            </Box>

            {/* REC 현물 월간 추이 차트 */}
            <Box flex={isDesktop ? 1 : undefined} minWidth={0} width={isDesktop ? undefined : '100%'}>
              <Impactor direction="bottom" delay={1}>
                <RecMonthlyChart region={region} data={monthlyRecData} />
              </Impactor>
            </Box>
          </Group>
        </Stack>
      </Flex>
    </Box>
  );
}