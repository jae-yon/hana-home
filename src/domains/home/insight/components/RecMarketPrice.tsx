import { useMemo, useRef } from 'react';
import { useInView } from 'framer-motion';
import { LucideTrendingDown, LucideTrendingUp } from 'lucide-react';

import { Badge, Card, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import { Region } from '@/types/common';
import { RecMonthlyItem } from '@/types/rec';

import { formatCountUpPrice, useCountUp } from '@/shared/hooks/useCountUp';

interface RecMarketPriceProps {
  region: Region;
  latestRecData: RecMonthlyItem;
  previousRecData: RecMonthlyItem;
}

// "YYYY-MM-DD" 문자열을 타임존 안전하게 파싱
function parseDateSafe(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

// 날짜를 "YYYY.MM.DD (요일)" 형식으로 포맷팅
function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const weekday = date.toLocaleDateString('ko-KR', { weekday: 'short' });
  return `${year}.${month}.${day} (${weekday})`;
}

export function RecMarketPrice(props: RecMarketPriceProps) {
  const { region, latestRecData, previousRecData } = props;

  // 날짜, 가격, 전일 대비 차이 계산
  const { formattedDate, formattedPrice, priceDiff } = useMemo(() => {
    const prev = previousRecData;
    const latest = latestRecData;

    switch (region) {
      case 'LAND':
        return {
          formattedDate: latest?.dateFormatted ?? '',
          formattedPrice: latest?.landAvgPrice ?? 0,
          priceDiff: (latest?.landAvgPrice ?? 0) - (prev?.landAvgPrice ?? 0),
        };
      case 'JEJU':
        return {
          formattedDate: latest?.dateFormatted ?? '',
          formattedPrice: latest?.jejuAvgPrice ?? 0,
          priceDiff: (latest?.jejuAvgPrice ?? 0) - (prev?.jejuAvgPrice ?? 0),
        };
      case 'ALL':
        return {
          formattedDate: latest?.dateFormatted ?? '',
          formattedPrice: latest?.unifiedAvgPrice ?? 0,
          priceDiff: (latest?.unifiedAvgPrice ?? 0) - (prev?.unifiedAvgPrice ?? 0),
        };
      default:
        return {
          formattedDate: '',
          formattedPrice: 0,
          priceDiff: 0,
        };
    }
    
  }, [region, latestRecData, previousRecData]);

  const ref = useRef(null);
  const isView = useInView(ref);

  const price = useCountUp({
    target: formattedPrice,
    duration: 1000,
    enabled: isView,
    resetKey: region,
  });

  const diffAnimated = useCountUp({
    target: priceDiff,
    duration: 1000,
    enabled: isView,
    resetKey: region,
  });

  const isNegative = priceDiff < 0;

  return (
    <Stack>
      <Card.Root
        px={2}
        py={6}
        shadow='xs'
        width='100%'
        variant='outline'
        overflow='hidden'
        borderRadius='xl'
        borderColor='gray.200'
      >
        <Card.Header pb={2}>
          <Flex justify='center' align='center'>
            <Stack textAlign='center' gap={1}>
              <Heading fontSize='2xl' fontWeight='medium' color='gray.800' fontFamily='Pretendard'>
                REC 현물
              </Heading>
              <Text fontSize='sm' fontWeight='bold' letterSpacing='-0.05em' color='gray.500' fontFamily='NanumSquareNeo'>
                {formattedDate}
              </Text>
            </Stack>
          </Flex>
        </Card.Header>

        <Card.Body py={4}>
          <Stack gap={4}>
            <Flex justify='center' align='baseline' gap={3}>
              <Text
                ref={ref}
                fontSize={{ base: '64px', md: '48px', lg: '48px' }}
                fontWeight='bold'
                color='gray.900'
                letterSpacing='-0.05em'
                lineHeight='1.5'
                fontFamily='NanumSquareNeo'
              >
                {formatCountUpPrice(price)}
              </Text>
              <Text fontSize='sm' fontWeight='bold' letterSpacing='-0.05em' color='gray.500' fontFamily='NanumSquareNeo'>
                원/Rec
              </Text>
            </Flex>

            <Flex justify='center' align='center' gap={2}>
              <Badge
                variant='subtle'
                px={3}
                py={2}
                borderRadius='md'
                display='flex'
                alignItems='center'
                gap={1.5}
                backgroundColor={isNegative ? 'blue.50' : 'red.50'}
                color={isNegative ? 'blue.500' : 'red.500'}
              >
                {priceDiff !== 0 &&
                  (isNegative ? (
                    <LucideTrendingDown size={14} />
                  ) : (
                    <LucideTrendingUp size={14} />
                  ))}
                <Text fontSize='xs' fontWeight='medium' fontFamily='Pretendard'>
                  {formatCountUpPrice(Math.abs(diffAnimated))}
                </Text>
              </Badge>
            </Flex>
          </Stack>
        </Card.Body>
      </Card.Root>
    </Stack>
  );
}