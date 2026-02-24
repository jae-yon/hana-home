import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { Portfolio } from '@/types/common';

interface PortfolioContensProps {
  isDesktop: boolean;
  items: Portfolio[];
}

export default function PortfolioContents(props: PortfolioContensProps) {
  const { isDesktop, items } = props;
  
  return (
    <Flex 
      width="100%"
      direction="column" 
      alignItems="center"
      justifyContent="center"
      px={isDesktop ? 12 : 0}
    >
      {items.map((item) => (
        <Box
          padding={8}
          gapY={4}
          gapX={12}
          key={item.id}
          w="100%"
          display="flex"
          flexDirection={isDesktop ? 'row' : 'column'}
          justifyContent={isDesktop ? 'center' : 'flex-start'}
        >
          {/* 이미지 영역 */}
          <Box
            my={4}
            overflow="hidden"
            position="relative"
            w={{ base: '100%', md: '100%', lg: '50%', xl: '40%' }}
            h={{ base: '250px', sm: '300px', md: '400px' }}
            borderRadius="lg"
            style={{
              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
            }}
          >
            <Box
              inset="0"
              bgSize="cover"
              bgPos="center"
              position="absolute"
              bgImage={`url(${item.image})`}
            />
          </Box>
          
          {/* 설명 영역 */}
          <Box
            mb={4}
            bg="white"
            display="flex"
            overflow=""
            flexDirection="column"
            justifyContent="center"
            fontFamily="Pretendard"
            w={isDesktop ? '360px' : '100%'}
          >
            <Box
              divideY="1px"
              divideColor="gray.200"
              borderWidth="1px"
              borderTopColor="transparent"
              borderLeftColor="transparent"
              borderRightColor="transparent"
              borderBottomColor="gray.200"
            >
              <Heading
                ml={1}
                mb={4}
                w="100%"
                fontSize="lg"
                color="gray.800"
                textAlign="start"
                fontWeight="medium"
              >
                {item.title}
              </Heading>
              <Box display="flex" flexDirection="row" gap={4}>
                <Text fontWeight="medium" fontSize="sm" color="gray.900" w="30%" py={4} bg="gray.100" textAlign="center">타입</Text>
                <Text py={4} fontSize="sm" color="gray.700">{item.type === 'Residential' ? '가정용' : item.type === 'PPA' ? 'PPA' : 'RPS'}</Text>
              </Box>
              <Box display="flex" flexDirection="row" gap={4}>
                <Text fontWeight="medium" fontSize="sm" color="gray.900" w="30%" py={4} bg="gray.100" textAlign="center">모듈</Text>
                <Text py={4} fontSize="sm" color="gray.700">{item.module}</Text>
              </Box>
              <Box display="flex" flexDirection="row" gap={4}>
                <Text fontWeight="medium" fontSize="sm" color="gray.900" w="30%" py={4} bg="gray.100" textAlign="center">인버터</Text>
                <Text py={4} fontSize="sm" color="gray.700">{item.inverter}</Text>
              </Box>
              <Box display="flex" flexDirection="row" gap={4}>
                <Text fontWeight="medium" fontSize="sm" color="gray.900" w="30%" py={4} bg="gray.100" textAlign="center">전력용량</Text>
                <Text py={4} fontSize="sm" color="gray.700">{item.capacity}</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Flex>
  );
}