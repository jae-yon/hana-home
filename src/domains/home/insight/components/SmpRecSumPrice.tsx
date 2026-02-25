import { useMemo, useRef, useState } from 'react';
import { LucideChevronDown, LucideChevronUp } from 'lucide-react';
import { useInView } from 'framer-motion';

import {
  Button,
  Card,
  Flex,
  Heading,
  Menu,
  Stack,
  Text,
} from '@chakra-ui/react';

import { Region, Weight } from '@/types/common';
import { RecMonthlyItem } from '@/types/rec';
import { SmpDailyWeightedSummary } from '@/types/smp';

import { useCountUp } from '@/shared/hooks/useCountUp';

interface SmpRecSumPriceProps {
  region: Region;
  recData?: RecMonthlyItem;
  smpData?: SmpDailyWeightedSummary;
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

// 지역별 SMP 단가 반환 (SmpDailyWeightedSummary 사용)
function getSmpPriceBySummary(smp: SmpDailyWeightedSummary | undefined, region: Region): number {
  if (!smp) return 0;
  switch (region) {
    case 'LAND':
      return smp.landWeightedAvg;
    case 'JEJU':
      return smp.jejuWeightedAvg;
    default:
      return smp.totalWeightedAvg;
  }
}

// 지역별 REC 단가 반환 (RecMonthlyItem: 육지/제주/통합평균가 사용)
function getRecPriceByRegion(rec: RecMonthlyItem | undefined, region: Region): number {
  if (!rec) return 0;
  switch (region) {
    case 'ALL':
      return rec.unifiedAvgPrice;
    case 'LAND':
      return rec.landAvgPrice;
    case 'JEJU':
      return rec.jejuAvgPrice;
    default:
      return rec.unifiedAvgPrice;
  }
}

// 지역에 맞는 합산 가격: SMP + (REC/1000 × 가중치)
function getCalculatedPriceByRegion(
  region: Region,
  smp: SmpDailyWeightedSummary | undefined,
  rec: RecMonthlyItem | undefined,
  weight: Weight
): number {
  if (!smp || !rec) return 0;
  const smpPrice = getSmpPriceBySummary(smp, region);
  const recPrice = getRecPriceByRegion(rec, region);
  return smpPrice + (recPrice / 1000) * weight;
}

const WEIGHT_OPTIONS: Weight[] = [0.5, 1.0, 1.2, 1.5];

export function SmpRecSumPrice(props: SmpRecSumPriceProps) {
  const { region, smpData, recData } = props;
  
  const [weight, setWeight] = useState<Weight>(1.5);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const { formattedDate, formattedPrice } = useMemo(() => {
    // 날짜: REC 기준 포맷(YYYY년 MM월 DD일) 우선, 없으면 SMP 또는 오늘
    const formattedDate = recData?.dateFormatted
      ?? (smpData?.date ? formatDate(parseDateSafe(smpData.date)) : formatDate(new Date()));

    const calculatedPrice = getCalculatedPriceByRegion(region, smpData, recData, weight);
    const formattedPrice = calculatedPrice !== 0 ? calculatedPrice : 0;

    return { formattedDate, formattedPrice };
  }, [smpData, recData, weight, region]);

  const ref = useRef(null);
  const isView = useInView(ref);

  const price = useCountUp({
    target: formattedPrice,
    duration: 1000,
    enabled: isView,
    resetKey: `${region}-${weight}`,
  });

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
                SMP＋(REC × <Text as='span' color='orange.600'>{weight.toFixed(1)}</Text>)
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
                {price}
              </Text>
              <Text fontSize='sm' fontWeight='bold' letterSpacing='-0.05em' color='gray.500' fontFamily='NanumSquareNeo'>
                원/kWh
              </Text>
            </Flex>

            <Flex justify='center' align='center' gap={2} fontFamily='Pretendard'>
              <Menu.Root
                open={menuOpen}
                onOpenChange={(e) => setMenuOpen(e.open)}
                positioning={{ placement: "bottom" }}
              >
                <Menu.Trigger asChild>
                  <Button 
                    size='xs' 
                    gap={2}
                    display='flex'
                    variant='solid' 
                    px={4}
                    borderRadius='md'
                    backgroundColor='orange.500'
                    color='white'
                    _hover={{
                      backgroundColor: 'orange.500',
                      color: 'white',
                    }}
                    letterSpacing='0.05em'
                  >
                    <Text>가중치 {weight.toFixed(1)}</Text>
                    {menuOpen ? <LucideChevronUp size={14} /> : <LucideChevronDown size={14} />}
                  </Button>
                </Menu.Trigger>
                <Menu.Positioner>
                  <Menu.Content
                    paddingX={2}
                    minWidth='110px'
                    alignItems='center'
                    borderRadius='md'
                    border='1px solid'
                    borderColor='gray.200'
                    shadow='xs'
                  >
                    {WEIGHT_OPTIONS.map((w) => (
                      <Menu.Item
                        key={w}
                        my={2}
                        fontSize='xs'
                        value={String(w)}
                        textAlign='center'
                        justifyContent='center'
                        onClick={() => setWeight(w)}
                        bg={weight === w ? 'orange.500' : undefined}
                        color={weight === w ? 'white' : 'black'}
                        _hover={{
                          backgroundColor: 'orange.500',
                          color: 'white',
                        }}
                        letterSpacing='0.05em'
                        borderRadius='md'
                      >
                        <Menu.ItemText letterSpacing='0.05em'>가중치 {w.toFixed(1)}</Menu.ItemText>
                      </Menu.Item>
                    ))}
                  </Menu.Content>
                </Menu.Positioner>
              </Menu.Root>
            </Flex>
          </Stack>
        </Card.Body>
      </Card.Root>
    </Stack>
  );
}