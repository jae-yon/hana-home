import { Box, Flex, Stack } from '@chakra-ui/react';

import { useResponsive } from '@/shared/hooks/useResponsive';

import { PORTFOLIO_ITEMS } from '@/shared/config/constants';

import { PortfolioHead } from './components/PortfolioHead';
import { PortfolioContents } from './components/PortfolioContents';

export default function Portfolio() {
  const { isDesktop } = useResponsive();

  return (
    <Box 
      width="100%"
      backgroundColor="gray.100"
    >
      <Stack
        maxW="1280px"
        height={isDesktop ? "1000px" : "auto"}
        mx="auto"
        py={{ base: "48px", md: "80px" }}
        px={{ base: 4, md: 8 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        <Flex
          width="100%"
          flexDirection={isDesktop ? 'row' : 'column'}
          gap={8}
          alignItems={isDesktop ? 'center' : 'stretch'}
          justifyContent="center"
        >
          {/* 모바일: CaseHead 위, CaseContents 아래 / 데스크톱: Contents 왼쪽, Head 오른쪽 */}
          {!isDesktop ? (
            <>
              <Box width="100%">
                <PortfolioHead isDesktop={isDesktop} />
              </Box>
              <Box width="100%" flex={1}>
                <PortfolioContents items={PORTFOLIO_ITEMS} />
              </Box>
            </>
          ) : (
            <>
              <Box flex={1} minW={0} maxW="50%" px={{ md: 4 }}>
                <PortfolioContents items={PORTFOLIO_ITEMS} />
              </Box>
              <Box flexShrink={0} width={{ md: '50%' }} maxW="50%" px={{ md: 4 }}>
                <PortfolioHead isDesktop={isDesktop} />
              </Box>
            </>
          )}
        </Flex>
      </Stack>
    </Box>
  );
}