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
    title: '토지 이중 활용',
    desc: '기존 주차 기능을 그대로 유지하면서 상부 공간에 발전 설비를 구축, 추가 부지 매입 비용이 전혀 없습니다.',
  },
  {
    icon: Lightbulb,
    title: '전기료 대폭 절감',
    desc: '발전된 전력을 자가소비하거나 한전에 판매(REC)하여 연간 수천만 원 규모의 에너지 비용을 절약할 수 있습니다.',
  },
  {
    icon: Car,
    title: '차량 & 이용자 보호',
    desc: '캐노피 구조가 강한 햇빛, 우박, 눈, 비로부터 차량을 보호하고 이용자의 쾌적한 보행 환경을 제공합니다.',
  },
  {
    icon: Leaf,
    title: '탄소중립 실현',
    desc: 'RE100 목표 달성 및 ESG 경영 지표 개선에 직접 기여하며, 온실가스 배출권 확보에도 활용됩니다.',
  },
  {
    icon: Zap,
    title: 'EV 충전 연계',
    desc: '태양광과 ESS(에너지저장장치)를 EV 충전 인프라와 연결해 저렴하고 친환경적인 전기차 충전 환경을 구현합니다.',
  },
  {
    icon: TrendingUp,
    title: '자산 가치 상승',
    desc: '에너지 자립 시설로 인정받아 건물의 부동산 가치와 임대 매력도를 높이고, 정부 보조금 혜택도 받을 수 있습니다.',
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
          fontSize={{ base: 'xl', md: '2xl', lg: '3rem' }}
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
                  <Icon size={36} strokeWidth={1.5} />
                </Box>
                <Text
                  mb={2}
                  fontSize="md"
                  color="gray.800"
                  fontWeight="bold"
                  fontFamily="NanumSquareNeo"
                >
                  {item.title}
                </Text>
                <Text 
                  fontSize="sm" 
                  color="gray.700" 
                  lineHeight={1.75}
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
