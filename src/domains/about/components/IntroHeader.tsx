import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { Stack, Text, Image } from '@chakra-ui/react';

interface IntroHeaderProps {
  isDesktop: boolean;
}

const intro_img_header = "https://images.unsplash.com/photo-1648135327756-b606e2eb8caa?auto=format&fit=crop&q=90&w=1280"

export function IntroHeader(props: IntroHeaderProps) {
  const { isDesktop } = props;
  
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });

  return (
    <Stack 
      mb={10}
      py={10}
      width="100%"
    >
      <Text 
        p={4}
        mb={10}
        color="gray.900"
        textAlign="start"
        fontWeight="bold"
        fontSize={{ base: '28px', sm: '32px', md: '38px', lg: '56px' }}
      >
        풍부한 경험과 노하우의 차이
      </Text>

      <Image 
        mb={10}
        objectFit="cover"
        borderRightRadius="xl"
        src={intro_img_header} 
        width={isDesktop ? '90%' : '80%'}
        height={isDesktop ? '360px' : '240px'}
      />
      
      <Text
        p={4}
        ref={ref}
        color="gray.700"
        textAlign="end"
        fontWeight="bold"
        fontSize={{ base: '28px', sm: '32px', md: '38px', lg: '56px' }}
        opacity={isView ? 1 : 0}
        transition="transform 1.5s ease, opacity 1s ease"
        transform={isView ? 'translateX(0)' : 'translateX(200px)'}
      >
        태양광 사업의 <Text as="span" color="orange.500">토탈 솔루션</Text>
      </Text>
    </Stack>
  );
}