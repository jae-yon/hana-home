import { Box, Heading, Text, Grid, GridItem } from '@chakra-ui/react';
import { useRef } from 'react';

const features = [
  {
    num: '01',
    title: '고효율 셀 기술과\n고출력 모듈 신기술',
    body: '끊임없는 연구 개발을 통해 업계 최고 수준의 기술력을 보유하고 있습니다. 양면 단결정 PERC 기술로 최대 발전 효율을 구현합니다.',
  },
  {
    num: '02',
    title: '엄격한\n품질 관리 시스템',
    body: 'DNV 품질경영시스템 인증을 취득하였으며 공급업체 및 공정관리에도 최고 기준을 적용합니다.',
  },
  {
    num: '03',
    title: '간단한 설치,\n편리한 서비스',
    body: '태양광이 조사되는 곳이면 어디에나 설치 가능하며, 신속한 고객 대응 서비스를 제공합니다.',
  },
  {
    num: '04',
    title: '국내 생산으로\n믿을 수 있는 제품',
    body: '태양광 모듈은 국내에서 제작됩니다. 25년간 출력이 보장되며 12년간 무상 A/S 서비스를 제공합니다.',
  },
  {
    num: '05',
    title: '강화유리와\n특화된 프레임 설계',
    body: '폭설이나 강한 바람 등 험한 날씨에도 변함없는 내구성을 자랑합니다. 6063-T5 산화피막 알루미늄 합금 프레임 적용.',
  },
  {
    num: '06',
    title: '역 송전으로\n추가 절감 효과',
    body: '생산된 전기 중 사용 후 남은 전기는 한국전력공사로 역 송전되어 전력량계 소비 전력 숫자가 줄어듭니다.',
  },
];

export default function SolarHomeFeatures() {
  const ref = useRef(null);

  return (
    <Box
      as="section"
      id="features"
      bg="gray.900"
      position="relative"
      overflow="hidden"
      py={{ base: 16, md: 28 }}
      px={{ base: 4, md: '6vw' }}
    >
      <Box
        position="absolute"
        right="-2rem"
        bottom="-3rem"
        fontFamily="NanumSquareNeo"
        fontSize="18vw"
        color="whiteAlpha.100"
        pointerEvents="none"
        lineHeight={1}
      >
        SOLAR
      </Box>

      <Box ref={ref} maxW="1200px" margin="0 auto" position="relative" zIndex={1}>
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '3xl', lg: '3.2rem' }}
          lineHeight={1.15}
          color="white"
          mb={6}
        >
          왜 <Text as="span" color="orange.500">하나솔루션</Text>인가
        </Heading>
        <Text
          fontFamily="pretendard"
          fontSize="md"
          color="whiteAlpha.700"
          lineHeight={1.8}
          maxW="580px"
          mb={16}
        >
          끊임없는 연구 개발과 국내 생산으로 만들어진 고신뢰 태양광 솔루션을 경험하세요.
        </Text>

        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap="1px"
          bg="whiteAlpha.100"
          border="1px solid"
          borderColor="whiteAlpha.100"
          mt={16}
        >
          {features.map((feat) => (
            <GridItem key={feat.num} height="100%">
              <Box
                bg="gray.800"
                p={{ base: 6, md: 8 }}
                position="relative"
                overflow="hidden"
                height="100%"
                transition="background 0.3s"
                _hover={{
                  bg: 'gray.700',
                  _before: { height: '100%' },
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '3px',
                  height: 0,
                  bg: 'orange.500',
                  transition: 'height 0.4s ease',
                }}
              >
                <Text
                  fontSize="3.5rem"
                  color="orange.500"
                  opacity={0.5}
                  lineHeight={1}
                  mb={4}
                >
                  {feat.num}
                </Text>
                <Text
                  fontFamily="NanumSquareNeo"
                  fontSize="md"
                  fontWeight={700}
                  color="white"
                  mb={3}
                  lineHeight={1.4}
                  whiteSpace="pre-line"
                >
                  {feat.title}
                </Text>
                <Text
                  fontFamily="NanumSquareNeo"
                  fontSize="sm"
                  color="whiteAlpha.700"
                  lineHeight={1.7}
                >
                  {feat.body}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
