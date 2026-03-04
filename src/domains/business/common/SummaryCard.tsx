import { Badge, Box, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';

import { LucideCircleCheck } from 'lucide-react';

const summaryCards = [
  {
    type: "ppa",
    title: "자가용 PPA",
    subtitle: "Power Purchase Agreement",
    tag: "직접계약",
    best_for: "RE100·ESG 목표 기업, 대형 수요자",
    highlight: "탄소 감축 직접 인정",
    pros: ["RE100 직접 인정", "Scope 2 탄소 감축", "가격 협상 유연성"],
    cons: ["높은 계약 복잡도", "상대방 신용 리스크", "법률·협상 비용"],
  },
  {
    type: "rps",
    title: "발전사업 RPS",
    subtitle: "Renewable Portfolio Standard",
    tag: "의무공급",
    best_for: "안정적 수익 원하는 발전사업자",
    highlight: "수익 안정성 최우선",
    pros: ["수익 예측 가능", "표준화된 절차", "공급의무자 보증"],
    cons: ["RE100 간접 인정만", "입찰 경쟁 심화", "추가성 확보 어려움"],
  },
];

export default function SummaryCard() {
  return (
    <SimpleGrid 
      w="full"
      gap={4} 
      columns={{ base: 1, md: 2 }} 
    >
      {summaryCards.map((card) => (
        <Box 
          key={card.type} 
          bg={card.type === "ppa" ? "blue.50" : card.type === "rps" ? "orange.50" : "gray.50"} 
          border="2px" 
          boxShadow="sm" 
          overflow="hidden" 
          borderRadius="xl" 
          borderColor={card.type === "ppa" ? "blue.200" : card.type === "rps" ? "orange.200" : "gray.200"}
        >
          {/* Card Header */}
          <Box 
            px={6} 
            py={4}
            fontFamily="pretendard"
            bg={card.type === "ppa" ? "blue.600" : card.type === "rps" ? "orange.500" : "gray.400"} 
          >
            <HStack justify="space-between" align="flex-start">
              <VStack align="flex-start" gap={0}>
                <Text fontSize={{ base: "xs", md: "sm" }} color="whiteAlpha.800" fontWeight="600">
                  {card.subtitle}
                </Text>
                <Heading size="lg" color="white" fontWeight="800" fontFamily="NanumSquareNeo">
                  {card.title}
                </Heading>
              </VStack>
              <Badge
                px={3}
                py={2}
                color="white"
                borderRadius="full"
                fontSize="sm"
                fontWeight="700"
                bg="whiteAlpha.300"
              >
                {card.tag}
              </Badge>
            </HStack>
          </Box>
          {/* Card Body */}
          <Box px={6} py={4}>
            <Text fontSize="xl" color={card.type === "ppa" ? "blue.600" : card.type === "rps" ? "orange.500" : "gray.400"} fontWeight="800" fontFamily="NanumSquareNeo" textAlign="center">
              {card.best_for}
            </Text>
            <Text fontSize="lg" color={card.type === "ppa" ? "blue.600" : card.type === "rps" ? "orange.500" : "gray.400"} fontWeight="700" fontFamily="pretendard" textAlign="center">
              {card.highlight}
            </Text>

            <SimpleGrid columns={3} gap={4} mt={4}>
              {card.pros.map((p, i) => (
                <Box
                  key={i}
                  p={6}
                  gap={3}
                  border="1px"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                  borderColor="gray.200"
                  color="white"
                  backgroundColor={card.type === "ppa" ? "blue.500" : card.type === "rps" ? "orange.500" : "gray.400"}
                >
                  <LucideCircleCheck
                    size={32}
                    strokeWidth={1.5}
                  />
                  <Text fontSize={{ base: "xs", md: "sm" }} textAlign="center" fontWeight="500">{p}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      ))}
        
    </SimpleGrid>
  );
}