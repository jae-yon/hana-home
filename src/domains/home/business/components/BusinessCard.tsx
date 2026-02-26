import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';
import { LucideArrowRight } from 'lucide-react';

const FOLDED_W = { base: "100%", md: "240px" };
const EXPANDED_W = { base: "100%", md: "calc(100% - 2 * 240px)" };

interface BusinessCardProps {
  item: {
    image: string;
    accent: string;
    subtitle: string;
    title: string;
    description: string;
    href: string;
  },
  isExpanded: boolean;
  onExpand: () => void;
  expandFrom?: 'left' | 'right';
}

export default function BusinessCard(props: BusinessCardProps) {
  return (
    <Box
      as="button"
      onClick={props.onExpand}
      position="relative"
      overflow="hidden"
      cursor="pointer"
      w={props.isExpanded ? EXPANDED_W : FOLDED_W}
      h={{ base: props.isExpanded ? "480px" : "200px", md: "480px" }}
      transition="all 0.65s cubic-bezier(0.4, 0, 0.2, 1)"
      flexShrink={0}
      role="group"
      outline="none"
      _focus={{ outline: "none" }}
      borderRadius="xl"
      fontFamily='NanumSquareNeo'
    >
        {/* Background Image */}
        <Box
          position="absolute"
          inset="0"
          bgImage={`url(${props.item.image})`}
          bgSize="cover"
          bgPos="center"
          transition="transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)"
          _groupHover={{ transform: "scale(1.04)" }}
        />

        {/* Dark overlay gradient */}
        <Box
          position="absolute"
          inset="0"
          bg={
            props.isExpanded
              ? "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.08) 100%)"
              : "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 100%)"
          }
          transition="all 0.5s ease"
        />

        {/* Content (expanded state) */}
        <Flex
          position="absolute"
          inset="0"
          direction="column"
          justify="flex-end"
          p={{ base: "28px 24px", md: "40px 36px" }}
          opacity={props.isExpanded ? 1 : 0}
          transform={props.isExpanded ? "translateY(0)" : "translateY(16px)"}
          transition="all 0.45s ease 0.2s"
          pointerEvents={props.isExpanded ? "auto" : "none"}
        >
          {/* Title */}
          <Text
            fontSize={{ base: "36px", md: "48px" }}
            fontFamily='A2z'
            fontWeight="semibold"
            color="white"
            lineHeight="1.2"
            mb="24px"
          >
            {props.item.title}
          </Text>

          {/* Subtitle */}
          <Text
            fontSize={{ base: "14px", md: "18px" }}
            fontWeight="semibold"
            color="white"
            lineHeight="1.2"
            mb="24px"
          >
            {props.item.subtitle}
          </Text>

          {/* Divider */}
          <Box w="40px" h="1px" bg={props.item.accent} mb="20px" opacity={0.8} />

          {/* Description */}
          <Text
            fontSize={{ base: "14px", md: "18px" }}
            color="rgba(255,255,255,0.82)"
            lineHeight="1.75"
            mb="28px"
            maxW="360px"
            textAlign="start"
          >
            {props.item.description}
          </Text>

          {/* CTA Button */}
          <Box>
            <Link
              href={props.item.href}
              _hover={{ textDecoration: 'none' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                as="span"
                display="inline-block"
                size="sm"
                variant="outline"
                borderColor={props.item.accent}
                color={props.item.accent}
                borderRadius="full"
                px="24px"
                py="10px"
                h="auto"
                fontSize="md"
                fontWeight="700"
                letterSpacing="0.2em"
                textTransform="uppercase"
                bg={`${props.item.accent}/20`}
                _hover={{
                  bg: props.item.accent,
                  color: "white",
                  transform: "translateY(-1px)",
                }}
                transition="all 0.25s ease"
              >
                <Flex align="center" gap="4px">
                  <Text>자세히 보기</Text>
                  <LucideArrowRight size={16} />
                </Flex>
              </Button>
            </Link>
          </Box>
        </Flex>
        
        {/* Mobile title (always visible) */}
        <Flex
          position="absolute"
          inset="0"
          direction="column"
          justify="flex-end"
          p="20px 20px"
          display={{ base: "flex", md: "none" }}
          opacity={props.isExpanded ? 0 : 1}
          transition="opacity 0.3s ease"
          pointerEvents="none"
        >
          <Text
            fontSize="11px"
            fontWeight="700"
            letterSpacing="0.25em"
            textTransform="uppercase"
            color={props.item.accent}
            mb="6px"
            fontFamily='NanumSquareNeo'
          >
            {props.item.subtitle}
          </Text>
          <Text
            fontSize="22px"
            fontFamily='NanumSquareNeo'
            fontWeight="600"
            color="white"
          >
            {props.item.title}
          </Text>
        </Flex>
    </Box>
  );
}