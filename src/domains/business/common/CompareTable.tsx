import { Box, Grid, GridItem, Text, VStack, HStack } from '@chakra-ui/react';
import {
  LucideClipboardList,
  LucideCircleDollarSign,
  LucideScale,
  LucideLeaf,
  LucideAlertTriangle,
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
        ppa: "발전사업자 ↔ 소비자 직접계약",
        rps: "발전사업자 ↔ 한전·공급의무자",
        ppaBetter: true,
      },
      {
        key: "duration",
        label: "계약 기간",
        ppa: "10~20년 장기 고정가",
        rps: "20년 고정가격 (경쟁입찰)",
        ppaBetter: null,
      },
      {
        key: "price_structure",
        label: "가격 결정",
        ppa: "당사자 간 협의 (변동 가능)",
        rps: "입찰을 통한 고정가격",
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
        ppa: "계약 상대방 신용도에 따라 변동",
        rps: "공급의무자 보증으로 안정적",
        ppaBetter: false,
      },
      {
        key: "rec",
        label: "REC 수익",
        ppa: "REC 판매 별도 가능 (일부 구조)",
        rps: "REC 가격 포함한 통합 단가",
        ppaBetter: null,
      },
      {
        key: "cost",
        label: "초기 비용",
        ppa: "계약 협상·법률 비용 높음",
        rps: "입찰 참여 비용 상대적으로 낮음",
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
        ppa: "전기사업법 특례 적용",
        rps: "표준 발전사업 절차",
        ppaBetter: null,
      },
      {
        key: "eligibility",
        label: "참여 자격",
        ppa: "일반사업자·한전 중개 방식 병존",
        rps: "500kW 이상 공급의무자 대상",
        ppaBetter: null,
      },
      {
        key: "complexity",
        label: "계약 복잡도",
        ppa: "매우 높음 (커스텀 계약)",
        rps: "표준화된 절차로 상대적 단순",
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
        ppa: "Scope 2 직접 감축 인정",
        rps: "간접 감축 수단",
        ppaBetter: true,
      },
      {
        key: "re100",
        label: "RE100 적용",
        ppa: "직접 PPA로 RE100 인정",
        rps: "REC 구매 방식으로 RE100 가능",
        ppaBetter: true,
      },
      {
        key: "additionality",
        label: "추가성",
        ppa: "신규 발전소 개발 유인 높음",
        rps: "기존 설비 활용 가능",
        ppaBetter: true,
      },
    ],
  },
  {
    label: "리스크",
    icon: LucideAlertTriangle,
    items: [
      {
        key: "market_risk",
        label: "시장 가격 리스크",
        ppa: "전력시장가격 변동 노출 가능",
        rps: "고정가격으로 시장 리스크 낮음",
        ppaBetter: false,
      },
      {
        key: "counterparty",
        label: "상대방 리스크",
        ppa: "소비자 신용도 리스크 존재",
        rps: "공급의무자(대형 유틸리티) 보증",
        ppaBetter: false,
      },
      {
        key: "policy_risk",
        label: "정책 변경 리스크",
        ppa: "정책 변화에 일부 노출",
        rps: "RPS 제도 변경 리스크",
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
    <Box>
      <Grid templateColumns="1.2fr 1fr 1.2fr" gap={2} overflow="hidden">
        <GridItem 
          p={5} 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          borderRadius="xl"
          fontFamily="NanumSquareNeo" 
          bg={type === 'ppa' ? 'orange.500' : 'gray.400'}
          color="white"
        >
          <VStack align="center" gap={0}>
            <Text fontSize="lg" fontWeight="800" color="white">
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
          <Text fontSize="xl" fontWeight="800" color="white" letterSpacing="wide" textAlign="center">
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
            <Text fontSize="lg" fontWeight="800" color="white">
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
                return <IconComponent size={24} strokeWidth={2} />;
              })()}
              <Text
                fontSize="xl"
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
                bg={type === 'ppa' ? 'orange.50' : 'gray.50'}
                borderWidth="1px"
                borderColor={type === 'ppa' ? 'orange.200' : 'gray.200'}
                borderRadius="xl"
              >
                <Text 
                  fontSize="sm" 
                  fontWeight="700" 
                  color={type === 'ppa' ? 'orange.600' : 'gray.500'} 
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
                <Text fontSize="sm" fontWeight="700" color="gray.800" letterSpacing="wide" textAlign="center">
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
                  fontSize="sm" 
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