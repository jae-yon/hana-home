import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';

import elecImg_1_1 from '@/assets/images/elec/elec-1-1.png';
import elecImg_1_2 from '@/assets/images/elec/elec-1-2.png';
import elecImg_1_3 from '@/assets/images/elec/elec-1-3.png';
import elecImg_1_4 from '@/assets/images/elec/elec-1-4.png';
import elecImg_2_1 from '@/assets/images/elec/elec-2-1.png';
import elecImg_2_2 from '@/assets/images/elec/elec-2-2.png';
import elecImg_2_3 from '@/assets/images/elec/elec-2-3.png';
import elecImg_2_4 from '@/assets/images/elec/elec-2-4.png';
import elecImg_3_1 from '@/assets/images/elec/elec-3-1.png';
import elecImg_3_2 from '@/assets/images/elec/elec-3-2.png';
import elecImg_3_3 from '@/assets/images/elec/elec-3-3.png';
import elecImg_3_4 from '@/assets/images/elec/elec-3-4.png';
import elecImg_4_1 from '@/assets/images/elec/elec-4-1.png';
import elecImg_4_2 from '@/assets/images/elec/elec-4-2.png';
import elecImg_4_3 from '@/assets/images/elec/elec-4-3.png';
import elecImg_4_4 from '@/assets/images/elec/elec-4-4.png';
import elecImg_5_1 from '@/assets/images/elec/elec-5-1.png';
import elecImg_5_2 from '@/assets/images/elec/elec-5-2.png';
import elecImg_5_3 from '@/assets/images/elec/elec-5-3.png';
import elecImg_5_4 from '@/assets/images/elec/elec-5-4.png';
import elecImg_6_1 from '@/assets/images/elec/elec-6-1.jpg';
import elecImg_6_2 from '@/assets/images/elec/elec-6-2.jpg';
import elecImg_6_3 from '@/assets/images/elec/elec-6-3.jpg';
import elecImg_6_4 from '@/assets/images/elec/elec-6-4.jpg';
import elecImg_7_1 from '@/assets/images/elec/elec-7-1.jpg';
import elecImg_7_2 from '@/assets/images/elec/elec-7-2.jpg';
import elecImg_7_3 from '@/assets/images/elec/elec-7-3.jpg';
import elecImg_7_4 from '@/assets/images/elec/elec-7-4.jpg';
import elecImg_8_1 from '@/assets/images/elec/elec-8-1.jpg';
import elecImg_8_2 from '@/assets/images/elec/elec-8-2.jpg';
import elecImg_8_3 from '@/assets/images/elec/elec-8-3.jpg';
import elecImg_8_4 from '@/assets/images/elec/elec-8-4.jpg';
import elecImg_9_1 from '@/assets/images/elec/elec-9-1.jpg';
import elecImg_9_2 from '@/assets/images/elec/elec-9-2.jpg';
import elecImg_9_3 from '@/assets/images/elec/elec-9-3.jpg';
import elecImg_9_4 from '@/assets/images/elec/elec-9-4.jpg';
import elecImg_10_1 from '@/assets/images/elec/elec-10-1.jpg';
import elecImg_10_2 from '@/assets/images/elec/elec-10-2.jpg';
import elecImg_10_3 from '@/assets/images/elec/elec-10-3.jpg';
import elecImg_10_4 from '@/assets/images/elec/elec-10-4.jpg';
import elecImg_11_1 from '@/assets/images/elec/elec-11-1.jpg';
import elecImg_11_2 from '@/assets/images/elec/elec-11-2.jpg';
import elecImg_11_3 from '@/assets/images/elec/elec-11-3.jpg';
import elecImg_11_4 from '@/assets/images/elec/elec-11-4.jpg';
import elecImg_12_1 from '@/assets/images/elec/elec-12-1.jpg';
import elecImg_12_2 from '@/assets/images/elec/elec-12-2.jpg';
import elecImg_12_3 from '@/assets/images/elec/elec-12-3.jpg';
import elecImg_12_4 from '@/assets/images/elec/elec-12-4.jpg';
import elecImg_13_1 from '@/assets/images/elec/elec-13-1.jpg';
import elecImg_13_2 from '@/assets/images/elec/elec-13-2.jpg';
import elecImg_13_3 from '@/assets/images/elec/elec-13-3.jpg';
import elecImg_13_4 from '@/assets/images/elec/elec-13-4.jpg';
import elecImg_14_1 from '@/assets/images/elec/elec-14-1.jpg';
import elecImg_14_2 from '@/assets/images/elec/elec-14-2.jpg';
import elecImg_14_3 from '@/assets/images/elec/elec-14-3.jpg';
import elecImg_14_4 from '@/assets/images/elec/elec-14-4.jpg';

