import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { Box, Heading, Stack, Text } from '@chakra-ui/react';

const re100_bg = "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1280&auto=format&fit=crop";

export default function Re100Header() {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });

  return (
    <Box
      width="100%"
      height="400px"
      overflow="hidden"
      borderRadius={{ base: '0', md: '2xl' }}
      position="relative"
      ref={ref}
      opacity={isView ? 1 : 0}
      transform={isView ? "translateY(0)" : "translateY(100px)"}
      transition="all 1s ease-in-out"
    >
      {/* background image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundImage={`url(${re100_bg})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderRadius={{ base: '0', lg: 'xl' }}
        overflow="hidden"
      />
      {/* backdrop */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={1}
        background="linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.5) 100%)"
        borderRadius={{ base: '0', md: '2xl' }}
      />

      {/* content */}
      <Stack
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={2}
        p={8}
        justifyContent="flex-end"
        alignItems="flex-start"
        ref={ref}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateY(0)" : "translateY(100px)"}
        transition="all 1.5s ease-in-out"
      >
        <Heading
          fontSize={{ base: '24px', md: '32px', lg: '48px' }}
          fontWeight="bold"
          color="white"
          lineHeight="1.35"
          textAlign="start"
          wordBreak="keep-all"
          letterSpacing="-0.02em"
          overflowWrap="break-word"
          textShadow="1px 1px 2px rgba(0,0,0,0.2)"
        >
          <Text as="span" fontSize={{ base: '36px', md: '48px', lg: '60px' }} fontWeight="bold" color="green.500">RE100</Text>으로
          <br />ESG 경영을 실천해보세요.
        </Heading>
        <Text
          fontSize={{ base: '16px', md: '20px', lg: '24px' }}
          color="white"
          lineHeight="1.75"
          textAlign="start"
          wordBreak="keep-all"
          letterSpacing="0.02em"
          overflowWrap="break-word"
          textShadow="1px 1px 2px rgba(0,0,0,0.2)"
        >
          한국형 RE100 정책을 기반으로 
          <br />맞춤형 컨설팅 및 서비스 및 운영을 제공합니다.
        </Text>
      </Stack>
    </Box>
  );
}