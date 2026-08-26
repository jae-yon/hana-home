import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';

import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';
import SubHero from '@/shared/components/sub/SubHero';
import FloatingActionButton from '@/shared/components/fab';

interface PageLayoutProps {
  children: React.ReactNode;
  showSubHero?: boolean;
}

export default function PageLayout({ children, showSubHero = true }: PageLayoutProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <Flex minH="100dvh" direction="column">
      <Header />
      {showSubHero && <SubHero />}
      <Box as="main" flex="1" display="flex" flexDirection="column">
        {children}
      </Box>
      <Footer />
      <FloatingActionButton />
    </Flex>
  );
}
