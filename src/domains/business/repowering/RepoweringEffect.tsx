import { useRef } from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { LucideBanknoteArrowUp, LucideBatteryCharging, LucideBuilding, LucideRecycle } from 'lucide-react';

const effectsData = [
  {
    title: "구조물부터 설비까지 재설계",
    icon: <LucideBuilding size={24} strokeWidth={2} />,
    items: [
      "최신 고효율 설비에 맞춰 구조물과 설비를 최적화 재설계",
      "모듈 배치와 각도 조정으로 발전 효율 극대화",
      "유지관리 편의성 개선, 고장 발생 최소화로 수익 안정성 강화",
    ],
    stat: { value: 40, suffix: "%", label: "설계 효율 향상" },
  },
  {
    title: "같은 공간, 더 높은 출력",
    icon: <LucideBatteryCharging size={24} strokeWidth={2} />,
    items: [
      "동일 출력 대비 높은 효율·낮은 감소율의 최신 모듈 적용",
      "실시간 모니터링 기능으로 효율적 관리가 가능한 인버터 업그레이드",
      "기존 대비 출력 증가, 발전량 극대화로 수익 직결",
    ],
    stat: { value: 30, suffix: "%", label: "발전량 증가" },
  },
  {
    title: "수익성에 대한 기대효과",
    icon: <LucideBanknoteArrowUp size={24} strokeWidth={2} />,
    items: [
      "리파워링으로 REC 가중치 적용, REC 수익성 확보",
      "효율 개선으로 추가 발전 수익 기대 — 제2의 수익 기회 창출",
    ],
    stat: { value: 25, suffix: "년", label: "모듈 성능보증" },
  },
  {
    title: "단순 교체가 아닌 '수명 리셋'",
    icon: <LucideRecycle size={24} strokeWidth={2} />,
    items: [
      "기존 발전소 수명을 연장하여 추가 수익 창출 — 사업 연속성 확보",
      "최신 설비 적용으로 발전소 자산 가치 유지 및 향상",
    ],
    stat: { value: 2, suffix: "배", label: "자산 가치 회복" },
  },
];

interface EffectData {
  title: string;
  icon: React.ReactNode;
  items: string[];
  stat: { value: number; suffix: string; label: string };
}

function EffectCard({ data, index }: { data: EffectData; index: number }) {
  return (
    <Box
      transition={`all 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s`}
      borderRadius="xl"
      overflow="hidden"
      boxShadow="0 4px 24px rgba(230,81,0,0.08)"
      border="1px solid"
      borderColor="gray.300"
      _hover={{
        transform: "translateY(-6px)",
        boxShadow: "0 20px 48px rgba(230,81,0,0.18)",
        borderColor: "orange.400",
      }}
      role="group"
      cursor="default"
    >
      {/* top accent bar */}
      <Box
        h="4px"
        bgGradient="linear(to-r, gray.300, gray.500)"
        transition="all 0.3s"
        _groupHover={{ h: "6px" }}
      />

      {/* stat chip */}
      <Flex
        px={6} pt={5} pb={0}
        justify="space-between"
        align="center"
      >
        <Box
          fontSize="2xl"
          w="48px" h="48px"
          borderRadius="14px"
          bg="orange.600"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textShadow="0 0 20px rgba(241, 241, 241, 0.93)"
          boxShadow="0 0 20px rgba(241, 241, 241, 0.93)"
        >
          {data.icon}
        </Box>
        <Box textAlign="right">
          <Text
            fontFamily="NanumSquareNeo"
            fontSize="2xl"
            fontWeight="800"
            color="gray.800"
            lineHeight="1"
          >
            <>
              {data.stat.value}&nbsp;
              <Text as="span" fontSize="sm">{data.stat.suffix}</Text>
            </>
          </Text>
          <Text fontSize="xs" color="red.500" fontWeight="600" mt="1" fontFamily="pretendard">
            {data.stat.label}
          </Text>
        </Box>
      </Flex>

      <VStack align="start" px={6} pt={4} pb={6} gap={3}>
        <HStack gap={2}>
          <Text fontFamily="NanumSquareNeo" fontSize="2xl" fontWeight="800" color="gray.900">
            {data.title}
          </Text>
        </HStack>

        <VStack align="start" gap={2}>
          {data.items.map((item, i) => (
            <HStack key={i} align="start" gap={2}>
              <Box
                w="6px" h="6px"
                borderRadius="full"
                bg="gray.500"
                flexShrink={0}
                mt="6px"
              />
              <Text fontSize="sm" color="gray.800" fontWeight="500" lineHeight="1.75" fontFamily="pretendard">
                {item}
              </Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
}

export default function RepoweringEffects() {
  const ref = useRef(null);
  const isView = useInView(ref);

  return (
    <Box
      py={12}
      width="100%"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Container>
        {/* header */}
        <VStack
          gap={3}
          ref={ref}
          alignItems="flex-start"
          opacity={isView ? 1 : 0}
          transform={isView ? "translateY(0)" : "translateY(30px)"}
          transition="all 0.7s cubic-bezier(0.22,1,0.36,1)"
        >
          <Text
            mb={0}
            color="red.600"
            fontWeight="800"
            fontFamily="NanumSquareNeo"
            fontSize={{ base: '12px', sm: '16px' }}
          >
            Re-powering Effects
          </Text>
          <Text
            color="gray.900"
            fontWeight="800"
            fontFamily="NanumSquareNeo"
            fontSize={{ base: '24px', sm: '32px', md: '48px', lg: '56px' }}
          >
            리파워링 효과
          </Text>
          <Text
            mb={8}
            color="gray.700"
            fontWeight="800"
            fontFamily="NanumSquareNeo"
            fontSize={{ base: '12px', sm: '16px' }}
          >
            단순 부품 교체를 넘어, 발전소 전체를 새롭게 재설계합니다.
          </Text>
        </VStack>
        {/* cards */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={6}
        >
          {effectsData.map((d, i) => (
            <EffectCard key={i} data={d} index={i} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
