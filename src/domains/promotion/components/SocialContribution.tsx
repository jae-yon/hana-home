import { HeartHandshake } from 'lucide-react';

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Image,
} from "@chakra-ui/react";

import awardsImage_01 from '@/assets/images/promotion/promotion_img_01.jpg';
import awardsImage_02 from '@/assets/images/promotion/promotion_img_02.jpg';
import awardsImage_03 from '@/assets/images/promotion/promotion_img_03.jpg';
import promotion_bg from '@/assets/images/promotion/promotion_img_04.jpg';

const awards = [
  {
    image: awardsImage_02,
    title: "경기도의회의장 표창장",
    date: "2025년 9월 25일",
  },
  {
    image: awardsImage_01,
    title: "경기도지사 표창장",
    date: "2025년 10월 2일",
  },
  {
    image: awardsImage_03,
    title: "국회의원 표창장",
    date: "2025년 10월 6일",
  },
];

export default function SocialContribution() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        as="section"
        position="relative"
        minH="50vh"
        display="flex"
        alignItems="center"
        overflow="hidden"
        bg="transparent"
      >
        {/* background image */}
        <Box
          position="absolute"
          inset={0}
          backgroundImage={`url(${promotion_bg})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          // borderRadius={{ base: '0', md: '2xl' }}
        />

        {/* backdrop */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={1}
          background="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.5) 100%)"
          // borderRadius={{ base: '0', md: '2xl' }}
        />

        <HStack 
          position="absolute"
          top={5}
          right={5}
          zIndex={10}
          justifyContent="center"
          alignItems="center"
          fontFamily="NanumSquareNeo"
        >
          <Box w={100} h={0.5} bg="orange.500" />
          <Text fontSize="sm" fontWeight="800" color="orange.500" letterSpacing="widest" textTransform="uppercase">
            Social Contribution
          </Text>
        </HStack>

        {/* <HStack 
          px={4}
          py={2}
          right={5}
          bottom={5}
          zIndex={10}
          bg="orange.500"
          borderRadius="full"
          position="absolute"
          alignItems="center"
          justifyContent="center"
          fontFamily="NanumSquareNeo"
        >
          <Text fontSize="xs" fontWeight="800" color="white" letterSpacing="widest" textTransform="uppercase">
            부천아트센터
          </Text>
        </HStack> */}

        <Box
          position="relative"
          zIndex={10}
          maxW="1200px"
          margin="0 auto"
          px={{ base: 4, md: '6vw' }}
          width="100%"
        >
          <Heading
            mb={4}
            color="white"
            fontWeight="800"
            lineHeight="1.5"
            fontFamily="NanumSquareNeo"
            fontSize={{ base: '2xl', lg: '4xl'}}
          >
            나눔과 봉사로
            <br />
            함께 성장하는
            <br />
            <Text as="span" color="orange.500" fontSize={{ base: '5xl', lg: '6xl'}}>하나솔루션</Text>
          </Heading>

          <Text color="whiteAlpha.800" lineHeight="1.9" maxW="420px" fontSize="md" fontFamily="pretendard">
            지역사회와 함께하는 기업 철학을 바탕으로, 자원봉사와 나눔을 통해
            더 나은 세상을 만들어가고 있습니다.
          </Text>
        </Box>
      </Box>

      {/* Awards Section */}
      <Box bg="white" py={8}>
        <Container maxW="6xl">
          <VStack gap={3} textAlign="center" mb={12}>
            <Badge
              px={4}
              py={2}
              borderRadius="full"
              fontSize="xs"
              letterSpacing="widest"
              fontWeight="900"
              fontFamily="NanumSquareNeo"
              textTransform="uppercase"
              color="orange.500"
              border="1px solid"
              bg="orange.50"
              borderColor="orange.100"
              boxShadow="0 4px 24px rgba(252, 143, 0, 0.68)"
            >
              Awards & Recognition
            </Badge>
          </VStack>

          {/* Timeline */}
          <Box maxW="600px" mx="auto" pt={12}>
            {awards.map((award, i) => (
              <TimelineItem
                key={i}
                {...award}
                isLast={i === awards.length - 1}
              />
            ))}
          </Box>
        </Container>
      </Box>
      
      <Box px={{ base: 4, md: '10vw' }}>
        <VStack textAlign="center" mb={12}>
          <Badge
            px={4}
            py={2}
            borderRadius="full"
            fontSize="xs"
            letterSpacing="widest"
            fontWeight="900"
            fontFamily="NanumSquareNeo"
            textTransform="uppercase"
            color="orange.500"
            border="1px solid"
            bg="orange.50"
            borderColor="orange.100"
            boxShadow="0 4px 24px rgba(252, 143, 0, 0.68)"
          >
            Donation & Contribution
          </Badge>
        </VStack>

        <Box 
          mb={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box w={100} h={0.5} bg="orange.500" boxShadow="0 0 10px rgba(252, 143, 0, 0.93)" />
          <Text
            p={4}
            textAlign="end"
            fontWeight="400"
            fontSize={{ base: '18px' }}
            color="orange.500"
            textShadow="0 0 3px rgba(252, 143, 0, 0.93)"
          >
            로타리클럽 봉사의인(한국장학재단 장학금)
          </Text>
        </Box>

        <Box 
          mb={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            p={4}
            textAlign="start"
            fontWeight="400"
            fontSize={{ base: '18px' }}
            color="orange.500"
            textShadow="0 0 3px rgba(252, 143, 0, 0.93)"
          >
            로타리클럽 준PHF(세계로타리재단 기부금)
          </Text>
          <Box w={100} h={0.5} bg="orange.500" boxShadow="0 0 10px rgba(252, 143, 0, 0.93)" />
        </Box>
      </Box>

      {/* Footer CTA */}
      <Box
        bg="gray.800"
        py={16}
      >
        <Container maxW="6xl">
          <VStack gap={4} textAlign="center">
            <Box
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={4}
              borderRadius="full"
              border="1px solid"
              borderColor="orange.500"
              bg="orange.500"
              boxShadow="0 0 10px rgba(252, 143, 0, 0.93)"
            >
              <HeartHandshake size={36} strokeWidth={1.5} />
            </Box>
            <Heading size="lg" color="white" fontWeight="800">
              함께 만드는 더 나은 세상
            </Heading>
            <Text color="gray.400" maxW="400px" lineHeight="1.8" fontSize="sm" fontFamily="pretendard">
              ㈜하나솔루션은 앞으로도 지역사회와 함께 성장하며<br />
              나눔의 가치를 실천해 나가겠습니다.
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}

const TimelineItem = ({ image, title, date, isLast }: { image: string, title: string, date: string, isLast: boolean }) => (
  <HStack align="start" gap={4} w="100%" mb={12}>
    {/* Left: Date */}
    <Box w="160px" flexShrink={0} textAlign="right" pr={6}>
      <Text fontSize="sm" color="orange.500" fontWeight="500" letterSpacing="wide" fontFamily="pretendard">
        {date}
      </Text>
    </Box>

    {/* Center: Line + Dot */}
    <VStack gap={0} align="center" flexShrink={0}>
      <Box
        w={3}
        h={3}
        borderRadius="full"
        bg="orange.400"
        border="3px solid"
        borderColor="orange.100"
        boxShadow="0 0 0 3px rgba(237,137,54,0.15)"
        flexShrink={0}
        mt={1}
      />
      {!isLast && (
        <Box
          w="2px"
          flex={1}
          minH="48px"
          bgGradient="linear(to-b, orange.300, orange.100)"
          mt={1}
        />
      )}
    </VStack>

    {/* Right: Content */}
    <Box
      flex={1}
      pl={6}
      pb={isLast ? 0 : 8}
    >
      <Box
        bg="white"
        borderRadius="xl"
        px={5}
        py={4}
        border="1px solid"
        borderColor="orange.100"
        boxShadow="0 2px 12px rgba(0,0,0,0.05)"
        transition="all 0.25s"
        _hover={{
          borderColor: "orange.300",
          boxShadow: "0 6px 24px rgba(237,137,54,0.15)",
          transform: "translateX(4px)",
        }}
      >
        <Box
          mb={4}
          borderRadius="xl"
          display="flex"
          overflow="hidden"
          alignItems="center"
          justifyContent="center"
          border="1px solid"
          borderColor="gray.100"
          boxShadow="0 2px 12px rgba(0,0,0,0.05)"
        >
          {image && (
            <Image src={image} alt={title} objectFit="contain" maxH="100%" maxW="100%" />
          )}
        </Box>
        <Text fontWeight="600" color="gray.700" fontSize="md" textAlign="center" fontFamily="pretendard">
          {title}
        </Text>
      </Box>
    </Box>
  </HStack>
);