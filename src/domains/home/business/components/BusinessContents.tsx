import { Flex } from '@chakra-ui/react';

import BusinessCard from './BusinessCard';

interface BusinessContentsProps {
  items: {
    id: number;
    href: string;
    image: string;
    title: string;
    accent: string;
    subtitle: string;
    description: string;
  }[];
  expandedRow: number | null;
  expandFrom: 'left' | 'right';
  onExpand: (id: number) => void;
}

export default function BusinessContents(props: BusinessContentsProps) {
  return (
    <Flex
      w="100%"
      align="stretch"
      justify="center"
      mb={{ base: "16px", md: "36px" }}
      gap={{ base: "16px", md: "36px" }}
      direction={{ base: "column", md: "row" }}
    >
      {props.items.map((item) => (
        <BusinessCard
          key={item.id}
          item={item}
          expandFrom={props.expandFrom}
          onExpand={() => props.onExpand(item.id)}
          isExpanded={props.expandedRow === item.id}
        />
      ))}
    </Flex>
  );
}