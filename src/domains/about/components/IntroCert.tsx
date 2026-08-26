import { Box, Grid, Image, Stack, Text } from '@chakra-ui/react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { CERT_IMAGES } from '@/shared/config/constants';

interface IntroCertProps {
  isDesktop: boolean;
}

function CertBox(props: {
  image: string;
  name: string;
}) {
  const { image, name } = props;

  return (
    <Box
      cursor="default"
      overflow="hidden"
      position="relative"
      borderRadius="xl"
      aspectRatio="3 / 4"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      css={{
        '&:hover img': { transform: 'scale(1.02)' },
        '&:hover .cert-name': {
          opacity: 1,
          transform: 'translateY(0)',
        },
      }}
    >
      <Image
        src={image}
        alt={name}
        w="100%"
        h="100%"
        inset="0"
        position="absolute"
        objectFit="contain"
        transition="transform 0.5s ease"
      />

      <Box
        className="cert-name"
        px={4}
        py={4}
        bottom="0"
        left="0"
        right="0"
        position="absolute"
        pointerEvents="none"
        bg="rgba(0, 0, 0, 0.28)"
        backdropFilter="blur(4px)"
        opacity={0}
        transform="translateY(100%)"
        transition="opacity 0.4s ease, transform 0.4s ease"
      >
        <Text
          color="white"
          fontSize="12px"
          textAlign="start"
          letterSpacing="-0.01em"
          lineHeight="1.5"
          textShadow="0 1px 4px rgba(0, 0, 0, 0.45)"
        >
          {name}
        </Text>
      </Box>
    </Box>
  );
}

// 회사소개 - 인증, 면허
export function IntroCert(_props: IntroCertProps) {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });

  return (
    <Stack
      py={20}
      width="100%"
    >
      <Text
        mb={2}
        color="orange.500"
        fontSize="14px"
        textAlign="center"
        letterSpacing="0.05em"
      >
        CERTIFICATIONS
      </Text>
      <Text
        mb={10}
        p={4}
        ref={ref}
        color="gray.700"
        textAlign="center"
        fontWeight="bold"
        fontSize={{ base: '28px', sm: '32px', md: '38px', lg: '48px' }}
        opacity={isView ? 1 : 0}
        transition="transform 1.5s ease, opacity 1s ease"
        transform={isView ? 'translateY(0)' : 'translateY(200px)'}
      >
        증명된 기술력과 품질
        <br />
        신뢰할 수 있는 서비스
      </Text>
      <Grid
        mx="auto"
        w="100%"
        p={{ base: 4, md: 8 }}
        gap={{ base: 6, md: 8 }}
        templateColumns={{
          base: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {CERT_IMAGES.map((cert, index) => (
          <Box
            key={`${cert.name}-${index}`}
            opacity={isView ? 1 : 0}
            transition="transform 1.5s ease, opacity 1s ease"
            transitionDelay={`${index * 0.1}s`}
            transform={isView ? 'translateY(0)' : 'translateY(80px)'}
          >
            <CertBox image={cert.image} name={cert.name} />
          </Box>
        ))}
      </Grid>
    </Stack>
  );
}
