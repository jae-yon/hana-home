import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { Box, Heading, Text } from '@chakra-ui/react';

const ppa_bg = "https://images.unsplash.com/photo-1552197892-f2ad2f75e7c8?auto=format&fit=crop&w=1280&q=90"

export default function PpaHeader() {
  const ref = useRef(null);
  const isView = useInView(ref);
  
  return (
    <Box
      p={8}
      width="100%"
      position="relative"
      backgroundImage={`url(${ppa_bg})`}
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
        lineHeight={1.4}
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
          fontSize={{ base: "3xl", md: "6xl", lg: "7xl" }}
        >
          햇빛을 수익으로
        </Text>
        <Text 
          as="span" 
          color="white" 
          display="block"
          fontSize={{ base: "3xl", md: "6xl", lg: "7xl" }} 
        >
          바꾸는 방법 
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
        lineHeight={1.9}
      >
        초기 비용 없이<br />
        시작하는 자가용 태양광 발전<br />
        자가용 태양광 <Text as="span" color="blue.500" fontWeight="700">PPA</Text>
      </Text>
    </Box>
  );
}