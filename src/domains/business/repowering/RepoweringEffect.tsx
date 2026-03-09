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
    title: "구조 및 설비 재설계",
    icon: <LucideBuilding size={24} strokeWidth={2} />,
    items: [
      "최신 고효율 모듈에 맞춰 구조와 설비를 재설계",
      "모듈 배치와 각도 최적화를 통해 발전 효율 개선",
      "유지관리 편의성 향상 및 고장 위험 감소",
    ],
    stat: { value: "설계 최적화", suffix: "", label: "" },
  },
  {
    title: "같은 공간, 더 높은 출력",
    icon: <LucideBatteryCharging size={24} strokeWidth={2} />,
    items: [
      "고효율 모듈과 최신 인버터 적용",
      "실시간 모니터링 기능을 통한 운영 효율 향상",
      "동일 부지에서 발전 성능 개선 가능",
    ],
    stat: { value: "최대 30", suffix: "%", label: "발전 효율 개선" },
  },
  {
    title: "수익 구조 개선",
    icon: <LucideBanknoteArrowUp size={24} strokeWidth={2} />,
    items: [
      "설비 효율 개선으로 발전량 증가 기대",
      "장기적인 발전 수익 구조 안정화",
    ],
    stat: { value: "25", suffix: "년", label: "모듈 출력 보증" },
  },
  {
    title: "발전소 운영 수명 연장",
    icon: <LucideRecycle size={24} strokeWidth={2} />,
    items: [
      "노후 설비 교체를 통한 발전소 운영 기간 연장",
      "최신 설비 적용으로 안정적인 발전 운영 가능",
    ],
    stat: { value: "발전 자산 가치", suffix: "", label: "유지 및 개선" },
  },
];

interface EffectData {
  title: string;
  icon: React.ReactNode;
  items: string[];
  stat: { value: string; suffix: string; label: string };
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
            lineHeight="1"
            fontSize="xl"
            fontWeight="800"
            color="gray.800"
            fontFamily="NanumSquareNeo"
          >
            <>
              {data.stat.value}
              <Text as="span" fontSize="sm">&nbsp;{data.stat.suffix}</Text>
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
  const isView = useInView(ref, { once: true });

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
