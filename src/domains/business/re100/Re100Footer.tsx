import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

import { Box, Flex, Text } from "@chakra-ui/react";

const steps = [
  {
    title: "상담신청",
    description: "업의 전력 사용 환경과 RE100 적용 가능 여부를 상담합니다.",
  },
  {
    title: "기업전력 사용분석",
    description: "기업의 전력 사용량, 사업 구조, 재생에너지 적용 가능성을 분석합니다.",
  },
  {
    title: "K-RE100 전략설계",
    description: "기업 환경에 맞는 K-RE100 도입 및 이행 전략을 설계합니다.",
  },
  {
    title: "재생에너지 조달 구조 설계",
    description: "자가발전, REC 구매, PPA 계약 등 적절한 재생에너지 조달 방안을 설계합니다.",
  },
  {
    title: "K-RE100 실행 지원",
    description: "K-계약 체결, 인증, 실적 관리 등 RE100 이행 전 과정을 지원합니다.",
  },
];

export default function Re100Footer() {
  const ref = useRef(null);
  const isView = useInView(ref);
  
  return (
    <Box p={{ base: 4, md: 12 }} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      {/* Banner */}
      <Box
        px={{ base: 6, md: 10 }}
        py={{ base: 4, md: 4 }}
        mb={{ base: 8, md: 8 }}
        w="100%"
        ref={ref}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateY(0)" : "translateY(-20px)"}
        transition="all 1s ease"
      >
        <Text
          fontSize={{ base: "24px", md: "36px" }}
          fontWeight="800"
          color="gray.800"
          textAlign="center"
          letterSpacing="-0.02em"
          fontFamily="pretendard"
          mb={2}
        >
          <Text as="span" color="orange.500">하나솔루션</Text>은 기업 맞춤형 <br /><Text as="span" fontSize={{ base: "28px", md: "38px" }} color="gray.800">RE100</Text> 이행 전략을 설계합니다.
        </Text>
        <Text
          fontSize={{ base: "16px", md: "24px" }}
          fontWeight="600"
          color="gray.600"
          textAlign="center"
          lineHeight="1.6"
          letterSpacing="-0.02em"
          fontFamily="pretendard"
        >
          기업의 전력 사용 환경을 분석하여 최적의 컨설팅을 도와드립니다.
        </Text>
      </Box>

      {/* Steps Row (desktop) / Column (mobile) */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        w="100%"
        gap={1}
        ref={ref}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateY(0)" : "translateY(-20px)"}
        transition="all 1.5s ease"
      >
        {steps.map((step, i) => (
          <Flex
            key={i}
            direction={{ base: "column", md: "row" }}
            align="center"
            w={{ base: "100%", md: "auto" }}
          >
            {/* Card */}
            <Box
              p={4}
              bg="gray.100"
              flexShrink={0}
              borderRadius="xl"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="start"
              w={{ base: "100%", md: "200px" }}
              minH={{ base: "auto", md: "160px" }}
              boxShadow="0 0 5px rgba(0, 0, 0, 0.2)"
            >
              <Text
                fontSize={{ base: "14px" }}
                fontWeight="800"
                color="green.600"
                fontFamily="NanumSquareNeo"
                textAlign="center"
                whiteSpace="pre-line"
                lineHeight="1.5"
                my={2}
              >
                {step.title}
              </Text>
              <Box flex={1}>
                <Text
                  fontSize={{ base: "sm" }}
                  color="gray.600"
                  fontFamily="pretendard"
                  textAlign="start"
                  lineHeight="1.5"
                >
                  {step.description}
                </Text>
              </Box>
            </Box>

            {/* Arrow */}
            {i < steps.length - 1 && (
              <Box
                flexShrink={0}
                display="flex"
                alignItems="center"
                justifyContent="center"
                w={{ base: "100%", md: "32px" }}
                h={{ base: "32px", md: "auto" }}
                py={{ base: 1, md: 0 }}
                color="green.600"
              >
                {/* Desktop arrow: right */}
                <Box display={{ base: "none", md: "block" }}>
                  <ArrowRight size={24} strokeWidth={2.5} />
                </Box>
                {/* Mobile arrow: down */}
                <Box display={{ base: "block", md: "none" }}>
                  <ArrowDown size={24} strokeWidth={2.5} />
                </Box>
              </Box>
            )}
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}