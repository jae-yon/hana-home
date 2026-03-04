import { BarChart2, Leaf, Shield } from 'lucide-react';

import { Badge, Text, Box, VStack, HStack, Flex, Image } from '@chakra-ui/react'

import rps_diagram from '@/assets/images/3d/수익구조_다이어그램.png'

export default function RpsContents() {
  return (
    <Box position="relative" mb={12}>
      <Box
        p={4}
        my={24}
      >
        <Badge 
          px={8} 
          py={4}
          mb={8} 
          fontSize={{ base: '20px', md: '28px', lg: '36px' }} 
          fontWeight="700" 
          letterSpacing="wide" 
          color="orange.600" 
          bg="orange.100/80" 
          borderRadius="full"
        >
          RPS 제도란?
        </Badge>

        <Text
          fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}
          color="gray.800"
          lineHeight="1.75"
          fontWeight="700"
          textAlign="start"
          wordBreak="keep-all"
          letterSpacing="0.02em"
          overflowWrap="break-word"
          fontFamily="NanumSquareNeo"
        >
          RPS(Renewable Portfolio Standard)는 500MW 이상 대형 발전사업자에게 총 발전량의 일정 비율을
          신재생에너지로 공급하도록 법으로 의무화한 제도입니다.
        </Text>

        <Text
          fontSize={{ base: 'xs', md: 'lg', lg: 'xl' }} 
          color="gray.800"
          lineHeight="1.75"
          fontWeight="700"
          textAlign="start"
          wordBreak="keep-all"
          letterSpacing="0.02em"
          overflowWrap="break-word"
          fontFamily="NanumSquareNeo"
        >
          RPS 의무를 이행하려면 <Text as="span" color="orange.500" fontWeight="900">REC(공급인증서)</Text>를
          구매해야 하며, 태양광 발전사업자인 여러분이 바로 이 REC를 판매할 수 있습니다.
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
          3단계로 완성되는{" "} 이중 수익 구조
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
              법적으로 보장된 수요
            </Text>
            <Text fontSize="sm" color="whiteAlpha.900" fontWeight="600" lineHeight={1.7}>
              대형 발전사는 반드시 REC를 구매해야 하므로 안정적인 판매처가 법으로 보장됩니다.
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
            <BarChart2 size={24} strokeWidth={2.5} color="white" />
          </Flex>
          <Box fontFamily="NanumSquareNeo">
            <Text fontWeight="700" mb={1} fontSize="md" color="white">
              전력 판매 외 추가 수익
            </Text>
            <Text fontSize="sm" color="whiteAlpha.900" fontWeight="600" lineHeight={1.7}>
              전기 판매 수익에 더해 REC 판매 수익이 추가로 발생하여 투자 수익률이 크게 향상됩니다.
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
            <Leaf size={24} strokeWidth={2.5} color="white" />
          </Flex>
          <Box fontFamily="NanumSquareNeo">
            <Text fontWeight="700" mb={1} fontSize="md" color="white">
              친환경 가중치 혜택
            </Text>
            <Text fontSize="sm" color="whiteAlpha.900" fontWeight="600" lineHeight={1.7}>
              태양광 등 에너지원별로 가중치가 부여되어 동일 발전량으로 더 많은 REC를 확보할 수 있습니다.
            </Text>
          </Box>
        </HStack>
        <Box
          p={12}
          backgroundColor="gray.700"
          borderRadius="xl"
        >
          <Image src={rps_diagram} alt="RPS 수익구조 다이어그램" width="100%" height="auto" />
        </Box>
      </VStack>
    </Box>
  );
}