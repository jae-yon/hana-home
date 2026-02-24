import { useNavigate, useParams } from 'react-router-dom';
import { LucideArrowRight } from 'lucide-react';

import { Flex, Button, Text } from '@chakra-ui/react';

interface PortfolioNavBarDesktopProps {
  items: {name: string, path: string}[];
}

export default function PortfolioNavBarDesktop(props: PortfolioNavBarDesktopProps) {
  const { items } = props;
  
  const { type } = useParams();

  console.log(type);

  const navigate = useNavigate();
  
  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <Flex
      gap={0}
      shadow="sm"
      width="100%"
      flexDirection="row"
      alignItems="center"
      justify="flex-start"
      backgroundColor="gray.800"
    >
      {items.map((item) => (
        <Button
          key={item.path}
          py={10}
          px={10}
          h="auto"
          minW="auto"
          border="none"
          fontSize="lg"
          color={type === item.path.split('/')[2] ? 'white' : 'white'}
          bg={type === item.path.split('/')[2] ? 'orange.500' : 'transparent'}
          borderRadius={0}
          overflow="hidden"
          position="relative"
          fontWeight="semibold"
          letterSpacing="0.2em"
          fontFamily="NanumSquareNeo"
          _before={{
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '0%',
            height: '100%',
            bg: 'orange.500',
            transition: 'width 0.35s ease-in-out',
            zIndex: 0,
          }}
          _hover={{
            color: 'white',
            _before: {
              width: '100%',
            },
          }}
          _active={{
            color: 'white',
            _before: {
              width: '100%',
            },
          }}
          onClick={() => handleClick(item.path)}
        >
          <Text as="span" position="relative" zIndex={1} display="flex" alignItems="center" gap={2}>
            {item.name}
            <LucideArrowRight size={16} strokeWidth={2} />
          </Text>
        </Button>
      ))}
    </Flex>
  );
}