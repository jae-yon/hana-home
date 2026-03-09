import { HandCoins, Percent, Shield } from 'lucide-react';

import { Badge, Text, Box, VStack, HStack, Flex, Image, GridItem, Grid } from '@chakra-ui/react'

import rps_diagram from '@/assets/images/3d/수익구조_다이어그램.png'

const revenueCards = [
  {
    title: 'SMP',
    body: 'System Marginal Price : \n전력시장에서 결정되는 전력 도매가격으로 발전사업자는 생산한 전력을 판매하여 SMP 수익을 얻습니다.',
  },
  {
    title: 'REC',
    body: 'Renewable Energy Certificate : \n 신재생에너지로 생산된 전력을 증명하는 인증서로 발전량에 따라 발급되며 의무공급자와 거래됩니다.',
  },
  {
    title: 'REC 가중치',
    body: '설치 유형 및 발전방식에 따른 REC(공급인증서)가중치 (0.7~1.5)',
  },
] as const;

export default function RpsContents() {
  return (
    <Box position="relative" mb={12}>
      <Box
        p={4}
        my={24}
      >
        <Badge 
          px={12} 
          py={6}
          mb={8} 
          fontSize={{ base: '20px', md: '28px' }} 
          fontWeight="800" 
          color="orange.600" 
          bg="orange.100/80" 
          borderRadius="full"
          fontFamily="NanumSquareNeo"
        >
          RPS 제도란?
        </Badge>

        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="600"  
          color="gray.800"
          lineHeight="1.75"
          textAlign="start"
          letterSpacing="0.02em"
          fontFamily="NanumSquareNeo"
        >
          RPS(Renewable Portfolio Standard)는 일정 규모 이상의 발전사업자가 총 발전량의 일정 비율을 신재생에너지로 공급하도록 의무화한 제도입니다.
        </Text>

        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="600" 
          color="gray.800"
          lineHeight="1.75"
          textAlign="start"
          letterSpacing="0.02em"
          fontFamily="NanumSquareNeo"
        >
          의무공급자는 해당 의무를 이행하기 위해 <Text as="span" color="orange.500" fontWeight="900">REC(신재생에너지 공급인증서)</Text>를
          구매해야 하며, 태양광 발전사업자는 발전을 통해 발급된 REC를 판매하여 추가 수익을 얻을 수 있습니다.
        </Text>
      </Box>

      <VStack
        p={4}
        my={24} 
        gap={4} 
        align="stretch"
      >
        <Text
          mb={4}
          fontWeight="800"
          color="gray.800"
          textAlign="center"
          letterSpacing="-0.04em"
          fontFamily="pretendard"
          fontSize={{ base: "24px", md: "32px", lg: "48px" }}
        >
          SMP와 REC로 형성되는 발전 수익 구조
        </Text>

        <HStack
          gap={5}
          p={5}
          bg="gray.700"
          borderRadius="xl"
          border="1px solid gray.600"
          _hover={{ boxShadow: "0 8px 24px rgba(0,0,0,0.13)", backgroundColor: "gray.600" }}
          align="flex-start"
          boxShadow="0 2px 12px rgba(0,0,0,0.07)"
        >
          <Flex
            w={12}
            h={12}
            borderRadius="xl"
            bg="linear-gradient(135deg, #f59e0b, #ef4444)"
            align="center"
            justify="center"
            flexShrink={0}
          >
            <Shield size={24} strokeWidth={2.5} color="white" />
          </Flex>
          <Box fontFamily="NanumSquareNeo">
            <Text fontWeight="700" mb={1} fontSize="md" color="white">
              법적으로 형성되는 REC 수요
            </Text>
            <Text fontSize="sm" color="whiteAlpha.900" fontWeight="600" lineHeight={1.7}>
              대형 발전사는 신재생에너지 공급 의무를 이행하기 위해 REC를 구매해야 하며 REC 거래 수요가 형성됩니다.
            </Text>
          </Box>
        </HStack>
        <HStack
          gap={5}
          p={5}
          bg="gray.700"
          borderRadius="xl"
          border="1px solid gray.600"
          _hover={{ boxShadow: "0 8px 24px rgba(0,0,0,0.13)", backgroundColor: "gray.600" }}
          align="flex-start"
          boxShadow="0 2px 12px rgba(0,0,0,0.07)"
        >
          <Flex
            w={12}
            h={12}
            borderRadius="xl"
            bg="linear-gradient(135deg, #8b5cf6, #06b6d4)"
            align="center"
            justify="center"
            flexShrink={0}
          >
            <HandCoins size={24} strokeWidth={2.5} color="white" />
          </Flex>
          <Box fontFamily="NanumSquareNeo">
            <Text fontWeight="700" mb={1} fontSize="md" color="white">
              전력 판매 외 추가 수익
            </Text>
            <Text fontSize="sm" color="whiteAlpha.900" fontWeight="600" lineHeight={1.7}>
              전력 판매(SMP) 수익과 함께 REC 거래를 통한 추가 수익이 발생합니다.
            </Text>
          </Box>
        </HStack>
        <HStack
          gap={5}
          p={5}
          bg="gray.700"
          borderRadius="xl"
          border="1px solid gray.600"
          _hover={{ boxShadow: "0 8px 24px rgba(0,0,0,0.13)", backgroundColor: "gray.600" }}
          align="flex-start"
          boxShadow="0 2px 12px rgba(0,0,0,0.07)"
        >
          <Flex
            w={12}
            h={12}
            borderRadius="xl"
            bg="linear-gradient(135deg, #10b981, #0ea5e9)"
            align="center"
            justify="center"
            flexShrink={0}
          >
            <Percent size={24} strokeWidth={2.5} color="white" />
          </Flex>
          <Box fontFamily="NanumSquareNeo">
            <Text fontWeight="700" mb={1} fontSize="md" color="white">
              REC 가중치 제도
            </Text>
            <Text fontSize="sm" color="whiteAlpha.900" fontWeight="600" lineHeight={1.7}>
              설치 유형 및 발전 방식에 따라 REC 가중치가 적용될 수 있습니다.
            </Text>
          </Box>
        </HStack>
        
        {/* ----- RPS 수익구조 다이어그램 ----- */}
        <Box
          p={12}
          backgroundColor="gray.700"
          borderRadius="xl"
        >
          <Image src={rps_diagram} alt="RPS 수익구조 다이어그램" width="100%" height="auto" />
        </Box>

        {/* 태양광 수익 구성 (SMP, REC, REC 가중치) */}
        <Box
          as="section"
          bg="gray.700"
          position="relative"
          overflow="hidden"
          py={16}
          px={{ base: 4, md: 16 }}
          borderRadius="2xl"
        >
          <Box maxW="1200px" margin="0 auto" position="relative" zIndex={1}>
            <Text
              fontFamily="pretendard"
              fontSize={{ base: 'lg', md: 'xl' }}
              fontWeight="560"
              color="white"
              maxW="400px"
              lineHeight={1.8}
              mb={4}
            >
              태양광 발전 수익은 <Text as="span" color="orange.500" fontWeight="600">전력 판매(SMP)</Text> 수익과{' '}
              <Text as="span" color="orange.500" fontWeight="600">
                REC(공급인증서) 거래 수익
              </Text>
              {' '}두 가지로 구성됩니다.
            </Text>

            <Grid
              templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }}
              gap={4}
              mt={4}
            >
              {revenueCards.map((card) => (
                <GridItem key={card.title} display="flex">
                  <Box
                    bg="gray.600"
                    p={{ base: 6, md: 8 }}
                    position="relative"
                    overflow="hidden"
                    borderRadius="xl"
                    flex={1}
                    display="flex"
                    flexDirection="column"
                    transition="background 0.3s, transform 0.3s ease"
                    _hover={{
                      bg: "whiteAlpha.100",
                      transform: "scale(1.03)",
                    }}
                  >
                    <Text
                      fontFamily="NanumSquareNeo"
                      fontSize={{ base: 'xl', md: '3xl' }}
                      fontWeight={700}
                      color="orange.500/80"
                      mb={3}
                      lineHeight={1.4}
                    >
                      {card.title}
                    </Text>
                    <Text
                      fontFamily="NanumSquareNeo"
                      fontSize="sm"
                      color="white"
                      lineHeight={1.7}
                      flex={1}
                      whiteSpace="pre-line"
                    >
                      {card.body}
                    </Text>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Box>

          <Text
            mt={4}
            textAlign="center"
            fontSize={{ base: 'sm', md: 'lg' }}
            color="gray.200"
            fontWeight="500"
            fontFamily="pretendard"
          >
            수익구조 : 발전 수익 = SMP 수익 + REC 거래 수익
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}