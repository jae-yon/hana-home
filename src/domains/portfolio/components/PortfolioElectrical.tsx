import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';

import elecImg_1_1 from '@/assets/images/elec/elec-1-1.png';
import elecImg_1_2 from '@/assets/images/elec/elec-1-2.png';
import elecImg_1_3 from '@/assets/images/elec/elec-1-3.png';
import elecImg_1_4 from '@/assets/images/elec/elec-1-4.png';
import elecImg_2_1 from '@/assets/images/elec/elec-2-1.png';
import elecImg_2_2 from '@/assets/images/elec/elec-2-2.png';
import elecImg_2_3 from '@/assets/images/elec/elec-2-3.png';
import elecImg_2_4 from '@/assets/images/elec/elec-2-4.png';

const ELECTRICAL_WORK_ITEMS = [
  {
    id: 1,
    isVisible: true,
    title: '공음면 칠암리 중형관정 전기공사 (내부 전등 부착공사)',
    images: [
      {
        image: elecImg_1_1,
        description: '내부 전등 부착공사',
      },
      {
        image: elecImg_1_2,
        description: '내부 전등 부착공사',
      },
      {
        image: elecImg_1_3,
        description: '내부 전등 부착공사',
      },
      {
        image: elecImg_1_4,
        description: '내부 전등 부착공사',
      },
    ]
  },
  {
    id: 1,
    isVisible: true,
    title: '고창전통시장 노후전선 정비사업',
    images: [
      {
        image: elecImg_2_1,
        description: '내진보강공사에 따른 전선정리 공사 중',
      },
      {
        image: elecImg_2_2,
        description: '내진보강공사에 따른 전선정리 공사 후',
      },
      {
        image: elecImg_2_3,
        description: '내진보강공사에 따른 전선정리 공사 후',
      },
      {
        image: elecImg_2_4,
        description: '내진보강공사에 따른 전선정리 공사 중',
      },
    ]
  }
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
      gap={12}
    >
      {ELECTRICAL_WORK_ITEMS.map((item) => (
        <Box 
          key={item.id}
          width="100%"
          maxW="720px"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading 
            mb={4}
            fontSize="24px"
            lineHeight="1.2"
            color="gray.800"
            fontWeight="bold"
            fontFamily="Pretendard"
            letterSpacing="-0.01em"
          >
            {item.title}
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {item.images.map((image, index) => (
              <Box key={index}>
                <Image src={image.image} alt={image.description} borderRadius="md" />
                <Text fontSize="12px" color="gray.900" fontFamily="NanumSquareNeo" textAlign="center" fontWeight="bold" lineHeight="1.2" letterSpacing="-0.01em" mt={2}>
                  {image.description}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      ))}
    </Flex>
  )
}