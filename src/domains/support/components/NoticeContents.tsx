import { Flex } from '@chakra-ui/react';

export default function NoticeContents() {
  return (
    <Flex
      mb={24}
      mt={12}
      gap={12}
      p={{ base: 0, md: 12 }}
      width="100%"
      height="auto"
      maxW="1280px"
      borderRadius="lg"
      overflow="hidden"
      direction="column"
      position="relative"
    ></Flex>
  );
}