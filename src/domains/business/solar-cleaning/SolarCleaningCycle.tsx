import { Box, Flex, Image, Text } from '@chakra-ui/react';

const SOLAR_CLEANING_CYCLE_IMG_1 = "https://plus.unsplash.com/premium_photo-1742457758281-219f50e7bd31?q=80&w=1280&auto=format&fit=crop";
const SOLAR_CLEANING_CYCLE_IMG_2 = "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1280&auto=format&fit=crop";
const SOLAR_CLEANING_CYCLE_IMG_3 = "https://images.unsplash.com/photo-1721620845374-1cef4ceae9cf?q=80&w=1280&auto=format&fit=crop";

export default function SolarCleaningCycle() {
  return (
    <Box as="section" py={2} mb={24} px={{ base: 4, md: '6vw' }}>
      <Box maxW="1280px" mx="auto" mb={12} textAlign="center">
        <Text as="h2" mb={2} color="blue.500" fontWeight="800" fontFamily="NanumSquareNeo" fontSize={{ base: '12px', sm: '16px' }}>
          Cycle of Solar Cleaning
        </Text>
        <Text as="h2" mb={2} color="gray.800" fontWeight="700" fontSize={{ base: '32px', sm: '32px', md: '48px', lg: '56px' }}>
          태양광 패널 청소 권장 주기
        </Text>
      </Box>
      <Box>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="stretch"
          justify="center"
          gap={8}
        >
          <Box
            bg="gray.100"
            borderRadius="lg"
            p={4}
            boxShadow="md"
            flex="1"
            h="full"
            minW={0}
            display="flex"
            flexDirection="column"
            _hover={{
              transform: 'translateY(-5px)',
              boxShadow: 'lg',
            }}
            transition="all 0.7s cubic-bezier(0.22,1,0.36,1)"
          >
            <Image
              src={SOLAR_CLEANING_CYCLE_IMG_1}
              alt="공장지대"
              width="100%"
              height="240px"
              objectFit="cover"
              borderRadius="lg"
            />
            <Text
              mt={4}
              py={2}
              px={4}
              bg="gray.200"
              fontSize="14px"
              lineHeight="1.5"
              fontWeight="700"
              color="gray.800"
              borderRadius="lg"
              textAlign="center"
              letterSpacing="0.02em"
              fontFamily="NanumSquareNeo"
              textShadow="0 0 10px rgba(0,0,0,0.1)"
            >
              공장지대
            </Text>

            <Box mt={2} display="flex" alignItems="center" justifyContent="center" gap={2}>
              <Text fontSize="12px" color="gray.800" textAlign="center" 
              lineHeight="1.5" letterSpacing="0.02em" w="full" bg="blue.600/10" p={2} borderRadius="lg">
                6개월
              </Text>
              <Text fontSize="12px" color="gray.800" textAlign="center" 
              lineHeight="1.5" letterSpacing="0.02em" w="full" bg="green.600/10" p={2} borderRadius="lg">
                1회 이상
              </Text>
            </Box>

            <Box mt={2} flex="1">
              <Text fontSize="12px" color="gray.700" textAlign="start" fontFamily="NanumSquareNeo"
              lineHeight="1.5" letterSpacing="0.02em" w="full" p={2} fontWeight="700">
                철가루와 기름 오염은 고착되기 쉬워 우천 시에도 잘 씻겨 나가지 않으므로 전문적인 청소가 필요합니다.
              </Text>
            </Box>
          </Box>

          <Box   
            bg="gray.100"
            borderRadius="lg"
            p={4}
            boxShadow="md"
            flex="1"
            h="full"
            minW={0}
            display="flex"
            flexDirection="column"
            _hover={{
              transform: 'translateY(-5px)',
              boxShadow: 'lg',
            }}
            transition="all 0.7s cubic-bezier(0.22,1,0.36,1)"
          >
            <Image
              src={SOLAR_CLEANING_CYCLE_IMG_2}
              alt="축사인근지역"
              width="100%"
              height="240px"
              objectFit="cover"
              borderRadius="lg"
            />
            <Text
              mt={4}
              py={2}
              px={4}
              bg="gray.200"
              fontSize="14px"
              lineHeight="1.5"
              fontWeight="700"
              color="gray.800"
              borderRadius="lg"
              textAlign="center"
              letterSpacing="0.02em"
              fontFamily="NanumSquareNeo"
              textShadow="0 0 10px rgba(0,0,0,0.1)"
            >
              축사인근지역
            </Text>

            <Box mt={2} display="flex" alignItems="center" justifyContent="center" gap={2}>
              <Text fontSize="12px" color="gray.800" textAlign="center" 
              lineHeight="1.5" letterSpacing="0.02em" w="full" bg="blue.600/10" p={2} borderRadius="lg">
                6개월
              </Text>
              <Text fontSize="12px" color="gray.800" textAlign="center" 
              lineHeight="1.5" letterSpacing="0.02em" w="full" bg="green.600/10" p={2} borderRadius="lg">
                1회 이상
              </Text>
            </Box>

            <Box mt={2} flex="1">
              <Text fontSize="12px" color="gray.700" textAlign="start" fontFamily="NanumSquareNeo"
              lineHeight="1.5" letterSpacing="0.02em" w="full" p={2} fontWeight="700">
                조류 배설물은 빠르게 고착되며, 고착된 경우 약품이나 물리적인 힘을 사용해 제거하게 됩니다.
              </Text>
            </Box>
          </Box>

          <Box
            bg="gray.100"
            borderRadius="lg"
            p={4}
            boxShadow="md"
            flex="1"
            h="full"
            minW={0}
            display="flex"
            flexDirection="column"
            _hover={{
              transform: 'translateY(-5px)',
              boxShadow: 'lg',
            }}
            transition="all 0.7s cubic-bezier(0.22,1,0.36,1)"
          >
            <Image
              src={SOLAR_CLEANING_CYCLE_IMG_3}
              alt="주택밀집지역"
              width="100%"
              height="240px"
              objectFit="cover"
              borderRadius="lg"
            />
            <Text
              mt={4}
              py={2}
              px={4}
              bg="gray.200"
              fontSize="14px"
              lineHeight="1.5"
              fontWeight="700"
              color="gray.800"
              borderRadius="lg"
              textAlign="center"
              letterSpacing="0.02em"
              fontFamily="NanumSquareNeo"
              textShadow="0 0 10px rgba(0,0,0,0.1)"
            >
              주택밀집지역
            </Text>

            <Box mt={2} display="flex" alignItems="center" justifyContent="center" gap={2}>
              <Text fontSize="12px" color="gray.800" textAlign="center" 
              lineHeight="1.5" letterSpacing="0.02em" w="full" bg="blue.600/10" p={2} borderRadius="lg">
                2년
              </Text>
              <Text fontSize="12px" color="gray.800" textAlign="center" 
              lineHeight="1.5" letterSpacing="0.02em" w="full" bg="green.600/10" p={2} borderRadius="lg">
                1회
              </Text>
            </Box>

            <Box mt={2} flex="1">
              <Text fontSize="12px" color="gray.700" textAlign="start" fontFamily="NanumSquareNeo"
              lineHeight="1.5" letterSpacing="0.02em" w="full" p={2} fontWeight="700">
                자연적으로 쌓이는 먼지는 비교적 가벼운 오염으로, 우천 시 빗물에 의해 자연스럽게 세척될 수 있습니다.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}