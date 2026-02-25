import { useEffect, useRef, useState } from "react";
import { LucideMenu, LucideX } from "lucide-react";

import { Box, Container, Flex, HStack, IconButton, Text, VStack, Link } from "@chakra-ui/react";

import { useResponsive } from "@/shared/hooks/useResponsive";

import { HEADER_MENU } from "@/shared/config/constants";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  const { isDesktop } = useResponsive();
  // 스크롤 상태
  const [scrolled, setScrolled] = useState(false);
  // 모바일 메뉴 상태
  const [mobileOpen, setMobileOpen] = useState(false);
  // 활성 메뉴 상태
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  // 타이머 참조
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 스크롤 감지
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // 데스크톱 뷰포트로 전환 시 모바일 메뉴 닫기 (스타일이 아닌 상태로 제어)
  useEffect(() => {
    // const mql = window.matchMedia("(min-width: 62em)"); // Chakra lg
    const handler = () => {
      if (isDesktop) setMobileOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [isDesktop]);

  // GNB hover 핸들러 (150ms 딜레이로 메뉴 ↔ Mega Menu 이동 시 자연스럽게 유지)
  const handleEnter = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(name);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };
  const handleMegaEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const currentMenu = HEADER_MENU.find((m) => m.name === activeMenu);
  const megaOpen = !!activeMenu;

  return (
    <>
      <Box
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg={scrolled ? "white" : activeMenu || mobileOpen ? "gray.50" : "transparent"}
        transition="background-color 0.35s ease, box-shadow 0.35s ease"
        boxShadow={scrolled ? "0 2px 20px rgba(0,51,102,0.10)" : "none"}
        onMouseLeave={handleLeave}
      >
        <Container maxW="container.xl" h="full">
          <Flex
            align="center"
            justify="space-between"
            h={scrolled ? "80px" : "100px"}
            transition="height 0.35s ease"
          >
            {/* 로고 */}
            <Link href="/" _hover={{ textDecoration: "none" }}>
              <HStack>
                <Flex>
                  {/* <Image src={logo} alt="logo" width={8} height={8} objectFit="contain" /> */}
                </Flex>
                <VStack
                  align="flex-start"
                >
                  <Text
                    fontSize="9px"
                    fontWeight="600"
                    color={scrolled ? "gray.700" : activeMenu || mobileOpen ? "gray.700" : "white"}
                    letterSpacing="0.15em"
                    textTransform="uppercase"
                    lineHeight={1}
                  >
                    HanaSolution
                  </Text>
                  <Text
                    fontSize="18px"
                    fontWeight="700"
                    color={scrolled ? "gray.700" : activeMenu || mobileOpen ? "gray.700" : "white"}
                    letterSpacing="0.1em"
                    lineHeight={1.3}
                  >
                    하나솔루션
                  </Text>
                </VStack>
              </HStack>
            </Link>

            <HStack
              as="nav"
              h="full"
              display={isDesktop ? "flex" : "none"}
            >
              {HEADER_MENU.map((menu) => (
                <Box
                  key={menu.name}
                  position="relative"
                  h="full"
                  display="flex"
                  alignItems="center"
                  px={8}
                  cursor="pointer"
                  fontSize="16px"
                  fontWeight="800"
                  color={
                    scrolled ? "gray.700" : activeMenu ? "gray.700" : activeMenu === menu.name ? "orange.600" : "white"
                  }
                  transition="color 0.2s"
                  _hover={{ color: "orange.600" }}
                  onMouseEnter={() => handleEnter(menu.name)}
                  whiteSpace="nowrap"
                  letterSpacing="0.05em"
                  fontFamily="NanumSquareNeo"
                >
                  {menu.name}
                  {/* 하단 active 인디케이터 */}
                  <Box
                    position="absolute"
                    bottom={0}
                    left={5}
                    right={5}
                    h="3px"
                    bg={"orange.500"}
                    transform={
                      activeMenu === menu.name ? "scaleX(1)" : "scaleX(0)"
                    }
                    transformOrigin="left"
                    transition="transform 0.3s cubic-bezier(0.4,0,0.2,1)"
                  />
                </Box>
              ))}
            </HStack>

            <HStack>
              <IconButton
                variant="plain"
                onClick={() => setMobileOpen(!mobileOpen)}
                display={isDesktop ? "none" : "flex"}
                color={scrolled ? "gray.700" : activeMenu || mobileOpen ? "gray.700" : "white"}
              >
                {mobileOpen ? <LucideX /> : <LucideMenu />}
              </IconButton>
            </HStack>
          </Flex>
        </Container>

        {/* 메가 메뉴 */}
        <HeaderDesktop
          megaOpen={megaOpen}
          currentMenu={currentMenu ?? null}
          onMegaEnter={handleMegaEnter}
          onMegaLeave={handleLeave}
        />
      </Box>

      {/* 모바일 메뉴 */}
      <HeaderMobile
        open={mobileOpen}
        scrolled={scrolled}
        activeMenu={activeMenu}
        headerMenu={HEADER_MENU}
      />

      {/* backdrop */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.400"
        zIndex={999}
        opacity={megaOpen ? 1 : 0}
        pointerEvents={megaOpen ? "auto" : "none"}
        transition="opacity 0.3s"
        onClick={() => setActiveMenu(null)}
      />
    </>
  );
}