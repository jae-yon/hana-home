import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { LucideZap, LucideWrench, LucideCircleDollarSign, LucideRecycle } from 'lucide-react';

import { Box, Text, Stack } from '@chakra-ui/react';

const causes = [
  {
    icon: <LucideZap size={24} strokeWidth={2} />,
    title: "성능 저하 문제",
    description: "태양광 모듈은 년마다 약 0.4% ~ 0.7% 정도 효율이 감소합니다. 노후 설비는 발전 성능이 저하될 수 있습니다.",
  },
  {
    icon: <LucideWrench size={24} strokeWidth={2} />,
    title: "인버터 수명 한계",
    description: "인버터는 평균 수명은 약 10~15년이며 노후 인버터는 고장률과 유지관리 비용이 증가할 수 있습니다.",
  },
  {
    icon: <LucideCircleDollarSign size={24} strokeWidth={2} />,
    title: "발전 효율 개선",
    description: "최신 고효율 모듈과 인버터 적용을 통해 동일 부지에서 더 높은 발전 효율을 기대할 수 있습니다.",
  },
  {
    icon: <LucideRecycle size={24} strokeWidth={2} />,
    title: "자산 가치 보존",
    description: "기존 부지와 계통을 활용하여 신규 발전소 대비 비용 부담을 줄이고 자산 가치를 유지할 수 있습니다.",
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