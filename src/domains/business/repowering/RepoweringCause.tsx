import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { LucideZap, LucideWrench, LucideCircleDollarSign, LucideRecycle } from 'lucide-react';

import { Box, Text, Stack } from '@chakra-ui/react';

const causes = [
  {
    icon: <LucideZap size={24} strokeWidth={2} />,
    title: "성능 저하 문제",
    description: "태양광 모듈은 매년 약 0.5~1%씩 효율이 감소합니다. 20년이 지난 설비는 초기 대비 최대 30%의 발전량을 잃게 됩니다.",
  },
  {
    icon: <LucideWrench size={24} strokeWidth={2} />,
    title: "인버터 수명 한계",
    description: "인버터의 평균 수명은 10~15년으로 모듈보다 짧습니다. 노후 인버터는 고장 빈도가 높아져 유지보수 비용이 급증합니다.",
  },
  {
    icon: <LucideCircleDollarSign size={24} strokeWidth={2} />,
    title: "수익성 회복 기회",
    description: "신형 고효율 모듈과 스마트 인버터로 교체하면 동일 면적에서 더 많은 전력을 생산, REC 수익성도 회복할 수 있습니다.",
  },
  {
    icon: <LucideRecycle size={24} strokeWidth={2} />,
    title: "자산 가치 보존",
    description: "리파워링은 기존 부지·계통 연계를 활용하며 발전소 수명을 연장합니다. 신규 건설 대비 훨씬 낮은 비용으로 가치를 되살립니다.",
  },
];

interface CauseData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function CauseCard({ data }: { data: CauseData }) {
  return (
    <Stack
      p={4}
      mb={4}
      gap={4}
      width="100%"
      display="flex"
      borderRadius="xl"
      alignItems="start"
      backgroundColor="blackAlpha.700"
      boxShadow="0 0 15px rgba(0, 0, 0, 0.3)"
    >
      <Box
        gap={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          p={2}
          color="white"
          display="flex"
          borderRadius="xl"
          alignItems="center"
          justifyContent="center"
          backgroundColor="gray.700"
        >
          {data.icon}
        </Box>
        <Text
          fontWeight="700"
          color="white"
          fontFamily="pretendard"
          fontSize={{ base: '20px', sm: '24px' }}
        >
          {data.title}
        </Text>
      </Box>
      <Text
        ms={4}
        mb={2}
        color="white"
        fontWeight="500"
        fontFamily="NanumSquareNeo"
        fontSize={{ base: '12px', sm: '14px', md: '16px' }}
      >
        {data.description}
      </Text>
    </Stack>
  );
}

export default function RepoweringCause() {
  const ref = useRef(null);
  const isView = useInView(ref);

  return (
    <Box
      p={4}
      width="100%"
    >
      <Text
        mb={0}
        color="blue.700"
        fontWeight="800"
        fontFamily="NanumSquareNeo"
        fontSize={{ base: '12px', sm: '16px' }}
        ref={ref}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateY(0)" : "translateY(30px)"}
        transition="all 0.7s cubic-bezier(0.22,1,0.36,1)"
      >
        Why Re-powering?
      </Text>
      <Text
        color="gray.900"
        fontWeight="800"
        fontFamily="NanumSquareNeo"
        fontSize={{ base: '24px', sm: '32px', md: '48px', lg: '56px' }}
        ref={ref}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateY(0)" : "translateY(30px)"}
        transition="all 0.7s cubic-bezier(0.22,1,0.36,1)"
      >
        지금 리파워링이 필요한 이유
      </Text>
      <Text
        mb={8}
        color="gray.700"
        fontWeight="800"
        fontFamily="NanumSquareNeo"
        fontSize={{ base: '12px', sm: '16px' }}
        ref={ref}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateY(0)" : "translateY(30px)"}
        transition="all 0.7s cubic-bezier(0.22,1,0.36,1)"
      >
        태양광 설비는 시간이 지날수록 성능이 저하됩니다. 리파워링은 이를 되살리는 가장 경제적인 방법입니다.
      </Text>

      <Stack
        ref={ref}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateY(0)" : "translateY(30px)"}
        transition="all 1.4s cubic-bezier(0.22,1,0.36,1)"
      >
        {causes.map((cause) => (
          <CauseCard key={cause.title} data={cause} />
        ))}
      </Stack>

    </Box>
  );
}