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
        lineHeight={1.2}
        mt={8}
        mb={24}
        ref={ref}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateX(0)" : "translateX(-30px)"}
        transition="all 1s ease-in-out"
      >
        <Text
          as="span"
          color="white"
          display="block"
          fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }}
        >
          태양광 발전으로
        </Text>
        <Text 
          as="span" 
          color="white" 
          display="block"
          fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }} 
        >
          안정적인 발전 수익
        </Text>
      </Heading>

      <Text
        textAlign="end"
        fontSize={{ base: "md", md: "3xl" }}
        fontWeight="700"
        color="gray.200"
        mb={8}
        ref={ref}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateX(0)" : "translateX(30px)"}
        transition="all 1.5s ease-in-out"
        lineHeight={1.6}
      >
        <Text as="span" color="orange.500" fontWeight="700" textShadow="0 0 10px rgba(245, 158, 11, 0.5)">
          {" "}전력 판매(SMP){" "}
        </Text>
        과
        <Text as="span" color="blue.600" fontWeight="700" textShadow="0 0 10px rgba(33, 150, 243, 0.5)">
          {" "}REC 거래{" "}
        </Text>
        <br />를 통해 장기적인 발전 수익 창출
      </Text>
    </Box>
  );
}