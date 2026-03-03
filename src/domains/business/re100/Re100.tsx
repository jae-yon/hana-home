import { Flex } from "@chakra-ui/react";

import Re100How from "@/domains/business/re100/Re100How";
import Re100Desc from "@/domains/business/re100/Re100Desc";
import Re100Header from "@/domains/business/re100/Re100Header";
import Re100Footer from "@/domains/business/re100/Re100Footer";
import Re100CardContents from "@/domains/business/re100/Re100CardContents";

export default function Re100() {
  return (
    <Flex
      mb={24}
      mt={12}
      gap={12}
      p={{ base: 0, md: 12 }}
      width="100%"
      height="auto"
      maxW="1280px"
      overflow="hidden"
      direction="column"
      position="relative"
    >
      <Re100Header /> 
      <Re100Desc />
      <Re100How />
      <Re100CardContents />
      <Re100Footer />
    </Flex>
  );
}