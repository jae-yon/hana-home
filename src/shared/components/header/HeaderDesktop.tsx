import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";

export type HeaderMenu = {
  name: string;
  path: string;
  childMenu: { name: string; path: string }[];
};

interface HeaderDesktopProps {
  megaOpen: boolean;
  currentMenu: HeaderMenu | null;
  onMegaEnter: () => void;
  onMegaLeave: () => void;
  handleExternalLink: (path: string) => void;
}

export default function HeaderDesktop({
  megaOpen,
  currentMenu,
  onMegaEnter,
  onMegaLeave,
  handleExternalLink,
}: HeaderDesktopProps) {
  return (
    <Box
      position="absolute"
      top="100%"
      left={0}
      right={0}
      bg="white"
      boxShadow="0 8px 40px rgba(0,51,102,0.13)"
      overflow="hidden"
      maxH={megaOpen ? "360px" : "0px"}
      opacity={megaOpen ? 1 : 0}
      transition="max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease"
      onMouseEnter={onMegaEnter}
      onMouseLeave={onMegaLeave}
      zIndex={1001}
    >
      {megaOpen && currentMenu && (
        <Container maxW="container.xl" fontFamily="NanumSquareNeo">
          <Flex py={10} gap={10} align="flex-start">
            {/* 왼쪽: 메뉴 타이틀 */}
            <Box
              pr={8}
              minW="180px"
              flexShrink={0}
              cursor="default"
              borderRight="1px solid"
              borderColor="gray.200"
            >
              <Text
                fontSize="12px"
                fontWeight="900"
                color="orange.600"
                letterSpacing="0.12em"
                textTransform="uppercase"
                mb={2}
              >
                Menu
              </Text>
              <Text
                fontSize="24px"
                fontWeight="800"
                color="blue.800"
                lineHeight={1.2}
              >
                {currentMenu.name}
              </Text>
            </Box>

            {/* 오른쪽: 서브메뉴 링크 */}
            <Flex flex={1} wrap="wrap" gap={0}>
              {currentMenu.childMenu.map((child) => (
                <Link
                  key={child.path}
                  onClick={() => handleExternalLink(child.path)}
                  display="flex"
                  alignItems="center"
                  w={{ base: "50%", md: "33%", lg: "20%" }}
                  py={2}
                  pr={4}
                  fontSize="14px"
                  fontWeight="600"
                  color="gray.600"
                  transition="color 0.2s, padding-left 0.2s"
                  _hover={{
                    color: "orange.600",
                    paddingLeft: "6px",
                    textDecoration: "none",
                  }}
                  outline="none"
                >
                  {child.name}
                </Link>
              ))}
            </Flex>
          </Flex>
        </Container>
      )}
    </Box>
  );
}
