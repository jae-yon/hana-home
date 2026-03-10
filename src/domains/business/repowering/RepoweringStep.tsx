import { useState, useRef } from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  VStack,
  HStack,
  Circle,
  Separator,
} from "@chakra-ui/react";

import { useInView } from "framer-motion";
import { LucideCheckCircle, LucideFileText, LucideLandmark, LucideLightbulb, LucideSearch, LucideSettings } from "lucide-react";

function useScrollReveal(threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: threshold });
  return [ref, isInView];
}

const stepsData = [
  {
    step: "01",
    title: "법령 및 제도 검토",
    icon: <LucideFileText size={24} strokeWidth={2} />,
    items: [
      "기존 발전소 구조물, 기초, 배선, 접지 등 설비 상태 검토",
      "발전사업 변경 가능 여부 및 관련 인허가 요건 확인",
    ],
  },
  {
    step: "02",
    title: "현장 실사 및 설비 진단",
    icon: <LucideSearch size={24} strokeWidth={2} />,
    items: [
      "모듈, 인버터, 구조물 등 설비 상태 점검",
      "발전 효율 저하 여부 및 리파워링 가능성 분석",
    ],
  },
  {
    step: "03",
    title: "리파워링 설계 및 경제성 분석",
    icon: <LucideLightbulb size={24} strokeWidth={2} />,
    items: [
      "교체 대상 설비 및 구조 설계 수립",
      "예상 발전량, 투자 비용, 회수 기간 검토",
    ],
  },
  {
    step: "04",
    title: "인허가 및 행정 절차 진행",
    icon: <LucideLandmark size={24} strokeWidth={2} />,
    items: [
      "발전사업 변경 신고 및 관련 행정 절차 진행",
      "계통 및 관련 기관 협의를 통한 사업 조건 확인",
    ],
  },
  {
    step: "05",
    title: "리파워링 시공",
    icon: <LucideSettings size={24} strokeWidth={2} />,
    items: [
      "고효율 모듈 및 인버터 설치",
      "구조물 보강 및 전기 설비 정비",
    ],
  },
  {
    step: "06",
    title: "시험 운전 및 준공",
    icon: <LucideCheckCircle size={24} strokeWidth={2} />,
    items: [
      "시험 운전을 통해 설비 정상 작동 여부 확인",
      "전기안전공사 검사 후 발전소 운영 재개",
    ],
  },
];

interface StepData {
  step: string;
  title: string;
  icon: React.ReactNode;
  items: string[];
}

function StepRow({ data, index, isLast }: { data: StepData; index: number; isLast: boolean }) {
  const [ref, visible] = useScrollReveal(0.3);
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      ref={ref as React.RefObject<HTMLDivElement>}
      opacity={visible ? 1 : 0}
      transform={visible ? "translateX(0)" : "translateX(-40px)"}
      transition={`all 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s`}
    >
      <Flex gap={{ base: 4, md: 6 }} align="start">
        {/* left: circle + line */}
        <Flex flexDirection="column" align="center" flexShrink={0}>
          <Circle
            size="56px"
            bg={hovered ? "blue.600" : "white"}
            border="2px solid"
            borderColor={hovered ? "blue.600" : "blue.400"}
            boxShadow={hovered ? "0 0 0 6px rgba(43,108,176,0.15)" : "0 4px 16px rgba(43,108,176,0.12)"}
            transition="all 0.3s"
            cursor="default"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Text
              fontFamily="NanumSquareNeo"
              fontSize="sm"
              fontWeight="900"
              color={hovered ? "white" : "blue.700"}
              transition="color 0.3s"
            >
              {data.step}
            </Text>
          </Circle>
          {!isLast && (
            <Box
              w="2px"
              flex="1"
              minH="40px"
              bgGradient="linear(to-b, blue.400, blue.50)"
              my={2}
            />
          )}
        </Flex>

        {/* right: content card */}
        <Box
          flex="1"
          bg="white"
          borderRadius="xl"
          border="1px solid"
          borderColor={hovered ? "blue.500" : "gray.200"}
          boxShadow={hovered ? "0 8px 32px rgba(43,108,176,0.12)" : "0 2px 12px rgba(43,108,176,0.06)"}
          transition="all 0.3s"
          p={{ base: 4, md: 5 }}
          mb={isLast ? 0 : 4}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          cursor="default"
        >
          <Flex align="center" gap={3} mb={3} wrap="wrap">
            <Box
              fontSize="xl"
              w="38px" h="38px"
              borderRadius="10px"
              bg="blue.50"
              display="flex"
              alignItems="center"
              justifyContent="center"
              transition="transform 0.3s"
              color="blue.700"
              transform={hovered ? "scale(1.15) rotate(-5deg)" : "scale(1)"}
            >
              {data.icon}
            </Box>
            <Text
              fontFamily="NanumSquareNeo"
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="700"
              color="gray.900"
              flex="1"
            >
              {data.title}
            </Text>
          </Flex>

          <Separator borderColor="gray.200" mb={3} />

          <VStack align="start" gap={2}>
            {data.items.map((item, i) => (
              <HStack key={i} align="start" gap={2}>
                <Box
                  w="5px" h="5px"
                  borderRadius="full"
                  bg="blue.600"
                  flexShrink={0}
                  mt="7px"
                />
                <Text fontSize="sm" color="gray.600" lineHeight="1.75" fontFamily="pretendard">
                  {item}
                </Text>
              </HStack>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default function RepoweringProcess() {
  const [titleRef, titleVisible] = useScrollReveal(0.5);
  return (
    <Box
      py={12}
      width="100%"
      display="flex"
      overflow="hidden"
      position="relative"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Container>
        {/* header */}
        <VStack
          ref={titleRef as React.RefObject<HTMLDivElement>}
          gap={3} mb={4} textAlign="center"
          opacity={titleVisible ? 1 : 0}
          transform={titleVisible ? "translateY(0)" : "translateY(30px)"}
          transition="all 0.7s cubic-bezier(0.22,1,0.36,1)"
        >
          <Text
            mb={0}
            color="blue.700"
            fontWeight="800"
            fontFamily="NanumSquareNeo"
            fontSize={{ base: '12px', sm: '16px' }}
          >
            Re-powering Process
          </Text>
          <Text
            color="gray.900"
            fontWeight="800"
            fontFamily="NanumSquareNeo"
            fontSize={{ base: '24px', sm: '32px', md: '48px', lg: '56px' }}
          >
            리파워링 절차
          </Text>
          <Text
            mb={8}
            color="gray.700"
            fontWeight="800"
            fontFamily="NanumSquareNeo"
            fontSize={{ base: '12px', sm: '16px' }}
          >
            체계적인 프로세스로 안전하고 확실한 리파워링을 진행합니다.
          </Text>
        </VStack>

        {/* steps */}
        <Box>
          {stepsData.map((s, i) => (
            <StepRow
              key={i}
              data={s}
              index={i}
              isLast={i === stepsData.length - 1}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}