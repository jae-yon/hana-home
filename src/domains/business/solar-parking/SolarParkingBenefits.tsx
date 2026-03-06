import { Box, Text, Heading, SimpleGrid } from '@chakra-ui/react';
import {
  Building2,
  Lightbulb,
  Car,
  Leaf,
  Zap,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const benefits: {
  icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    icon: Building2,
    title: '공간 활용 극대화',
    desc: '기존 주차 기능을 유지하면서 상부 공간을 활용해 추가 부지 확보 없이 태양광 발전 설비를 구축할 수 있습니다.',
  },
  {
    icon: Lightbulb,
    title: '전기요금 절감',
    desc: '생산된 전력을 건물에서 사용하거나 전력 판매를 통해 에너지 비용 절감 효과를 기대할 수 있습니다.',
  },
  {
    icon: Car,
    title: '차량 & 이용자 보호',
    desc: '캐노피 구조가 강한 햇빛, 우박, 눈, 비로부터 차량을 보호하고 이용자의 쾌적한 보행 환경을 제공합니다.',
  },
  {
    icon: Leaf,
    title: '친환경 에너지 생산',
    desc: '태양광 발전은 운영 과정에서 직접적인 탄소 배출이 거의 없는 친환경 전력 생산 방식입니다.',
  },
  {
    icon: Zap,
    title: 'EV 충전 인프라 연계',
    desc: '주차장 태양광 발전 설비와 전기차 충전 시설을 연계하여 친환경 에너지 기반의 충전 환경을 구축할 수 있습니다.',
  },
  {
    icon: TrendingUp,
    title: '자산 가치 향상',
    desc: '에너지 생산 설비 도입을 통해 건물의 활용 가치와 장기적인 에너지 경쟁력을 높일 수 있습니다.',
  },
];

export default function SolarParkingBenefits() {
  return (
    <Box
      as="section"
      id="benefits"
      px={{ base: 4, md: '6vw' }}
    >
      <Box maxW="1280px" mx="auto">
        <Heading
          as="h2"
          fontSize={{ base: '3xl', md: '4xl', lg: '3rem' }}
          lineHeight={1.2}
          color="gray.800"
          mb={5}
        >
          주차장 태양광의 핵심 장점
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          gap={6}
          mt={10}
        >
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <Box
                key={item.title}
                bg="blue.100/80"
                borderWidth="1px"
                borderColor="blue.100"
                borderRadius="xl"
                p={8}
                position="relative"
                overflow="hidden"
                cursor="default"
                transition="all 0.25s"
                _hover={{
                  transform: 'translateY(-5px)',
                  borderColor: 'blue.500',
                  shadow: 'xl',
                  _before: { opacity: 1 },
                }}
              >
                <Box mb={4} color="blue.500" fontSize="2xl">
                  <Icon size={36} strokeWidth={2} />
                </Box>
                <Text
                  mb={2}
                  fontSize="md"
                  color="gray.800"
                  fontWeight="800"
                  fontFamily="NanumSquareNeo"
                >
                  {item.title}
                </Text>
                <Text 
                  fontSize="sm" 
                  color="gray.700" 
                  lineHeight={1.75}
                  fontWeight="500"
                  fontFamily="pretendard"
                >
                  {item.desc}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
