import { Box, Heading, Text, Grid, GridItem } from '@chakra-ui/react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const savingsRows = [
  { usage: '500 kWh', before: '10.2만원', after: '2.5만원', saving: '90만원' },
  { usage: '600 kWh', before: '13.4만원', after: '3.8만원', saving: '115만원' },
  { usage: '700 kWh', before: '16.5만원', after: '5.5만원', saving: '130만원' },
];

export default function SolarHomeSavings() {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <Box
      as="section"
      id="savings"
      bg="white"
      position="relative"
      overflow="hidden"
      py={{ base: 12, md: 16 }}
      px={{ base: 4, md: '6vw' }}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="50%"
        height="4px"
        bgGradient="linear(to-r, orange.500, transparent)"
      />

      <Box
        ref={ref}
        maxW="1200px"
        margin="0 auto"
        opacity={isView ? 1 : 0}
        transform={isView ? 'translateY(0)' : 'translateY(30px)'}
        transition="opacity 0.7s ease, transform 0.7s ease"
      >
        <Grid
          templateColumns={{ base: '1fr', lg: '1fr 1.3fr' }}
          gap={{ base: 8, lg: 16 }}
          alignItems="center"
        >
          <GridItem>
            <Text
              fontFamily="pretendard"
              fontSize="xs"
              fontWeight={600}
              letterSpacing="0.35em"
              textTransform="uppercase"
              color="orange.500"
              mb={3}
            >
              누진세 절감 효과
            </Text>
            <Heading
              as="h2"
              fontFamily="pretendard"
              fontSize={{ base: '2xl', md: '3xl', lg: '3.2rem' }}
              lineHeight={1.15}
              color="gray.800"
              mb={6}
            >
              연간 최대
              <br />
              <Box as="span" fontFamily="NanumSquareNeo" fontWeight={800} lineHeight={1} my={2} display="block">
                <Text as="span" color="orange.600" fontSize={{ base: '3rem', md: '3rem', lg: '3.5rem' }} letterSpacing="0.09em">약</Text>
                <Text as="span" color="orange.600" fontSize={{ base: '4rem', md: '4rem', lg: '4.5rem' }}>120</Text>
                <Text as="span" color="orange.600" fontSize={{ base: '3rem', md: '3rem', lg: '3.5rem' }}>만원</Text>
              </Box>
              절감
            </Heading>
            <Text
              mb={6}
              fontSize="md"
              color="gray.700"
              lineHeight={1.8}
              fontFamily="pretendard"
            >
              전력 사용량이 많은 가정일수록 절감 효과가 크게 나타날 수 있습니다. 태양광으로 생산된 전력은 우선 가정에서 사용되며,
              남는 전력은 전력망으로 보내져 이후 사용 전력에서 상계(차감) 됩니다.
              이를 통해 가정의 전기요금 부담을 크게 줄일 수 있습니다.
            </Text>
            <Text
              fontFamily="pretendard"
              fontSize="sm"
              color="gray.500"
              mt={6}
              lineHeight={1.7}
              borderTop="1px solid"
              borderColor="gray.200"
              pt={4}
            >
              ※ 절감액은 설치 용량(약 3kW) 기준 예상 값이며
              일조량, 전기 사용 패턴, 계절 등에 따라 달라질 수 있습니다.
              <br />
              ※ 태양광 발전으로 생산된 전력은 전기요금에서 상계되며 기본요금 및 일부 요금 항목은 절감 대상에서 제외될 수 있습니다.
            </Text>
          </GridItem>

          <GridItem>
            <Box bg="gray.50" borderRadius="xl" overflow="hidden">
              <Grid
                templateColumns="1fr 1fr 1fr 1fr"
                bg="gray.800"
                py={4}
                px={6}
              >
                <Text
                  fontFamily="pretendard"
                  fontSize="sm"
                  fontWeight={500}
                  letterSpacing="0.08em"
                  color="gray.200"
                  textAlign="center"
                >
                  월 사용량
                </Text>
                <Text
                  fontFamily="pretendard"
                  fontSize="sm"
                  fontWeight={500}
                  letterSpacing="0.08em"
                  color="gray.200"
                  textAlign="center"
                >
                  설치 전
                </Text>
                <Text
                  fontFamily="pretendard"
                  fontSize="sm"
                  fontWeight={500}
                  letterSpacing="0.08em"
                  color="gray.200"
                  textAlign="center"
                >
                  설치 후
                </Text>
                <Text
                  fontFamily="pretendard"
                  fontSize="sm"
                  fontWeight={500}
                  letterSpacing="0.08em"
                  color="gray.200"
                  textAlign="center"
                >
                  연간 절감액
                </Text>
              </Grid>
              {savingsRows.map((row) => (
                <Grid
                  key={row.usage}
                  templateColumns="1fr 1fr 1fr 1fr"
                  py={5}
                  px={6}
                  borderBottom="1px solid"
                  borderColor="gray.200"
                  _last={{ borderBottom: 'none' }}
                  _hover={{ bg: 'orange.50' }}
                  transition="background 0.2s"
                >
                  <Text fontFamily="pretendard" fontSize="md" fontWeight={500} color="gray.800" textAlign="center">
                    {row.usage}
                  </Text>
                  <Text fontFamily="pretendard" fontSize="md" color="gray.800" textAlign="center">
                    {row.before}
                  </Text>
                  <Text fontFamily="pretendard" fontSize="md" color="gray.800" textAlign="center">
                    {row.after}
                  </Text>
                  <Text
                    fontFamily="NanumSquareNeo"
                    fontSize="lg"
                    color="orange.600"
                    fontWeight={700}
                    textAlign="center"
                  >
                    {row.saving}
                  </Text>
                </Grid>
              ))}
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
