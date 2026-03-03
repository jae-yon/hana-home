import { Box } from '@chakra-ui/react';

import { IntroValue } from './IntroValue';
import { IntroHeader } from './IntroHeader';
import { IntroVision } from './IntroVision';
import { IntroGreetings } from './IntroGreetings';

interface IntroProps {
  isDesktop: boolean;
}

export function Intro(props: IntroProps) {
  const { isDesktop } = props;

  return (
    <Box
      width="100%"
      maxW="1280px"
      backgroundColor="gray.50"
    >
      {/* 최상단 */}
      <IntroHeader isDesktop={isDesktop} />

      {/* 인사말 */}
      <IntroGreetings />

      {/* 비전 */}
      <IntroVision isDesktop={isDesktop} />

      {/* 가치 */}
      <IntroValue />
    </Box>
  );
}