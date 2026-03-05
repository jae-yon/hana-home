import { Box, Text, Heading, Flex } from '@chakra-ui/react';
import { ArrowRight } from 'lucide-react';

const steps = [
  { num: '1', title: '태양광 발전', desc: '모듈이 태양 에너지를\n 직류(DC) 전력으로 변환' },
  { num: '2', title: '인버터 변환', desc: 'DC를 교류(AC)로 변환하여\n 배전반으로 공급' },
  { num: '3', title: 'ESS 저장', desc: '잉여 전력을 배터리에 저장,\n 야간·흐린 날 활용' },
  { num: '4', title: '자가·판매', desc: '건물 내 자가소비 또는\n 한전 계통 판매(REC)' },
];

export default function SolarParkingHowItWorks() {
  return (
    <Box as="section">
      <Box
        maxW="1280px"
        mx="auto"
        textAlign="center"
      >
        <Heading
          as="h2"
          mb={2}
          color="gray.800"
          lineHeight={1.2}
          fontSize={{ base: 'xl', md: '2xl', lg: '3rem' }}
        >
          작동 원리
        </Heading>
        <Text 
          color="gray.700" 
          fontSize={{ base: 'md', md: 'lg' }} 
          maxW="600px" 
          mb={4} 
          fontFamily="pretendard" 
          mx="auto"
          lineHeight={1.7}
          px={{ base: 4, md: 6 }}
        >
          태양광에서 생산된 전력은 인버터를 거쳐<br />건물 전력망 및 EV 충전기로
          공급됩니다.
        </Text>

        {/* 모바일: 세로 순서도 (md 미만) */}
        <Flex
          mt={10}
          direction="column"
          align="center"
          gap={2}
          px={4}
          display={{ base: 'flex', md: 'none' }}
        >
          {steps.map((step, i) => (
            <Box key={step.num} display="flex" flexDir="column" alignItems="center" textAlign="center">
              {i > 0 && (
                <Box color="blue.500" mb={1}>
                  <ArrowRight size={24} strokeWidth={2.5} style={{ transform: 'rotate(90deg)' }} />
                </Box>
              )}
              <Box
                w="56px"
                h="56px"
                borderRadius="full"
                bg="blue.500"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={3}
              >
                {step.num}
              </Box>
              <Text fontWeight="bold" fontSize="md" color="gray.800" mb={1} fontFamily="NanumSquareNeo">
                {step.title}
              </Text>
              <Text fontSize="xs" color="gray.600" lineHeight={1.5} whiteSpace="pre-line">
                {step.desc}
              </Text>
            </Box>
          ))}
        </Flex>

        {/* 데스크탑: 가로 순서도 (md 이상) */}
        <Flex
          mt={10}
          direction="row"
          align="flex-start"
          justify="center"
          gap={2}
          px={6}
          display={{ base: 'none', md: 'flex' }}
          flexWrap="wrap"
        >
          {steps.map((step, i) => (
            <Box key={step.num} display="flex" alignItems="center" gap={2}>
              <Box textAlign="center" flex="1" minW="140px" maxW="200px">
                <Box
                  w="56px"
                  h="56px"
                  borderRadius="full"
                  bg="blue.500"
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={3}
                >
                  {step.num}
                </Box>
                <Text fontWeight="bold" fontSize="md" color="gray.800" mb={1} fontFamily="NanumSquareNeo">
                  {step.title}
                </Text>
                <Text fontSize="xs" color="gray.600" lineHeight={1.5} whiteSpace="pre-line">
                  {step.desc}
                </Text>
              </Box>
              {i < steps.length - 1 && (
                <Box color="blue.500" flexShrink={0} alignSelf="center" mt={-8}>
                  <ArrowRight size={24} strokeWidth={2.5} />
                </Box>
              )}
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
