import { Box, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface DashboardProps {
  children?: ReactNode;
}

export default function Dashboard({ children }: DashboardProps) {
  return (
    <Flex as="main" minW={0} minH="100vh" flex="1" bg="gray.50" direction="column">
      <Box w="100%" maxW="1440px" mx="auto" p={{ base: 5, lg: 8 }}>
        {children}
      </Box>
    </Flex>
  );
}
