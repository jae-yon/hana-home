import { Box } from '@chakra-ui/react';

import HeroContents from './components/HeroContents';
import HeroBackgroundImages from './components/HeroBackgroundImages';

export default function Hero() {
  return (
    <Box
      position='relative'
      w='100%'
      h='100vh'
      overflow='hidden'
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        w: '100%',
        h: '100%',
        bgGradient: 'to-b',
        gradientFrom: 'blackAlpha.900',
        gradientVia: 'blackAlpha.600',
        gradientTo: 'whiteAlpha.500',
        opacity: 0.7,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <HeroContents />
      <HeroBackgroundImages />
    </Box>
  );
}