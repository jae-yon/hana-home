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

import { Rec } from '@/types/rec';
import { Smp } from '@/types/smp';
import { Region, Weight } from '@/types/common';

import { useCountUp } from '@/shared/hooks/useCountUp';

interface SmpRecSumPriceProps {
  region: Region;
  smpData?: Smp[];
  recData?: Rec;
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

// 지역별 SMP 단가 반환
function getSmpPriceByRegion(smp: Smp[], region: Region): number {
  const landItem = smp.find((s) => s.area_code === 'LAND');
  const jejuItem = smp.find((s) => s.area_code === 'JEJU');
  if (!landItem || !jejuItem) return 0;
  
  switch (region) {
    case 'LAND':
      return landItem.smp;
      case 'JEJU':
        return jejuItem.smp;
        default:
          return (landItem.smp + jejuItem.smp) / 2;
        }
      }
      
      // 지역별 REC 단가 반환
      function getRecPriceByRegion(rec: Rec, region: Region): number {
        switch (region) {
          case 'ALL':
      return (rec.land_avg_price + rec.jeju_avg_price) / 2;
      case 'LAND':
        return rec.land_avg_price;
        case 'JEJU':
      return rec.jeju_avg_price;
    }
  }
  
// 지역에 맞는 합산 가격: SMP + (REC/1000 × 가중치)
function getCalculatedPriceByRegion(
  region: Region,
  smp: Smp[] | undefined,
  rec: Rec | undefined,
  weight: Weight
): number {
  if (!smp?.length || !rec) return 0;
  
  const smpPrice = getSmpPriceByRegion(smp, region);
  const recPrice = getRecPriceByRegion(rec, region);
  
  return smpPrice + ((recPrice / 1000) * weight);
}

const WEIGHT_OPTIONS: Weight[] = [0.5, 1.0, 1.2, 1.5];

export function SmpRecSumPrice(props: SmpRecSumPriceProps) {
  const { region, smpData, recData } = props;
  
  const [weight, setWeight] = useState<Weight>(1.0);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const { formattedDate, formattedPrice } = useMemo(() => {
    let formattedDate: string;
    if (!smpData?.length) {
      formattedDate = formatDate(new Date());
    } else {
      const date = parseDateSafe(smpData[0].trade_date);
      formattedDate = formatDate(date);
    }

    const calculatedPrice = getCalculatedPriceByRegion(region, smpData, recData, weight);
    const formattedPrice = calculatedPrice !== 0 ? calculatedPrice.toString() : '0';

    return { formattedDate, formattedPrice };
  }, [smpData , recData, weight, region]);

  const ref = useRef(null);
  const isView = useInView(ref);

  const price = useCountUp({
    target: parseFloat(formattedPrice),
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
              <Heading fontSize='2xl' fontWeight='medium' color='gray.900'>
                SMP + (REC x {weight.toFixed(1)})
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
                positioning={{ placement: 'bottom' }}
              >
                <Menu.Trigger asChild>
                  <Button 
                    size='xs' 
                    gap={1.5}
                    display='flex'
                    variant='subtle' 
                    border='1px solid'
                    borderColor='blue.200'
                    borderRadius='md'
                    backgroundColor='blue.50'
                    color='blue.500'
                    _hover={{
                      backgroundColor: 'blue.100',
                      color: 'blue.600',
                    }}
                  >
                    {weight.toFixed(1)} 
                    {menuOpen ? <LucideChevronUp size={14} /> : <LucideChevronDown size={14} />}
                  </Button>
                </Menu.Trigger>
                <Menu.Positioner>
                  <Menu.Content
                    gap={1}
                    padding={2}
                    minWidth='120px'
                    alignItems='center'
                    borderRadius='md'
                    border='1px solid'
                    borderColor='gray.200'
                    shadow='xs'
                  >
                    {WEIGHT_OPTIONS.map((w) => (
                      <Menu.Item
                        key={w}
                        value={String(w)}
                        textAlign='center'
                        justifyContent='center'
                        onClick={() => setWeight(w)}
                        bg={weight === w ? 'blue.50' : undefined}
                        color={weight === w ? 'blue.500' : 'gray.500'}
                        _hover={{
                          backgroundColor: 'blue.50',
                          color: 'blue.600',
                        }}
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