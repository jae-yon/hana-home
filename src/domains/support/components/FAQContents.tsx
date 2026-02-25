import { Flex, Collapsible, Text, Box } from '@chakra-ui/react';
import { ChevronDown } from 'lucide-react';

import { FAQ_ITEMS } from '@/shared/config/constants';

export default function FAQContents() {
  const visibleItems = FAQ_ITEMS.filter((item) => item.isVisible);

  return (
    <Flex
      gap={12}
      my={{ base: 8, md: 12 }}
      p={{ base: 0, md: 12 }}
      width="100%"
      height="auto"
      maxW="1280px"
      borderRadius="lg"
      overflow="hidden"
      direction="column"
      position="relative"
    >
      {visibleItems.map((item) => (
        <Collapsible.Root key={item.id}>
          <Box fontFamily="NanumSquareNeo">
            <Collapsible.Trigger
              px={5}
              py={4}
              width="100%"
              display="flex"
              cursor="pointer"
              textAlign="left"
              alignItems="center"
              backgroundColor="transparent"
              justifyContent="space-between"
              borderBottomColor="gray.400"
              borderBottomWidth="1px"
              transition="background-color 0.2s"
              _hover={{ backgroundColor: 'gray.100' }}
            >
              <Text
                flex={1}
                fontSize="lg"
                color="gray.800"
                fontWeight="700"
              >
                {item.id}. {item.question}
              </Text>
              <Collapsible.Indicator
                color="gray.500"
                transition="transform 0.2s"
                _open={{ transform: 'rotate(180deg)' }}
              >
                <ChevronDown size={20} strokeWidth={2} />
              </Collapsible.Indicator>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Box
                px={5}
                py={4}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                backgroundColor="gray.100"
              >
                <Text fontSize="sm" color="gray.700" fontWeight="600" lineHeight="tall" whiteSpace="pre-wrap">
                  <Text as="span" fontWeight="700" color="gray.800">A.</Text> {item.answer}
                </Text>
              </Box>
            </Collapsible.Content>
          </Box>
        </Collapsible.Root>
      ))}
    </Flex>
  );
}
