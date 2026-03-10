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
      "기업이 태양광 등 재생에너지 발전설비를 직접 설치·운영하여 전력을 사용하는 방식입니다.",
    details: [
      "기업 부지 또는 건물에 발전설비 직접 설치",
      "생산 전력 자체 사용 및 잉여전력 활용 가능",
      "K-RE100 제도를 통해 재생에너지 사용 실적 인정",
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
      "한국전력공사의 녹색프리미엄 제도에 참여하여 재생에너지 전력 사용 실적을 인정받는 방식입니다.",
    details: [
      "한전과 계약을 통해 간편하게 참여 가능",
      "전기요금 외 녹색프리미엄 비용 추가 납부",
      "재생에너지 사용확인서 발급 가능",
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
      "재생에너지 발전으로 발급된 REC를 거래시장에서 구매하여 재생에너지 사용 실적을 인정받는 방식입니다.",
    details: [
      "REC 거래시스템을 통한 인증서 구매",
      "전력 구매와 REC 구매 분리 가능",
      "기업의 재생에너지 사용 실적 인정",
    ],
  },
  {
    number: "04",
    title: "직접 PPA",
    subtitle: "Direct PPA",
    color: "green.600",
    lightColor: "green.50",
    borderColor: "green.200",
    Icon: LucideZap,
    description:
      "재생에너지 발전사업자와 기업이 직접 전력구매계약(PPA)을 체결하여 재생에너지 전력을 공급받는 방식입니다.",
    details: [
      "발전사업자와 기업 간 직접 계약 구조",
      "장기 전력구매계약 체결 가능",
      "재생에너지 사용 실적 인정",
    ],
  },
  {
    number: "05",
    title: "제3자 PPA",
    subtitle: "Third-party PPA",
    color: "green.600",
    lightColor: "green.50",
    borderColor: "green.200",
    Icon: LucideBriefcase,
    description:
      "재생에너지 발전사업자와 기업이 한전을 중개자로 두고 전력구매계약을 체결하는 방식입니다.",
    details: [
      "발전사업자-한전-기업 3자 계약 구조",
      "한전을 통한 전력 공급 및 정산",
      "재생에너지 사용 실적 인정",
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