const ELECTRICAL_WORK_ITEMS = [
  {
    id: 1,
    isVisible: true,
    title: '공음면 칠암리 중형관정 전기공사 (내부 전등 부착공사)',
    images: [
      {
        image: elecImg_1_1,
        description: '',
      },
      {
        image: elecImg_1_2,
        description: '',
      },
      {
        image: elecImg_1_3,
        description: '',
      },
      {
        image: elecImg_1_4,
        description: '',
      },
    ]
  },
  {
    id: 2,
    isVisible: true,
    title: '고창전통시장 노후전선 정비사업',
    images: [
      {
        image: elecImg_2_1,
        description: '',
      },
      {
        image: elecImg_2_2,
        description: '',
      },
      {
        image: elecImg_2_3,
        description: '',
      },
      {
        image: elecImg_2_4,
        description: '',
      },
    ]
  },
  {
    id: 3,
    isVisible: true,
    title: '재정비 촉진구역 주택재개발 정비사업',
    images: [
      {
        image: elecImg_3_1,
        description: '',
      },
      {
        image: elecImg_3_2,
        description: '',
      },
      {
        image: elecImg_3_3,
        description: '',
      },
      {
        image: elecImg_3_4,
        description: '',
      },
    ]
  },
  {
    id: 4,
    isVisible: true,
    title: '열린관광지 조성사업 전기공사',
    images: [
      {
        image: elecImg_4_1,
        description: '',
      },
      {
        image: elecImg_4_2,
        description: '',
      },
      {
        image: elecImg_4_3,
        description: '',
      },
      {
        image: elecImg_4_4,
        description: '',
      },
    ]
  },
  {
    id: 5,
    isVisible: true,
    title: '고창군청 삼원 게이트볼장',
    images: [
      {
        image: elecImg_5_1,
        description: '',
      },
      {
        image: elecImg_5_2,
        description: '',
      },
      {
        image: elecImg_5_3,
        description: '',
      },
      {
        image: elecImg_5_4,
        description: '',
      },
    ]
  },
  {
    id: 6,
    isVisible: true,
    title: '고창북중 특별교실 리모델링 전기공사',
    images: [
      {
        image: elecImg_6_1,
        description: '',
      },
      {
        image: elecImg_6_2,
        description: '',
      },
      {
        image: elecImg_6_3,
        description: '',
      },
      {
        image: elecImg_6_4,
        description: '',
      },
    ]
  },
  {
    id: 7,
    isVisible: true,
    title: '고창북중 천장 교체 전기공사',
    images: [
      {
        image: elecImg_7_1,
        description: '',
      },
      {
        image: elecImg_7_2,
        description: '',
      },
      {
        image: elecImg_7_3,
        description: '',
      },
      {
        image: elecImg_7_4,
        description: '',
      },
    ]
  },
  {
    id: 8,
    isVisible: true,
    title: '고창군청 부안 게이트볼장',
    images: [
      {
        image: elecImg_8_1,
        description: '',
      },
      {
        image: elecImg_8_2,
        description: '',
      },
      {
        image: elecImg_8_3,
        description: '',
      },
      {
        image: elecImg_8_4,
        description: '',
      },
    ]
  },
  {
    id: 9,
    isVisible: true,
    title: '저소득층 전등교체작업',
    images: [
      {
        image: elecImg_9_1,
        description: '',
      },
      {
        image: elecImg_9_2,
        description: '',
      },
      {
        image: elecImg_9_3,
        description: '',
      },
      {
        image: elecImg_9_4,
        description: '',
      },
    ]
  },
  {
    id: 10,
    isVisible: true,
    title: '고창군청 해리 게이트볼장',
    images: [
      {
        image: elecImg_10_1,
        description: '',
      },
      {
        image: elecImg_10_2,
        description: '',
      },
      {
        image: elecImg_10_3,
        description: '',
      },
      {
        image: elecImg_10_4,
        description: '',
      },
    ]
  },
  {
    id: 11,
    isVisible: true,
    title: '고창군청 아산 게이트볼장',
    images: [
      {
        image: elecImg_11_1,
        description: '',
      },
      {
        image: elecImg_11_2,
        description: '',
      },
      {
        image: elecImg_11_3,
        description: '',
      },
      {
        image: elecImg_11_4,
        description: '',
      },
    ]
  },
  {
    id: 12,
    isVisible: true,
    title: '고창군청 성송 게이트볼장',
    images: [
      {
        image: elecImg_12_1,
        description: '',
      },
      {
        image: elecImg_12_2,
        description: '',
      },
      {
        image: elecImg_12_3,
        description: '',
      },
      {
        image: elecImg_12_4,
        description: '',
      },
    ]
  },
  {
    id: 13,
    isVisible: true,
    title: '고창군청 무장 게이트볼장',
    images: [
      {
        image: elecImg_13_1,
        description: '',
      },
      {
        image: elecImg_13_2,
        description: '',
      },
      {
        image: elecImg_13_3,
        description: '',
      },
      {
        image: elecImg_13_4,
        description: '',
      },
    ]
  },
  {
    id: 14,
    isVisible: true,
    title: '고창군청 대산 게이트볼장',
    images: [
      {
        image: elecImg_14_1,
        description: '',
      },
      {
        image: elecImg_14_2,
        description: '',
      },
      {
        image: elecImg_14_3,
        description: '',
      },
      {
        image: elecImg_14_4,
        description: '',
      },
    ]
  },
]

