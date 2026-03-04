import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { Box, Heading, Text } from '@chakra-ui/react';

const rps_bg = "https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1280&q=90";

export default function RpsHeader() {
  const ref = useRef(null);
  const isView = useInView(ref);
  
  return (
    <Box
      p={8}
      width="100%"
      position="relative"
      backgroundImage={`url(${rps_bg})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      borderRadius={{ base: "0", md: "2xl" }}
      mb={12}
      ref={ref}
      opacity={isView ? 1 : 0}
      transform={isView ? "translateY(0)" : "translateY(30px)"}
      transition="all 0.7s ease-in-out"
    >
      {/* backdrop */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        background="linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.5) 100%)"
        borderRadius={{ base: '0', md: '2xl' }}
      />

      <Heading
        as="h1"
        fontWeight="900"
        lineHeight={1.1}
        mt={8}
        mb={12}
        ref={ref}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateX(0)" : "translateX(-30px)"}
        transition="all 1s ease-in-out"
      >
        <Text
          as="span"
          color="white"
          display="block"
          fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
        >
          태양광 하나로
        </Text>
        <Text 
          as="span" 
          color="white" 
          display="block"
          fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }} 
        >
          두 배의 수익을 
        </Text>
      </Heading>

      <Text
        textAlign="end"
        fontSize={{ base: "lg", md: "3xl" }}
        fontWeight="700"
        color="gray.200"
        mb={8}
        ref={ref}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateX(0)" : "translateX(30px)"}
        transition="all 1.5s ease-in-out"
        lineHeight={1.3}
      >
        RPS(신재생에너지 공급의무화) 제도를 활용하여<br />
        <Text as="span" color="orange.500" fontWeight="700">
          {" "}전기 판매 수익{" "}
        </Text>
        과
        <Text as="span" color="blue.500" fontWeight="700">
          {" "}REC 판매 수익{" "}
        </Text>
        을 동시에
      </Text>
    </Box>
  );
}