import { Badge, Text, Box, GridItem, Grid, Heading } from '@chakra-ui/react'
import {
  Zap,
  SolarPanel,
  LucideLeaf,
  BatteryCharging,
  ChartNoAxesCombined,
  LucideCircleDollarSign,
} from 'lucide-react'

import type { LucideIcon } from 'lucide-react'

const advantageCards: {
  num: string
  title: string
  description: string
  Icon: LucideIcon
}[] = [
  {
    num: '01',
    title: '전기요금 절감',
    description:
      '태양광으로 생산한 전기를 건물에서 직접 사용하여 전기요금 부담을 줄일 수 있습니다.',
    Icon: LucideCircleDollarSign,
  },
  {
    num: '02',
    title: '잉여전력 판매',
    description:
      '사용하고 남은 전기는 판매가 가능해 전기요금 절감과 함께 추가 수익도 기대할 수 있습니다.',
    Icon: Zap,
  },
  {
    num: '03',
    title: '유휴공간 활용',
    description:
      '공장·창고·건물 옥상 등 사용하지 않는 공간을 활용하여 전력을 생산할 수 있습니다.',
    Icon: SolarPanel,
  },
  {
    num: '04',
    title: '장기 수익 구조',
    description:
      '태양광 발전 설비는 평균 20년 이상 운영이 가능하여 장기적인 비용 절감과 수익 창출이 가능합니다.',
    Icon: ChartNoAxesCombined,
  },
  {
    num: '05',
    title: '전기요금 상승 대응',
    description:
      '전기요금이 상승할수록 태양광 발전 전력 사용 비중만큼 전기요금 절감 효과가 커집니다.',
    Icon: BatteryCharging,
  },
  {
    num: '06',
    title: '친환경 에너지 활용',
    description:
      '재생에너지 사용을 통해 탄소 배출을 줄이고 친환경 에너지 활용이 가능합니다.',
    Icon: LucideLeaf,
  },
]

export default function PpaContents() {
  return (
    <Box position="relative" mb={12}>
      <Box
        p={4}
        my={24}
      >
        <Badge 
          px={12} 
          py={6}
          mb={8} 
          fontSize={{ base: '20px', md: '28px' }} 
          fontWeight="800" 
          color="blue.600" 
          bg="blue.100/80" 
          borderRadius="full"
          fontFamily="NanumSquareNeo"
        >
          자가소비형 PPA란?
        </Badge>

        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="600"  
          color="gray.800"
          lineHeight="1.75"
          textAlign="start"
          letterSpacing="0.02em"
          fontFamily="NanumSquareNeo"
        >
          태양광 설비를 통해 생산된 전기를 건물에서 우선 사용하고,
          남은 전력은 판매하여 추가 수익을 창출하는 전력 활용 방식입니다. 
        </Text>

        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="600"  
          color="gray.800"
          lineHeight="1.75"
          textAlign="start"
          letterSpacing="0.02em"
          fontFamily="NanumSquareNeo"
        >
          전기요금 절감 및 수익창출까지 한번에 두마리 토끼를 노릴 수 있습니다.
        </Text>
      </Box>

      <Box
        as="section"
        bg="blue.800"
        position="relative"
        overflow="hidden"
        py={{ base: 16, md: 28 }}
        px={{ base: 4, md: '6vw' }}
        borderRadius={{ base: "0", md: "2xl" }}
      >
        <Box maxW="1200px" margin="0 auto" position="relative" zIndex={1}>
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl', lg: '3.2rem' }}
            lineHeight={1.15}
            color="white"
            mb={6}
          >
            자가용 PPA 만의 <Text as="span" color="blue.500">장점</Text>
          </Heading>
          <Text
            fontFamily="pretendard"
            fontSize="md"
            color="whiteAlpha.700"
            lineHeight={1.8}
            maxW="500px"
            mb={16}
          >
            직접 생산한 전기를 사용하고 남는 전력은 판매까지 가능한 효율적인 에너지 활용 구조, PPA가 주는 이점을 확인하세요.
          </Text>

          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
            gap={4}
            mt={16}
          >
            {advantageCards.map((card) => {
              const Icon = card.Icon
              return (
                <GridItem key={card.num} display="flex">
                  <Box
                    bg="blue.200/50"
                    p={{ base: 6, md: 8 }}
                    position="relative"
                    overflow="hidden"
                    borderRadius="xl"
                    flex={1}
                    display="flex"
                    flexDirection="column"
                    transition="background 0.3s, transform 0.3s ease"
                    _hover={{
                      bg: "whiteAlpha.100",
                      transform: "scale(1.03)",
                    }}
                  >
                    <Text
                      fontSize="3.5rem"
                      color="whiteAlpha.800"
                      opacity={0.5}
                      lineHeight={1}
                      mb={4}
                    >
                      {card.num}
                    </Text>
                    <Box color="whiteAlpha.800" mb={3}>
                      <Icon size={28} strokeWidth={2} />
                    </Box>
                    <Text
                      fontFamily="NanumSquareNeo"
                      fontSize="md"
                      fontWeight={700}
                      color="white"
                      mb={3}
                      lineHeight={1.4}
                    >
                      {card.title}
                    </Text>
                    <Text
                      fontFamily="NanumSquareNeo"
                      fontSize="sm"
                      color="whiteAlpha.700"
                      lineHeight={1.7}
                      flex={1}
                    >
                      {card.description}
                    </Text>
                  </Box>
                </GridItem>
              )
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}