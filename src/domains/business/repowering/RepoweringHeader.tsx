import { Flex, Heading, Text, Grid, Box } from '@chakra-ui/react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  {
    value: "20~40",
    suffix: "%",
    label: "발전량 증가",
  },
  {
    value: "ROI",
    suffix: "",
    label: "투자 회수 기간 단축",
  },
  {
    value: "REC",
    suffix: "",
    label: "가중치 재적용 가능",
  },
  {
    value: "25",
    suffix: "년",
    label: "신규 모듈 성능보증",
  },
];

interface StatData {
  value: string;
  suffix: string;
  label: string;
}

function StatCard({ data }: { data: StatData }) {
  return (
    <Box
      px={4}
      py={8}
      display="flex"
      boxShadow="md"
      borderRadius="xl"
      textAlign="center"
      alignItems="center"
      flexDirection="column"
      backgroundColor="gray.800"
    >
      <Text
        mb={4}
        fontSize="4xl"
        fontWeight="800"
        color="orange.400"
        lineHeight="1.25"
        textAlign="center"
        fontFamily="NanumSquareNeo"
        textShadow="0 0 20px rgba(245, 107, 15, 0.93)"
      >
        {data.value}<Text as="span" fontSize="lg" color="orange.400">{data.suffix && ` ${data.suffix}`}</Text>
      </Text>
      <Text
        fontSize="16px"
        fontWeight="500"
        color="gray.200"
        lineHeight="1.25"
        textAlign="center"
        letterSpacing="0.02em"
        fontFamily="pretendard"
      >
        {data.label}
      </Text>
    </Box>
  );
}

export default function RepoweringHeader() {
  const ref = useRef(null);
  const isView = useInView(ref);
  
  return (
    <>
      <Flex
        width="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          mb={10}
          fontWeight="bold"
          color="gray.800"
          lineHeight="1.25"
          textAlign="center"
          wordBreak="keep-all"
          letterSpacing="0.02em"
          fontSize={{ base: '28px', sm: '36px', md: '48px', lg: '56px' }}
          ref={ref}
        >
          노후 태양광을<br />
          <Text as="span" color="orange.600">수익 자산</Text>으로 전환하세요.
        </Heading>
        <Text
          mb={10}
          color="gray.700"
          lineHeight="1.25"
          textAlign="center"
          fontWeight="medium"
          wordBreak="keep-all"
          letterSpacing="0.02em"
          overflowWrap="break-word"
          fontSize={{ base: '14px', sm: '16px', md: '20px', lg: '24px' }}
          ref={ref}
          opacity={isView ? 1 : 0}
          transform={isView ? "translateY(0)" : "translateY(30px)"}
          transition="all 1.4s cubic-bezier(0.22,1,0.36,1)"
        >
          설치부터 수익까지, 완벽한 과정.<br />
          리파워링은 단순 교체가 아닌, 수익성을 높이는 체계적인 전략입니다.
        </Text>
      </Flex>

      <Grid
        p={4}
        my={24}
        gap={4}
        width="100%"
        borderRadius="xl"
        backgroundColor="blackAlpha.50"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.3)"
        templateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
        ref={ref}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateY(0)" : "translateY(30px)"}
        transition="all 2s cubic-bezier(0.22,1,0.36,1)"
      >
        {stats.map((stat) => (
          <StatCard key={stat.label} data={stat} />
        ))}
      </Grid>
    </>
  );
}