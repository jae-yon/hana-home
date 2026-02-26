import { Box, Button, Flex, IconButton, Link, Text } from '@chakra-ui/react';
import { LucideArrowRight, LucideArrowUpRight } from 'lucide-react';

const FOLDED_W = { base: "100%", md: "240px" };
const EXPANDED_W = { base: "100%", md: "calc(100% - 2 * 240px)" };

interface BusinessCardProps {
  item: {
    href: string;
    title: string;
    image: string;
    accent: string;
    subtitle: string;
    description: string;
  },
  isExpanded: boolean;
  onExpand: () => void;
  expandFrom?: 'left' | 'right';
}

export default function BusinessCard(props: BusinessCardProps) {
  return (
    <Box
      as="div"
      role="button"
      tabIndex={0}
      data-group
      outline="none"
      flexShrink={0}
      cursor="pointer"
      borderRadius="xl"
      overflow="hidden"
      position="relative"
      onClick={props.onExpand}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          props.onExpand();
        }
      }}
      fontFamily="NanumSquareNeo"
      _focus={{ outline: "none" }}
      w={props.isExpanded ? EXPANDED_W : FOLDED_W}
      transition="all 0.65s cubic-bezier(0.4, 0, 0.2, 1)"
      h={{ base: props.isExpanded ? "480px" : "200px", md: "480px" }}
    >
        {/* Background Image */}
        <Box
          inset="0"
          bgPos="center"
          bgSize="cover"
          position="absolute"
          bgImage={`url(${props.item.image})`}
          _groupHover={{ transform: "scale(1.05)" }}
          transition="transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)"
        />

        {/* Dark overlay gradient */}
        <Box
          inset="0"
          position="absolute"
          transition="all 0.5s ease-in-out"
          bg={
            props.isExpanded
              ? "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.08) 100%)"
              : "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 100%)"
          }
        >
          {!props.isExpanded && (
            <Flex w="100%" h="100%" align="flex-start" justify="flex-end" pt="16px" pr="16px" display={{ base: "none", md: "flex" }}>
              <IconButton
                borderRadius="xl"
                borderWidth="1.5px"
                borderColor={props.item.accent}
                color={props.item.accent}
                bg={`${props.item.accent}/20`}
                outline="none"
                boxSize="36px"
                minW="36px"
                minH="36px"
                transition="all 0.25s ease-in-out"
                boxShadow="0 0 10px rgba(0, 0, 0, 0.3)"
                _hover={{ transform: "scale(1.25)" }}
                _active={{ transform: "scale(1.25)" }}
                onClick={(e) => {
                  e.stopPropagation();
                  props.onExpand();
                }}
              >
                <LucideArrowUpRight size={36} />
              </IconButton>
            </Flex>
          )}
        </Box>

        {/* Content (expanded state) */}
        <Flex
          inset="0"
          direction="column"
          justify="flex-end"
          position="absolute"
          transition="all 0.45s ease-in-out 0.2s"
          opacity={props.isExpanded ? 1 : 0}
          p={{ base: "28px 24px", md: "40px 36px" }}
          transitionDelay={props.isExpanded ? "0.2s" : "0s"}
          pointerEvents={props.isExpanded ? "auto" : "none"}
          transform={props.isExpanded ? "translateY(0)" : "translateY(16px)"}
        >
          {/* Title */}
          <Text
            mb="24px"
            color="white"
            fontFamily='A2z'
            lineHeight="1.2"
            fontWeight="semibold"
            fontSize={{ base: "36px", md: "48px" }}
            textShadow="0 0 10px rgba(0, 0, 0, 0.5)"
          >
            {props.item.title}
          </Text>

          {/* Subtitle */}
          <Text
            mb="24px"
            color="white"
            lineHeight="1.2"
            fontWeight="semibold"
            fontSize={{ base: "14px", md: "18px" }}
            >
            {props.item.subtitle}
          </Text>

          {/* Divider */}
          <Box w="40px" h="2px" bg={props.item.accent} mb="20px" opacity={0.8} />

          {/* Description */}
          <Text
            mb="28px"
            maxW={{ base: "100%", md: "360px", lg: "480px" }}
            textAlign="start"
            lineHeight="1.75"
            color="rgba(255,255,255,0.82)"
            fontSize={{ base: "14px", sm: "16px", lg: "18px" }}
          >
            {props.item.description}
          </Text>

          {/* CTA Button */}
          <Box>
            <Link
              outline="none"
              href={props.item.href}
              _hover={{ textDecoration: 'none' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                h="auto"
                as="span"
                size="sm"
                px="24px"
                py="10px"
                fontSize="md"
                fontWeight="700"
                borderRadius="full"
                display="inline-block"
                borderColor={props.item.accent}
                color={props.item.accent}
                letterSpacing="0.2em"
                textTransform="uppercase"
                bg={`${props.item.accent}/20`}
                transition="all 0.25s ease-in-out"
                boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
                _hover={{
                  bg: props.item.accent,
                  color: "white",
                  transform: "translateY(-2px)",
                }}
              >
                <Flex align="center" gap="4px" letterSpacing="-0.05em">
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
            textShadow="0 0 10px rgba(0, 0, 0, 0.5)"
          >
            {props.item.title}
          </Text>
        </Flex>
    </Box>
  );
}