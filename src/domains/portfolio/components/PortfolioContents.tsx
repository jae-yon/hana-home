import { Box, Flex, Spinner, Text } from '@chakra-ui/react';

import PortfolioCard from '@/shared/components/common/PortfolioCard';
import { usePublicPortfolios, type PublicPortfolioType } from '../hooks/usePortfolio';

interface PortfolioContentsProps {
  isDesktop: boolean;
  type: PublicPortfolioType;
}

export default function PortfolioContents(props: PortfolioContentsProps) {
  const { isDesktop, type } = props;
  const { data: portfolios = [], isLoading } = usePublicPortfolios(type);

  if (isLoading) {
    return (
      <Flex width="100%" minH="300px" alignItems="center" justifyContent="center">
        <Spinner color="green.500" />
      </Flex>
    );
  }

  if (portfolios.length === 0) {
    return (
      <Box p={8} textAlign="center" minH="300px" display="flex" alignItems="center" justifyContent="center">
        <Text color="gray.500" fontSize="md">
          등록된 시공사례가 없습니다.
        </Text>
      </Box>
    );
  }

  return (
    <Flex
      width="100%"
      mx="auto"
      maxW="1280px"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      {portfolios.map((portfolio) => (
        <PortfolioCard
          key={portfolio.id}
          portfolio={portfolio}
          isDesktop={isDesktop}
          isEditable={false}
        />
      ))}
    </Flex>
  );
}
