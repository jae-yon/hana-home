import { Box, Heading, Image, Text } from '@chakra-ui/react';

import { useLocation } from 'react-router-dom';

import { SUB_HERO_INFO } from '@/shared/config/constants';

import { useResponsive } from '@/shared/hooks/useResponsive';

export default function SubHero() {
  const { isDesktop } = useResponsive();

  const location = useLocation();

  const currentInfo = SUB_HERO_INFO.find((item) => location.pathname.startsWith(item.pathname));

  const image = currentInfo?.image;
  const title = currentInfo?.title;
  const subtitle = currentInfo?.subtitle;

  if (!currentInfo) return null;

  return (
    <Box
      position='relative'
      w='100%'
      h='50vh'
      overflow='hidden'
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        w: '100%',
        h: '100%',
        bgGradient: 'to-b',
        gradientFrom: 'blackAlpha.500',
        gradientVia: 'blackAlpha.100',
        gradientTo: 'blackAlpha.500',
        opacity: 0.7,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      {/* badrop */}
      <Box
        width='100%'
        height='100%'
        backgroundColor='blackAlpha.600'
        position='absolute'
        top='0'
        left='0'
        zIndex={1}
        animation='slide-to-bottom-custom 1s ease-in-out forwards'
      />
      {/* background image */}
      <Box
        top='0'
        left='0'
        zIndex={0}
        width='100%'
        height='100%'
        position='absolute'
      >
        {/* image */}
        <Image
          src={image}
          width='100%'
          height='100%'
          objectFit='cover'
          animation='hero-zoom-out-custom 2s ease-in-out forwards'
        />
      </Box>
      {/* title */}
      <Box
        ps={isDesktop ? 24 : 8}
        py={12}
        gap={8}
        zIndex={2}
        height='100%'
        display='flex'
        alignItems='start'
        position='relative'
        justifyContent='end'
        flexDirection='column'
        animation='slide-from-right-custom 2s ease-in-out forwards'
      >
        <Heading
          color='white'
          fontWeight='medium'
          letterSpacing='0.04em'
          fontSize={{ base: '48px', md: '56px' }}
        >
          {title}
        </Heading>
        <Text
          pl={2}
          color='gray.300/80'
          fontWeight='medium'
          letterSpacing='0.02em'
          fontFamily='NanumSquareNeo'
          fontSize={{ base: '18px', md: '24px' }}
        >
          {subtitle}
        </Text>
      </Box>
    </Box>
  );
}