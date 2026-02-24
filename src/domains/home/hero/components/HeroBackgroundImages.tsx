import { Box, Image } from '@chakra-ui/react';

import { useEffect, useState } from 'react';

import { HERO_BACKGROUND_IMAGES, FADE_DURATION_MS, SLIDE_INTERVAL_MS } from '@/shared/config/constants';

export default function HeroBackgroundImages() {
  // 현재 배경 이미지 인덱스
  const [currentIndex, setCurrentIndex] = useState(0);

  // 배경 이미지 슬라이드 인터벌
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_BACKGROUND_IMAGES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <>
      {HERO_BACKGROUND_IMAGES.map((heroImage, index) => (
        <Box
          key={heroImage.image}
          position='absolute'
          top='0'
          left='0'
          width='100%'
          height='100%'
          opacity={index === currentIndex ? 1 : 0}
          transition={`opacity ${FADE_DURATION_MS}ms ease-in-out`}
          zIndex={0}
        >
          <Image
            src={heroImage.image}
            alt={`hero image ${index + 1}`}
            width='100%'
            key={`${heroImage.image}-${index === currentIndex ? 'visible' : 'hidden'}`}
            height='100%'
            objectFit='cover'
            animation={index === currentIndex ? 'hero-slow-zoom 15s ease-in-out forwards' : 'none'}
            transformOrigin='center center'
          />
        </Box>
      ))}
    </>
  );
}