import { Box, Heading, Text, Grid, GridItem } from '@chakra-ui/react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const savingsRows = [
  { usage: '500 kWh', before: '10.2만원', after: '1.5만원', saving: '104만원' },
  { usage: '600 kWh', before: '13.4만원', after: '4.0만원', saving: '112만원' },
  { usage: '700 kWh', before: '16.5만원', after: '6.1만원', saving: '125만원' },
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
      py={{ base: 16, md: 28 }}
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
              <Box as="span" fontSize={{ base: '3.5rem', md: '5rem', lg: '5.5rem' }} color="gray.800" lineHeight={1} my={2} display="block">
                <Text as="span" color="orange.600">125</Text>
                <Text as="span" color="orange.600">만원</Text>
              </Box>
              절감
            </Heading>
            <Text
              fontFamily="pretendard"
              fontSize="md"
              color="gray.600"
              lineHeight={1.8}
              maxW="520px"
              mb={6}
            >
              전력 소비량이 클수록 절감 효과도 커집니다. 남은 전기는 한국전력공사로 역 송전되어 차후 전기료에서 차감되므로, 사용하는 전기료를 최대 100%까지 절약할 수 있습니다.
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
              ※ 위 수치는 계절에 따른 발전량 차이로 다를 수 있으며, 대가족 요금 할인 미적용 기준입니다.
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
