import { Flex, Heading, Text, Grid, Box } from '@chakra-ui/react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  {
    value: "최대 30",
    suffix: "%",
    label: "발전 효율 개선",
  },
  {
    value: "투자 회수 기간 단축 가능",
    suffix: "",
    label: "",
  },
  {
    value: "발전 효율 개선을 통한 수익 구조 개선 기대",
    suffix: "",
    label: "",
  },
  {
    value: "25",
    suffix: "년",
    label: "모듈 출력 보증",
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
        my="auto"
        fontSize={data.suffix ? "4xl" : "xl"}
        fontWeight="800"
        color="orange.400"
        lineHeight="1.25"
        textAlign="center"
        fontFamily="NanumSquareNeo"
        textShadow="0 0 20px rgba(245, 107, 15, 0.93)"
      >
        {data.value}<Text as="span" fontSize="lg" color="orange.400">{data.suffix && ` ${data.suffix}`}</Text>
      </Text>
      {data.label && (
        <Text
          mt={4}
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
      )}
    </Box>
  );
}

export default function RepoweringHeader() {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });
  
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
          노후 태양광<br />
          설비를 다시 <Text as="span" color="orange.600">수익 자산</Text>으로
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
          리파워링은 노후 태양광 설비를 최신 기술로 개선하여<br />
          발전 효율과 자산 가치를 높이는 솔루션입니다.
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
          <StatCard key={stat.value} data={stat} />
        ))}
      </Grid>
    </>
  );
}