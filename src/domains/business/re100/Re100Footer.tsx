import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

import { Box, Flex, Text } from "@chakra-ui/react";

const steps = [
  "상담신청",
  "기업데이터\n검토",
  "맞춤시스템\n안내",
  "계약체결",
  "서비스\n수행",
];

export default function Re100Footer() {
  const ref = useRef(null);
  const isView = useInView(ref);
  
  return (
    <Box p={{ base: 4, md: 12 }} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      {/* Banner */}
      <Box
        px={{ base: 6, md: 10 }}
        py={{ base: 4, md: 4 }}
        mb={{ base: 8, md: 8 }}
        w="100%"
        ref={ref}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateY(0)" : "translateY(-20px)"}
        transition="all 1s ease"
      >
        <Text
          fontSize={{ base: "24px", md: "36px" }}
          fontWeight="800"
          color="gray.800"
          textAlign="center"
          lineHeight="1.6"
          letterSpacing="-0.02em"
          fontFamily="pretendard"
        >
          <Text as="span" color="orange.500">㈜하나솔루션</Text>은 상황에 맞는 <br /><Text as="span" fontSize={{ base: "28px", md: "38px" }} color="gray.800">RE100</Text> 컨설팅을 도와드립니다.
        </Text>
      </Box>

      {/* Steps Row (desktop) / Column (mobile) */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        w="100%"
        gap={1}
        ref={ref}
        opacity={isView ? 1 : 0}
        transform={isView ? "translateY(0)" : "translateY(-20px)"}
        transition="all 1.5s ease"
      >
        {steps.map((step, i) => (
          <Flex
            key={i}
            direction={{ base: "column", md: "row" }}
            align="center"
            w={{ base: "100%", md: "auto" }}
          >
            {/* Card */}
            <Box
              p={4}
              bg="gray.100"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: "100%", md: "200px" }}
              h={{ base: "100%", md: "200px" }}
              flexShrink={0}
              boxShadow="0 0 5px rgba(0, 0, 0, 0.2)"
            >
              <Text
                fontSize={{ base: "16px", md: "20px" }}
                fontWeight="900"
                color="green.600"
                fontFamily="NanumSquareNeo"
                textAlign="center"
                whiteSpace="pre-line"
                lineHeight="1.5"
              >
                {step}
              </Text>
            </Box>

            {/* Arrow */}
            {i < steps.length - 1 && (
              <Box
                flexShrink={0}
                display="flex"
                alignItems="center"
                justifyContent="center"
                w={{ base: "100%", md: "32px" }}
                h={{ base: "32px", md: "auto" }}
                py={{ base: 1, md: 0 }}
                color="green.600"
              >
                {/* Desktop arrow: right */}
                <Box display={{ base: "none", md: "block" }}>
                  <ArrowRight size={24} strokeWidth={2.5} />
                </Box>
                {/* Mobile arrow: down */}
                <Box display={{ base: "block", md: "none" }}>
                  <ArrowDown size={24} strokeWidth={2.5} />
                </Box>
              </Box>
            )}
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}