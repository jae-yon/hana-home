import { useCallback } from 'react';
import { ChevronUpIcon } from 'lucide-react';
import { IconButton } from '@chakra-ui/react';

export function ScrollTopButton() {
  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <IconButton
      size="xl"
      color="white"
      borderRadius="full"
      onClick={handleClick}
      backgroundColor="blue.700"
      boxShadow="0 1px 8px -4px rgba(0,0,0,0.8)"
      _hover={{ transform: "scale(1.05)" }}
    >
      <ChevronUpIcon width={20} height={20} strokeWidth={2.5} />
    </IconButton>
  );
}
