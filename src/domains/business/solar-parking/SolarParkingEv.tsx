import { Box, Text, Heading, Grid, GridItem, Image } from '@chakra-ui/react';
import { Battery, Zap, Smartphone } from 'lucide-react';

const ev_img =
  'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80';

const features = [
  {
    icon: Battery,
    title: 'ESS 에너지 저장',
    desc: '잉여 전력을 리튬 배터리에 저장해 365일 안정적으로 공급',
  },
  {
    icon: Zap,
    title: '급속 · 완속 충전기 연계',
    desc: '7kW ~ 150kW 충전기와 연결, 다양한 전기차 모델 지원',
  },
  {
    icon: Smartphone,
    title: '스마트 에너지 모니터링',
    desc: '모바일 앱으로 발전량, 충전량, 절감액을 실시간 확인',
  },
];

export default function SolarParkingEv() {
  return (
    <Box
      as="section"
      bg="gray.700"
      position="relative"
      overflow="hidden"
      py={20}
      px={{ base: 4, md: '6vw' }}
    >
      <Box maxW="1280px" mx="auto">
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          gap={{ base: 8, md: '5vw' }}
          alignItems="center"
        >
          <GridItem>
            <Text
              fontSize="xs"
              letterSpacing="0.24em"
              textTransform="uppercase"
              color="orange.500"
              mb={2}
            >
              EV Integration
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: 'xl', md: '2xl', lg: '3rem' }}
              lineHeight={1.2}
              color="white"
              mb={5}
            >
              전기차 충전과
              <br />
              완벽한 연계
            </Heading>
            <Text color="gray.400" fontSize="md" maxW="560px" mb={8}>
              낮 시간대에 생산한 태양광 전력으로 전기차를 직접 충전하고, 남는
              전력은 ESS에 저장해 심야에도 사용합니다.
            </Text>
            <Box display="flex" flexDirection="column" gap={5}>
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <Box key={item.title} display="flex" alignItems="flex-start" gap={4}>
                    <Box
                      w="40px"
                      h="40px"
                      flexShrink={0}
                      borderRadius="lg"
                      bg="orange.500"
                      bgClip="padding-box"
                      borderWidth="1px"
                      borderColor="orange.400"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="white"
                    >
                      <Icon size={18} />
                    </Box>
                    <Box>
                      <Text fontWeight={700} fontSize="sm" color="white" mb={0.5} fontFamily="NanumSquareNeo">
                        {item.title}
                      </Text>
                      <Text fontSize="sm" color="gray.400" fontFamily="pretendard">
                        {item.desc}
                      </Text>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </GridItem>
          <GridItem>
            <Box
              position="relative"
              borderRadius="xl"
              overflow="hidden"
              aspectRatio={4 / 3}
            >
              <Image
                src={ev_img}
                width="100%"
                height="100%"
                objectFit="cover"
                loading="lazy"
              />
              <Box
                position="absolute"
                bottom={5}
                left={5}
                bg="orange.600"
                color="white"
                fontSize="xs"
                fontWeight={700}
                letterSpacing="0.1em"
                py={1.5}
                px={3.5}
                borderRadius="md"
                fontFamily="NanumSquareNeo"
              >
                EV + SOLAR
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
