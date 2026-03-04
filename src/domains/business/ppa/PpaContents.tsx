import { Badge, Text, Box, VStack, GridItem, Grid } from '@chakra-ui/react'
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
  title: string
  description: string
  color: string
  bg: string
  borderColor: string
  Icon: LucideIcon
}[] = [
  {
    title: '초기 비용 제로',
    description: '태양광 설비 설치·유지 비용 부담 없음',
    color: 'blue.600',
    bg: 'blue.50',
    borderColor: 'blue.200',
    Icon: LucideCircleDollarSign,
  },
  {
    title: '전기요금 절감',
    description: '한전 단가보다 저렴한 고정 단가로 전력 구매',
    color: 'red.600',
    bg: 'red.50',
    borderColor: 'red.200',
    Icon: LucideTrendingDown,
  },
  {
    title: '요금 안정성 보장',
    description: '계약 기간 동안 전기요금 변동 리스크 차단',
    color: 'orange.600',
    bg: 'orange.50',
    borderColor: 'orange.200',
    Icon: LucideShield,
  },
  {
    title: 'ESG·탄소중립',
    description: 'RE100 이행 및 온실가스 감축 실적 인정 가능',
    color: 'teal.600',
    bg: 'teal.50',
    borderColor: 'teal.200',
    Icon: LucideLeaf,
  },
  {
    title: '유지보수 불필요',
    description: '설비 관리·고장 수리 모두 사업자 책임',
    color: 'purple.600',
    bg: 'purple.50',
    borderColor: 'purple.200',
    Icon: LucideCircleCheck,
  },
  {
    title: '계약의 유연성',
    description: '10~20년 장기 계약으로 에너지 비용 예측 가능',
    color: 'cyan.600',
    bg: 'cyan.50',
    borderColor: 'cyan.200',
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
          p={8} 
          mb={8} 
          fontSize={{ base: '20px', md: '28px', lg: '36px' }} 
          fontWeight="700" 
          letterSpacing="wide" 
          color="blue.600" 
          bg="blue.100/80" 
          borderRadius="full"
        >
          PPA 란?
        </Badge>

        <Text
          fontSize={{ base: '16px', md: '20px', lg: '24px' }}
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
          fontSize={{ base: '16px', md: '20px', lg: '24px' }}
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

      <VStack
        p={4}
        my={24} 
        gap={4} 
        align="stretch"
      >
        <Text
          mb={4}
          fontWeight="800"
          color="gray.800"
          textAlign="center"
          letterSpacing="-0.04em"
          fontFamily="pretendard"
          fontSize={{ base: "24px", md: "32px", lg: "48px" }}
        >
          자가용 PPA 만의 장점
        </Text>

        <Grid
          templateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr' }}
          gap={4}
        >
          {advantageCards.map((card) => {
            const Icon = card.Icon
            return (
              <GridItem key={card.title}>
                <Box
                  p={5}
                  bg={card.bg}
                  border="2px"
                  borderColor={card.borderColor}
                  borderRadius="xl"
                  boxShadow="sm"
                  height="full"
                  transition="all 0.2s"
                  _hover={{ boxShadow: 'md', transform: 'translateY(-2px)' }}
                >
                  <VStack align={{ base: 'center', md: 'stretch' }} gap={3}>
                    <Box color={card.color}>
                      <Icon size={36} strokeWidth={2.5} />
                    </Box>
                    <Text
                      fontWeight="800"
                      fontSize={{ base: 'lg', md: 'xl' }}
                      color="gray.800"
                      fontFamily="NanumSquareNeo"
                    >
                      {card.title}
                    </Text>
                    <Text
                      fontSize={{ base: 'md', lg: 'lg' }}
                      color="gray.700"
                      lineHeight="1.6"
                      fontFamily="pretendard"
                    >
                      {card.description}
                    </Text>
                  </VStack>
                </Box>
              </GridItem>
            )
          })}
        </Grid>
      </VStack>
    </Box>
  );
}