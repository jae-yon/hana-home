import { useRef, useMemo } from 'react';
import { useInView } from 'framer-motion';
import { LucideTrendingDown, LucideTrendingUp } from 'lucide-react';

import { Badge, Card, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import { Region } from '@/types/common';
import { SmpDailyWeightedSummary } from '@/types/smp';

import { formatCountUpPrice, useCountUp } from '@/shared/hooks/useCountUp';

interface SmpMarketPriceProps {
  region: Region;
  latestSmpData: SmpDailyWeightedSummary;
  previousSmpData: SmpDailyWeightedSummary;
}

export function SmpMarketPrice(props: SmpMarketPriceProps) {
  const { region, latestSmpData, previousSmpData } = props;

  const { formattedDate, formattedPrice, priceDiff } = useMemo(() => {
    const prev = previousSmpData;
    const latest = latestSmpData;

    switch (region) {
      case 'LAND':
        return {
          formattedDate: latest?.dateFormatted ?? '',
          formattedPrice: latest?.landWeightedAvg ?? 0,
          priceDiff: (latest?.landWeightedAvg ?? 0) - (prev?.landWeightedAvg ?? 0),
        };
      case 'JEJU':
        return {
          formattedDate: latest?.dateFormatted ?? '',
          formattedPrice: latest?.jejuWeightedAvg ?? 0,
          priceDiff: (latest?.jejuWeightedAvg ?? 0) - (prev?.jejuWeightedAvg ?? 0),
        };
      case 'ALL':
        return {
          formattedDate: latest?.dateFormatted ?? '',
          formattedPrice: latest?.totalWeightedAvg ?? 0,
          priceDiff: (latest?.totalWeightedAvg ?? 0) - (prev?.totalWeightedAvg ?? 0),
        };
      default:
        return {
          formattedDate: '',
          formattedPrice: 0,
          priceDiff: 0,
        };
    }
  }, [region, latestSmpData, previousSmpData]);

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
                SMP
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
                  {formatCountUpPrice(Math.abs(diffAnimated), 2)}
                </Text>
              </Badge>
            </Flex>
          </Stack>
        </Card.Body>
      </Card.Root>
    </Stack>
  );
}
