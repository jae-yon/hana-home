import { Box, Grid, GridItem, Text, Heading } from '@chakra-ui/react';
import {
  Zap,
  Leaf,
  XCircle,
  BarChart2,
  CircleCheckBig,
  CircleDollarSign,
  HandCoins,
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

const ROWS: {
  criterion: string;
  ppa: { text: string; Icon: LucideIcon; color?: string };
  rps: { text: string; Icon: LucideIcon; color?: string };
}[] = [
  {
    criterion: '전기 사용 방식',
    ppa: { text: '생산 전기를 먼저 직접 사용', Icon: Zap },
    rps: { text: '생산 전력 전량 판매', Icon: Zap },
  },
  {
    criterion: '잉여 전력 처리',
    ppa: { text: '남는 전력 판매 가능', Icon: HandCoins },
    rps: { text: '생산 전력 전량 판매', Icon: HandCoins },
  },
  {
    criterion: '수익 구조',
    ppa: { text: '전기요금 점감 + 잉여전력 판매', Icon: BarChart2 },
    rps: { text: 'SMP + REC 판매', Icon: CircleDollarSign },
  },
  {
    criterion: 'REC 가중치',
    ppa: { text: '적용 없음', Icon: XCircle },
    rps: { text: 'REC 가중치 적용', Icon: CircleCheckBig },
  },
  {
    criterion: 'RE100 적용',
    ppa: { text: '가능', Icon: Leaf },
    rps: { text: '불가능', Icon: XCircle },
  },
];

interface CompareTableProps {
  type: 'ppa' | 'rps';
}

export default function CompareTable(props: CompareTableProps) {
  const { type } = props;

  return (
    <Box mt={12} p={12}>
      <Heading
        fontSize={{ base: '20px', md: '28px', lg: '32px' }}
        fontWeight="800"
        color="gray.800"
        fontFamily="pretendard"
        mb={2}
        textAlign="center"
        letterSpacing="-0.04em"
      >
        자가소비형 PPA와 태양광 발전사업 RPS 비교
      </Heading>
      <Text
        fontSize={{ base: 'sm', md: 'md' }}
        color="gray.600"
        textAlign="center"
        mb={8}
        fontFamily="pretendard"
      >
        두 가지 태양광 활용 방식을 한눈에 쉽게 비교해 보세요.
      </Text>

      {/* Header row */}
      <Grid templateColumns="1.2fr 1fr 1.2fr" gap={2} overflow="hidden">
        <GridItem
          p={5}
          display="flex"
          borderRadius="xl"
          borderWidth="1px"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          fontFamily="NanumSquareNeo"
          bg={type === 'ppa' ? 'orange.50' : 'gray.50'}
          color={type === 'ppa' ? 'orange.600' : 'gray.600'}
          borderColor={type === 'ppa' ? 'orange.400' : 'gray.200'}
        >
          <Text fontSize={{ base: 'sm', md: 'lg' }} fontWeight="800">
            자가소비형 PPA
          </Text>
        </GridItem>

        <GridItem
          p={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="xl"
          fontFamily="NanumSquareNeo"
          borderWidth="1px"
          bg="white"
          color="gray.600"
          borderColor="gray.400"
        >
          <Text
            fontSize={{ base: 'sm', md: 'lg' }}
            fontWeight="800"
            letterSpacing="wide"
            textAlign="center"
          >
            목적
          </Text>
        </GridItem>

        <GridItem
          p={5}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          borderRadius="xl"
          fontFamily="NanumSquareNeo"
          borderWidth="1px"
          bg={type === 'rps' ? 'orange.50' : 'gray.50'}
          color={type === 'rps' ? 'orange.600' : 'gray.600'}
          borderColor={type === 'rps' ? 'orange.400' : 'gray.200'}
        >
          <Text fontSize={{ base: 'sm', md: 'lg' }} fontWeight="800">
            태양광 발전사업 (RPS)
          </Text>
        </GridItem>
      </Grid>

      {/* Data rows */}
      {ROWS.map((row, index) => {
        const PpaIcon = row.ppa.Icon;
        const RpsIcon = row.rps.Icon;
        return (
          <Grid
            key={index}
            templateColumns="1.2fr 1fr 1.2fr"
            gap={2}
            mt={2}
            borderRadius="xl"
            overflow="hidden"
          >
            <GridItem
              p={5}
              display="flex"
              alignItems="center"
              flexDirection={{ base: 'column', md: 'row' }}
              justifyContent={{ base: 'center', md: 'flex-start' }}
              gap={3}
              borderWidth="1px"
              borderRadius="xl"
              fontFamily="NanumSquareNeo"
              bg={type === 'ppa' ? 'orange.50' : 'gray.50'}
              borderColor={type === 'ppa' ? 'orange.200' : 'gray.200'}
            >
              <Box
                flexShrink={0}
                w={10}
                h={10}
                borderRadius="full"
                color="white"
                boxShadow="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg={type === 'ppa' ? 'orange.500' : 'gray.500'}
              >
                <PpaIcon size={20} strokeWidth={2} />
              </Box>
              <Text
                fontSize={{ base: 'xs', md: 'sm' }}
                fontWeight="700"
                letterSpacing="wide"
                textAlign={{ base: 'center', md: 'start' }}
                color={type === 'ppa' ? 'orange.600' : 'gray.600'}
              >
                {row.ppa.text}
              </Text>
            </GridItem>

            <GridItem
              p={5}
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontFamily="NanumSquareNeo"
              bg="white"
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="xl"
            >
              <Text
                fontSize={{ base: 'xs', md: 'sm' }}
                fontWeight="700"
                color="gray.800"
                letterSpacing="wide"
                textAlign="center"
              >
                {row.criterion}
              </Text>
            </GridItem>

            <GridItem
              p={5}
              display="flex"
              alignItems="center"
              flexDirection={{ base: 'column', md: 'row' }}
              justifyContent={{ base: 'center', md: 'flex-start' }}
              gap={3}
              borderWidth="1px"
              borderRadius="xl"
              fontFamily="NanumSquareNeo"
              bg={type === 'rps' ? 'orange.50' : 'gray.50'}
              borderColor={type === 'rps' ? 'orange.200' : 'gray.200'}
            >
              <Box
                flexShrink={0}
                w={10}
                h={10}
                color="white"
                display="flex"
                boxShadow="lg"
                borderRadius="full"
                alignItems="center"
                justifyContent="center"
                bg={type === 'rps' ? 'orange.500' : 'gray.500'}
              >
                <RpsIcon size={20} strokeWidth={2} />
              </Box>
              <Text
                fontSize={{ base: 'xs', md: 'sm' }}
                fontWeight="700"
                letterSpacing="wide"
                textAlign={{ base: 'center', md: 'start' }}
                color={type === 'rps' ? 'orange.600' : 'gray.600'}
              >
                {row.rps.text}
              </Text>
            </GridItem>
          </Grid>
        );
      })}
    </Box>
  );
}
