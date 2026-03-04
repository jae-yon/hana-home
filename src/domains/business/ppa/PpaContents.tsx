import { Badge, Text, Box, GridItem, Grid, Heading } from '@chakra-ui/react'
import {
  LucideCircleDollarSign,
  LucideTrendingDown,
  LucideShield,
  LucideLeaf,
  LucideCircleCheck,
  LucideFileText,
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
    title: '초기 비용 제로',
    description:
      '태양광 설비 설치를 위한 투자비, 설계비, 인허가 비용까지 모두 사업자가 부담하여 기업은 자본 지출(CAPEX) 없이 바로 재생에너지 도입 가능',
    Icon: LucideCircleDollarSign,
  },
  {
    num: '02',
    title: '전기요금 절감',
    description:
      '한전 전기요금 대비 경쟁력 있는 고정 단가로 장기간 전력 구매가 가능하며, 전력 단가 상승 시에도 비용 절감 효과 기대',
    Icon: LucideTrendingDown,
  },
  {
    num: '03',
    title: '요금 안정성 보장',
    description:
      '계약 기간(10~20년) 동안 고정 또는 합의된 단가로 전력을 공급받아 SMP·연료비 연동제 등 외부 요인에 따른 전기요금 변동 리스크 최소화',
    Icon: LucideShield,
  },
  {
    num: '04',
    title: 'ESG·탄소중립',
    description:
      'RE100 이행 수단으로 활용 가능하며, 온실가스 배출량(Scope 2) 감축 실적으로 인정되어 ESG 평가 및 친환경 경영 지표 개선에 기여',
    Icon: LucideLeaf,
  },
  {
    num: '05',
    title: '유지보수 불필요',
    description:
      '설비 모니터링, 정기 점검, 고장 수리 및 보험까지 사업자가 전담하여 기업은 운영 부담 없이 안정적인 전력 사용 가능',
    Icon: LucideCircleCheck,
  },
  {
    num: '06',
    title: '계약의 유연성',
    description:
      '기업 전력 사용 패턴에 맞춘 맞춤형 설계 및 장기 계약 구조로 에너지 비용을 예측 가능하게 관리하며, 계약 조건 협의를 통한 유연한 운영 가능',
    Icon: LucideFileText,
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
          PPA 란?
        </Badge>

        <Text
          fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}
          color="gray.800"
          lineHeight="1.75"
          fontWeight="700"
          textAlign="start"
          wordBreak="keep-all"
          letterSpacing="0.02em"
          overflowWrap="break-word"
          fontFamily="NanumSquareNeo"
        >
          PPA(전력구매계약, Power Purchase Agreement) 란,
          태양광 설비를 내 건물 옥상이나 부지에 설치하되, 설비 소유는 발전 사업자가 하고 소비자는 생산된 전기를 저렴한 고정 단가로 구매하는 계약 방식입니다.
        </Text>

        <Text
          fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}
          color="gray.800"
          lineHeight="1.75"
          fontWeight="700"
          textAlign="start"
          wordBreak="keep-all"
          letterSpacing="0.02em"
          overflowWrap="break-word"
          fontFamily="NanumSquareNeo"
        >
          별도의 설치 비용이나 유지보수 부담 없이, 계약 기간 전반에 걸쳐 안정적이고 예측 가능한 전력 단가를 확보할 수 있습니다.
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
            maxW="580px"
            mb={16}
          >
            초기 비용 없이 안정적인 전기요금과 ESG 실적까지, PPA가 주는 이점을 확인하세요.
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