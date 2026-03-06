import { Box, Text, Grid } from '@chakra-ui/react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { num: '25년', label: '모듈 출력 보증 기간' },
  { num: '최대 40%↓', label: '전기요금 절감 가능' },
  { num: '5~7년', label: '평균 투자 회수 기간' },
  { num: 'CO₂ 절감', label: '운영 중 직접 배출 최소화' },
];

export default function SolarParkingStats() {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true, amount: 0.12 });
  
  return (
    <Box
      bgGradient="to-r"
      gradientFrom="orange.600"
      gradientTo="blue.600"
      py={10}
      px={{ base: 10, md: '6vw' }}
      borderRadius="2xl"
      maxW="1280px"
      mx="auto"
      ref={ref}
      opacity={isView ? 1 : 0}
      transform={isView ? 'translateY(0)' : 'translateY(100px)'}
      transition="opacity 0.7s ease, transform 0.7s ease"
    >
      <Grid templateColumns={{ base: 'repeat(2, 2fr)', md: 'repeat(4, 1fr)' }} gap={8}>
          {stats.map((item) => (
            <Box key={item.label} textAlign="center">
              <Text
                fontSize={{ base: 'xl', md: '3xl' }}
                fontWeight="800"
                color="whiteAlpha.900"
                fontFamily="NanumSquareNeo"
                textShadow="0 0 20px 0 rgba(0, 0, 0, 0.62)"
              >
                {item.num}
              </Text>
              <Text
                fontSize="xs"
                color="whiteAlpha.800"
                fontWeight="800"
                mt={1}
                letterSpacing="0.1em"
                fontFamily="pretendard"
                textShadow="0 0 20px 0 rgba(0, 0, 0, 0.62)"
              >
                {item.label}
              </Text>
            </Box>
          ))}
      </Grid>
    </Box>
  );
}