export default function PortfolioElectrical() {
  return (
    <Flex
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 12 }}
      width="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={{ base: 10, md: 14 }}
    >
      {ELECTRICAL_WORK_ITEMS.map((item) => (
        <Box
          key={item.id}
          width="100%"
          maxW="1024px"
          as="article"
          bg="white"
          overflow="hidden"
          borderRadius="xl"
          borderWidth="1px"
          borderColor="gray.200"
        >
          <Box px={{ base: 5, md: 6 }} pt={{ base: 5, md: 6 }} pb={2}>
            <Heading
              as="h3"
              mb={{ base: 4, md: 6 }}
              fontSize={{ base: 'md', md: 'lg' }}
              lineHeight="1.4"
              color="gray.800"
              fontWeight="medium"
              fontFamily="pretendard"
              letterSpacing="-0.02em"
              borderLeftWidth="4px"
              borderLeftColor="orange.500"
              textAlign="start"
              pl={4}
              py={1}
            >
              {item.title}
            </Heading>
            <Grid
              mb={4}
              templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)' }}
              gap={{ base: 3, md: 4 }}
            >
              {item.images.map((img, index) => (
                <Box key={index} as="figure">
                  <Box
                    position="relative"
                    overflow="hidden"
                    borderRadius="lg"
                    bg="gray.100"
                    aspectRatio="4/3"
                  >
                    <Image
                      src={img.image}
                      alt={img.description}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      transition="transform 0.25s ease"
                      _hover={{ transform: 'scale(1.03)' }}
                    />
                  </Box>
                  {img.description !== '' && (
                    <Text
                      as="figcaption"
                      mt={2}
                      fontSize={{ base: 'xs', md: 'sm' }}
                      color="gray.700"
                      fontFamily="NanumSquareNeo"
                      fontWeight="800"
                      textAlign="center"
                      letterSpacing="-0.01em"
                      lineHeight="1.4"
                      wordBreak="keep-all"
                      overflowWrap="break-word"
                      whiteSpace="normal"
                      textOverflow="ellipsis"
                      maxW="100%"
                      overflow="hidden"
                    >
                      {img.description}
                    </Text>
                  )}
                </Box>
              ))}
            </Grid>
          </Box>
        </Box>
      ))}
    </Flex>
  )
}