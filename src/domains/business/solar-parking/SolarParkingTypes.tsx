import { Box, Text, Heading, SimpleGrid, Image } from '@chakra-ui/react';

const types = [
  {
    img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=75',
    num: '01',
    title: '독립 캐노피형',
    desc: '별도의 철골 구조물 위에 패널을 설치. 신설 주차장에 최적이며 디자인 자유도가 높습니다.',
  },
  {
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=75',
    num: '02',
    title: '옥상 설치형',
    desc: '기존 주차 건물 옥상을 그대로 활용. 구조 보강만으로 설치 가능해 초기 비용을 낮춥니다.',
  },
];

export default function SolarParkingTypes() {
  return (
    <Box
      as="section"
      bg="blue.800/80"
      py={20}
      px={{ base: 4, md: '6vw' }}
    >
      <Box maxW="1280px" mx="auto">
        <Text
          fontSize="xs"
          letterSpacing="0.24em"
          textTransform="uppercase"
          color="orange.500"
          mb={2}
        >
          Product Types
        </Text>
        <Heading
          as="h2"
          fontSize={{ base: 'xl', md: '2xl', lg: '3rem' }}
          lineHeight={1.2}
          color="white"
          mb={10}
        >
          설치 유형
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt={10}>
          {types.map((item) => (
            <Box
              key={item.num}
              borderRadius="2xl"
              overflow="hidden"
              position="relative"
              aspectRatio={3 / 4}
            >
              <Image
                src={item.img}
                alt={item.title}
                width="100%"
                height="100%"
                objectFit="cover"
                loading="lazy"
                _hover={{ transform: 'scale(1.06)' }}
                transition="transform 0.5s ease"
              />
              <Box
                position="absolute"
                inset={0}
                bgGradient="to-t"
                gradientFrom="blackAlpha.900"
                gradientTo="transparent"
                gradientVia="transparent"
                opacity={0.92}
                pt="45%"
              />
              <Box
                position="absolute"
                inset={0}
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                p={8}
              >
                <Text
                  fontSize="3xl"
                  fontWeight="bold"
                  color="blue.500"
                  opacity={0.9}
                  lineHeight={1}
                  mb={1}
                >
                  {item.num}
                </Text>
                <Text fontWeight="bold" fontSize="lg" color="white" mb={2}>
                  {item.title}
                </Text>
                <Text fontSize="sm" color="gray.400" lineHeight={1.65}>
                  {item.desc}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
