import { Box, Image } from '@chakra-ui/react';

import { useEffect, useState } from 'react';

const HERO_BACKGROUND_IMAGES = [
  { image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1920&q=80" },
  { image: "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?auto=format&fit=crop&w=1920&q=80" },
  { image: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&w=1920&q=80" },
  { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80" },
];

const FADE_DURATION_MS = 2000;
const SLIDE_INTERVAL_MS = 5000;

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