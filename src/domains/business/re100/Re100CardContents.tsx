import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { Box, Flex, Text, Heading } from "@chakra-ui/react";

import {
  LucideSun,
  LucideLeaf,
  LucideFileText,
  LucideZap,
  LucideBriefcase,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

const cards: {
  number: string;
  title: string;
  subtitle: string;
  color: string;
  lightColor: string;
  borderColor: string;
  Icon: LucideIcon;
  description: string;
  details: string[];
}[] = [
  {
    number: "01",
    title: "자가발전",
    subtitle: "태양광 발전소",
    color: "green.600",
    lightColor: "green.50",
    borderColor: "green.200",
    Icon: LucideSun,
    description:
      "기업이 태양광 등 재생에너지 발전설비를 직접 설치·운영하여 전력을 자급하는 방식입니다.",
    details: [
      "자가 소비 또는 잉여전력 판매 가능",
      "한국에너지공단을 통해 RE100 실적 등록",
      "초기 투자비용 소요, 장기적 비용 절감",
    ],
  },
  {
    number: "02",
    title: "녹색요금제",
    subtitle: "Green Premium",
    color: "green.600",
    lightColor: "green.50",
    borderColor: "green.200",
    Icon: LucideLeaf,
    description:
      "한국전력공사가 제공하는 녹색프리미엄 요금제에 가입하여 재생에너지 전력을 구매하는 방식입니다.",
    details: [
      "한전과 계약으로 간편 가입 가능",
      "녹색프리미엄 요금 추가 납부",
      "재생에너지 사용 확인서 발급",
    ],
  },
  {
    number: "03",
    title: "REC 구매",
    subtitle: "재생에너지 공급인증서",
    color: "green.600",
    lightColor: "green.50",
    borderColor: "green.200",
    Icon: LucideFileText,
    description:
      "재생에너지 발전사업자로부터 REC를 별도로 구매하여 RE100 실적을 인정받는 방식입니다.",
    details: [
      "한국에너지공단 거래플랫폼 이용",
      "다양한 재생에너지원 선택 가능",
      "전력 구매와 REC 구매 분리 가능",
    ],
  },
  {
    number: "04",
    title: "전력구매계약",
    subtitle: "제3자 PPA",
    color: "green.600",
    lightColor: "green.50",
    borderColor: "green.200",
    Icon: LucideZap,
    description:
      "재생에너지 발전사업자와 기업이 한전을 중개자로 두고 장기 전력구매계약(PPA)을 체결하는 방식입니다.",
    details: [
      "발전사업자-한전-기업 3자 계약 구조",
      "계약기간 중 안정적 전력 가격 확보",
      "한국전력공사 및 에너지공단 참여",
    ],
  },
  {
    number: "05",
    title: "지분투자",
    subtitle: "재생에너지 발전소 투자",
    color: "green.600",
    lightColor: "green.50",
    borderColor: "green.200",
    Icon: LucideBriefcase,
    description:
      "기업이 재생에너지 발전사업에 지분을 투자하고 발전량에 비례해 RE100 실적을 인정받는 방식입니다.",
    details: [
      "발전소 지분 취득 후 REC 제공",
      "투자 비율에 따라 실적 인정",
      "한국에너지공단 확인서 발급",
    ],
  },
];

function Re100Card({ card, opacity, transform, transition }: { card: (typeof cards)[0]; opacity: number; transform: string; transition: string }) {
  const Icon = card.Icon;
  const isGreen = card.color.startsWith("green");
  const textMuted = isGreen ? "green.600" : "teal.600";
  const textSub = isGreen ? "green.500" : "teal.500";

  return (
    <Box
      opacity={opacity}
      transform={transform}
      transition={transition}
      bg="green.100/10"
      borderRadius="xl"
      border="1px solid"
      borderColor={card.borderColor}
      p={5}
      w="100%"
      boxShadow="0 2px 12px rgba(0,0,0,0.07)"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.13)",
      }}
      display="flex"
      flexDirection="column"
      gap={3}
    >
      <Flex align="center" gap={2}>
        <Box
          bg="green.600/10"
          borderRadius="full"
          px={4}
          py={2}
          fontSize={{ base: '12px', md: '14px', lg: '16px' }}
          fontWeight="700"
          color="green.600"
          fontFamily="pretendard"
        >
          {card.number}
        </Box>
        <Box color={card.color}>
          <Icon size={20} strokeWidth={2} />
        </Box>
      </Flex>
      <Box>
        <Heading
          as="h3"
          fontSize={{ base: '16px', md: '20px', lg: '28px' }}
          fontWeight="800"
          color="green.600"
          mb={1}
          fontFamily="NanumSquareNeo"
        >
          {card.title}
        </Heading>
        <Text fontSize={{ base: '12px', md: '14px' }} color={textSub} fontWeight="500" fontFamily="pretendard">
          {card.subtitle}
        </Text>
      </Box>
      <Box h="2px" borderRadius="2px" bg={card.borderColor} />
      <Text fontSize={{ base: '12px', md: '14px' }} color={textMuted} lineHeight="1.7" fontFamily="pretendard">
        {card.description}
      </Text>
      <Box mt="auto">
        {card.details.map((d, i) => (
          <Flex key={i} align="flex-start" gap={1.5} mb={1}>
            <Box
              mt="6px"
              minW="5px"
              h="5px"
              borderRadius="full"
              bg={card.color}
              opacity={0.7}
            />
            <Text fontSize={{ base: '12px', md: '14px' }} color={textSub} lineHeight="1.6" fontFamily="pretendard">
              {d}
            </Text>
          </Flex>
        ))}
      </Box>
    </Box>
  );
}

export default function Re100CardContents() {
  const ref = useRef<HTMLDivElement>(null);
  const isView = useInView(ref);

  return (
    <Flex
      ref={ref}
      gap={4}
      mb={12}
      p={2}
      mx="auto"
      direction="column"
      w="100%"
      align="stretch"
    >
      {cards.map((card, index) => (
        <Re100Card
          key={card.number}
          card={card}
          opacity={isView ? 1 : 0}
          transform={isView ? "translateY(0)" : "translateY(20px)"}
          transition={`all ${0.3 + index * 0.15}s ease`}
        />
      ))}
    </Flex>
  );
}