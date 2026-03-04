import { Box, Grid, GridItem, Text, VStack, HStack, Heading } from '@chakra-ui/react';
import {
  LucideClipboardList,
  LucideCircleDollarSign,
  LucideScale,
  LucideLeaf,
  LucideShieldCheck,
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

const categories: {
  label: string;
  icon: LucideIcon;
  items: Array<{
    key: string;
    label: string;
    ppa: string;
    rps: string;
    ppaBetter: boolean | null;
  }>;
}[] = [
  {
    label: "계약 구조",
    icon: LucideClipboardList,
    items: [
      {
        key: "contract_type",
        label: "계약 유형",
        ppa: "소비자와 발전사업자 간 자유로운 직접계약",
        rps: "한전·공급의무자와의 안정적인 제도권 계약",
        ppaBetter: true,
      },
      {
        key: "duration",
        label: "계약 기간",
        ppa: "10~20년 장기 고정가로 에너지 비용 예측 가능",
        rps: "20년 고정가격으로 장기 수익 보장",
        ppaBetter: null,
      },
      {
        key: "price_structure",
        label: "가격 결정",
        ppa: "당사자 간 협의로 유연한 가격 구조 설계 가능",
        rps: "입찰을 통한 투명하고 공정한 고정가격 확정",
        ppaBetter: null,
      },
    ],
  },
  {
    label: "수익 & 비용",
    icon: LucideCircleDollarSign,
    items: [
      {
        key: "revenue_stability",
        label: "수익 안정성",
        ppa: "계약 구조 설계에 따라 수익 최적화 가능",
        rps: "공급의무자 보증으로 수익이 안정적으로 보장",
        ppaBetter: false,
      },
      {
        key: "rec",
        label: "REC 수익",
        ppa: "REC 별도 판매로 추가 수익 창출 가능",
        rps: "REC 가격 포함 통합 단가로 수익 구조 단순화",
        ppaBetter: null,
      },
      {
        key: "cost",
        label: "비용 구조",
        ppa: "맞춤형 계약으로 장기적 에너지 비용 절감 효과",
        rps: "표준화된 절차로 행정 비용 최소화",
        ppaBetter: false,
      },
    ],
  },
  {
    label: "절차 & 규제",
    icon: LucideScale,
    items: [
      {
        key: "approval",
        label: "인허가 절차",
        ppa: "전기사업법 특례 적용으로 유연한 사업 설계",
        rps: "표준화된 절차로 예측 가능한 인허가 진행",
        ppaBetter: null,
      },
      {
        key: "eligibility",
        label: "참여 방식",
        ppa: "직접 계약·한전 중개 등 다양한 참여 방식 선택 가능",
        rps: "명확한 자격 기준으로 안정적인 시장 참여",
        ppaBetter: null,
      },
      {
        key: "complexity",
        label: "계약 유연성",
        ppa: "커스텀 계약으로 사업 특성에 최적화된 조건 설계",
        rps: "표준화된 계약으로 빠르고 효율적인 사업 착수",
        ppaBetter: false,
      },
    ],
  },
  {
    label: "ESG & 탄소중립",
    icon: LucideLeaf,
    items: [
      {
        key: "carbon",
        label: "탄소 감축 인정",
        ppa: "Scope 2 직접 감축으로 강력한 탄소중립 실적 확보",
        rps: "제도권 내 탄소 감축 기여로 국가 목표 달성에 기여",
        ppaBetter: true,
      },
      {
        key: "re100",
        label: "RE100 적용",
        ppa: "직접 PPA 방식으로 RE100 완전 인정",
        rps: "REC 구매 방식으로 RE100 이행 가능",
        ppaBetter: true,
      },
      {
        key: "additionality",
        label: "추가성",
        ppa: "신규 재생에너지 발전소 개발 유인으로 에너지 전환 선도",
        rps: "기존 우량 설비 활용으로 즉시 재생에너지 공급 기여",
        ppaBetter: true,
      },
    ],
  },
  {
    label: "안정성 & 보장",
    icon: LucideShieldCheck,
    items: [
      {
        key: "market_risk",
        label: "가격 안정성",
        ppa: "장기 고정 계약으로 전력 비용 변동성 헤지 가능",
        rps: "고정가격 제도로 시장 가격 변동과 무관한 수익 확보",
        ppaBetter: false,
      },
      {
        key: "counterparty",
        label: "계약 신뢰성",
        ppa: "수요 기업과 직접 신뢰 관계 구축으로 파트너십 강화",
        rps: "대형 공급의무자(유틸리티)와의 계약으로 높은 신뢰도 확보",
        ppaBetter: false,
      },
      {
        key: "policy_risk",
        label: "제도 지속성",
        ppa: "민간 계약 기반으로 정책 변화에 유연하게 대응 가능",
        rps: "정부 의무제도 기반으로 장기 정책 지속성 확보",
        ppaBetter: null,
      },
    ],
  },
];

interface CompareTableProps {
  type: 'ppa' | 'rps';
  isDesktop: boolean;
}

export default function CompareTable(props: CompareTableProps) {
  const { type, isDesktop } = props;

  return (
    <Box mt={12}>
      <Heading
        fontSize={{ base: "24px", md: "32px", lg: "48px" }}
        fontWeight="800"
        color="gray.800"
        fontFamily="pretendard"
        mb={12}
        textAlign="center"
        letterSpacing="-0.04em"
      >
        재생에너지 조달 방식 비교
      </Heading>
      <Grid templateColumns="1.2fr 1fr 1.2fr" gap={2} overflow="hidden">
        <GridItem 
          p={5} 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          borderRadius="xl"
          fontFamily="NanumSquareNeo" 
          bg={type === 'ppa' ? 'blue.600' : 'gray.400'}
          color="white"
        >
          <VStack align="center" gap={0}>
            <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="800" color="white">
              자가용 PPA
            </Text>
            {isDesktop && 
              <Text fontSize="sm" color="whiteAlpha.900">
                Power Purchase Agreement
              </Text>
            }
          </VStack>
        </GridItem>
  
        <GridItem 
          p={5} 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          borderRadius="xl"
          fontFamily="NanumSquareNeo" 
          bg="gray.600"
          color="white"
        >
          <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="800" color="white" letterSpacing="wide" textAlign="center">
            비교 항목
          </Text>
        </GridItem>
  
        <GridItem 
          p={5} 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          borderRadius="xl"
          fontFamily="NanumSquareNeo" 
          bg={type === 'rps' ? 'orange.500' : 'gray.400'}
          color="white"
        >
          <VStack align="center" gap={0}>
            <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="800" color="white">
              발전사업 RPS
            </Text>
            {isDesktop && 
              <Text fontSize="sm" color="whiteAlpha.900">
                Renewable Portfolio Standard
              </Text>
            }
          </VStack>
        </GridItem>
      </Grid>

      {categories.map((category, index) => (
        <Box 
          key={index} 
          mt={2}
        >
          {/* Category Header */}
          <Box
            px={4}
            py={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="gray.600"
            borderRadius="xl"
          >
            <HStack gap={2} fontFamily="pretendard" color="white">
              {(() => {
                const IconComponent = category.icon;
                return <IconComponent size={20} strokeWidth={2} />;
              })()}
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="600"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                {category.label}
              </Text>
            </HStack>
          </Box>
  
          {/* Rows */}
          {category.items.map((item, rowIndex) => (
            <Grid 
              key={rowIndex}
              gap={2}
              borderRadius="xl"
              overflow="hidden"
              templateColumns="1.2fr 1fr 1.2fr" 
              mt={2}
            >
              <GridItem 
                p={5} 
                display="flex" 
                justifyContent="center" 
                alignItems="center" 
                fontFamily="NanumSquareNeo" 
                bg={type === 'ppa' ? 'blue.50' : 'gray.50'}
                borderWidth="1px"
                borderColor={type === 'ppa' ? 'blue.200' : 'gray.200'}
                borderRadius="xl"
              >
                <Text 
                  fontSize={{ base: "xs", md: "sm" }} 
                  fontWeight="700" 
                  color={type === 'ppa' ? 'blue.600' : 'gray.500'} 
                  letterSpacing="wide" 
                  textAlign="center"
                >
                  {item.ppa}
                </Text>
              </GridItem>
        
              <GridItem 
                p={5} 
                display="flex" 
                justifyContent="center" 
                alignItems="center" 
                fontFamily="NanumSquareNeo" 
                bg="gray.100"
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="xl"
              >
                <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="700" color="gray.800" letterSpacing="wide" textAlign="center">
                  {item.label}
                </Text>
              </GridItem>
        
              <GridItem 
                p={5} 
                display="flex" 
                justifyContent="center" 
                alignItems="center" 
                fontFamily="NanumSquareNeo" 
                bg={type === 'rps' ? 'orange.50' : 'gray.50'}
                borderWidth="1px"
                borderColor={type === 'rps' ? 'orange.200' : 'gray.200'}
                borderRadius="xl"
              >
                <Text 
                  fontSize={{ base: "xs", md: "sm" }} 
                  fontWeight="700" 
                  color={type === 'rps' ? 'orange.600' : 'gray.500'} 
                  letterSpacing="wide" 
                  textAlign="center"
                >
                  {item.rps}
                </Text>
              </GridItem>
            </Grid>
          ))}
        </Box>
      ))}
    </Box>
  );
}