import { Impactor } from '@/shared/components/common/Impactor';
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';

import { ProfitSum } from './components/ProfitSum';
import { ProfitConditon } from './components/ProfitConditon';
import { ProfitAnalysis } from './components/ProfitAnalysis';

export default function ProfitCalculator() {
  return (
    <Flex 
      mb={12}
      mt={12}
      gap={6}
      width="100%"
      height="auto"
      maxW="960px"
      borderRadius="lg"
      overflow="hidden"
      direction="column"
      position="relative"
      p={{ base: 0, md: 12 }}
    >
      <Impactor direction="top" once>
        <Box p={4}>
          <Heading
            mb={4}
            size="5xl"
            color="gray.800"
            lineHeight="1.35"
            fontWeight="semibold"
          >
            수익계산기
          </Heading>
          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            color="gray.600"
          >
            발전소 운영 데이터를 기반으로 예상 발전량과 수익을 지금 바로 확인해보세요.
          </Text>
        </Box>
      </Impactor>

      <Grid
        p={4}
        width="100%"
        gap={{ base: 4, md: 8 }}
        templateColumns="1fr"
      >
        <Impactor direction="bottom" once delay={1.0}>
          <ProfitConditon />
        </Impactor>
        <Impactor direction="bottom" once delay={1.3}>
          <ProfitAnalysis />
        </Impactor>
        <Impactor direction="bottom" once delay={1.6}>
          <ProfitSum />
        </Impactor>
      </Grid>
    </Flex>
  );
}