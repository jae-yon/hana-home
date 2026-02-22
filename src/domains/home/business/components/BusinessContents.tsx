import { Flex } from '@chakra-ui/react';

import BusinessCard from './BusinessCard';

interface BusinessContentsProps {
  items: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    accent: string;
    href: string;
  }[];
  expandedRow: number | null;
  onExpand: (id: number) => void;
  expandFrom: 'left' | 'right';
}

export default function BusinessContents(props: BusinessContentsProps) {
  return (
    <Flex
      justify="center"
      direction={{ base: "column", md: "row" }}
      gap={{ base: "16px", md: "32px" }}
      mb={{ base: "16px", md: "32px" }}
      align="stretch"
    >
      {props.items.map((item) => (
        <BusinessCard
          key={item.id}
          item={item}
          isExpanded={props.expandedRow === item.id}
          onExpand={() => props.onExpand(item.id)}
          expandFrom={props.expandFrom}
        />
      ))}
    </Flex>
  );
}