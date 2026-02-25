import { Box, Collapsible, Container, Link, VStack } from "@chakra-ui/react";

export type HeaderMenu = {
  name: string;
  path: string;
  childMenu: { name: string; path: string }[];
};

interface HeaderMobileProps {
  open: boolean;
  scrolled: boolean;
  activeMenu: string | null;
  headerMenu: HeaderMenu[];
  handleExternalLink: (path: string) => void;
}

export default function HeaderMobile({
  open,
  scrolled,
  activeMenu,
  headerMenu,
  handleExternalLink,
}: HeaderMobileProps) {
  return (
    <Collapsible.Root open={open}>
      <Collapsible.Content position="relative" zIndex={1001}>
        <Box
          bg={open || activeMenu ? "white" : "transparent"}
          display={{ base: "block", lg: "none" }}
          borderTop="1px solid"
          borderBottom="1px solid"
          borderColor="gray.200"
          maxH="40vh"
          overflowY="auto"
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          marginTop={scrolled ? "80px" : "100px"}
          fontFamily="NanumSquareNeo"
          boxShadow="0 2px 20px rgba(0,51,102,0.10)"
        >
          <Container maxW="container.xl" py={4}>
            <VStack gap={0} align="stretch">
              {headerMenu.map((menu) => (
                <Box key={menu.name}>
                  <Link
                    onClick={() => handleExternalLink(menu.path)}
                    display="block"
                    py={3}
                    px={2}
                    fontWeight="800"
                    fontSize="16px"
                    color="blue.800"
                    borderBottom="1px solid"
                    borderColor="gray.200"
                    _hover={{ textDecoration: "none" }}
                  >
                    {menu.name}
                  </Link>
                  <VStack gap={0} align="stretch" pl={4} pb={2} pt={1}>
                    {menu.childMenu.map((child) => (
                      <Link
                        key={child.path}
                        onClick={() => handleExternalLink(child.path)}
                        display="block"
                        py={2}
                        fontSize="14px"
                        fontWeight="700"
                        color="gray.600"
                        _hover={{
                          color: "orange.600",
                          textDecoration: "none",
                        }}
                        transition="all 0.3s ease-in-out"
                        outline="none"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </VStack>
                </Box>
              ))}
            </VStack>
          </Container>
        </Box>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
