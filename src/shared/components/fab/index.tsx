import { Stack } from '@chakra-ui/react'
;
import { PromotionButton } from './PromotionButton';
import { ScrollTopButton } from './ScrollTopButton';

export default function FloatingActionButton() {
  return (
    <Stack
      padding={2}
      zIndex={900}
      position="fixed"
      bottom={{ base: 2, md: 4 }}
      right={{ base: 4, md: 6 }}
      rounded="full"
      backgroundColor="whiteAlpha.700"
      boxShadow="0 1px 8px -4px rgba(0,0,0,0.8)"
    >
      <PromotionButton />
      <ScrollTopButton />
    </Stack>
  );
}
