import { Stack } from '@chakra-ui/react'
;
import { PromotionNav } from './PromotionNav';
import { ScrollTopNav } from './ScrollTopNav';

export default function Navbar() {
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
      <PromotionNav />
      <ScrollTopNav />
    </Stack>
  );
}
