import { Region } from '@/types/common';
import { Box, Button, Group, Heading, Stack, Text } from '@chakra-ui/react';

interface InSightHeadProps {
  region: Region;
  setRegion: (region: Region) => void;
}

export function InSightHeadDesktop(props: InSightHeadProps) {
  return (
    <Box display='flex' flexDirection='column' gap={4} mb={8}>
      <Box width="100%" display="flex" alignItems="center" gap={4}>
        <Heading
          fontSize={{ base: "36px", md: "52px" }}
          lineHeight="1.1"
        >
          실시간 가격 동향
        </Heading>
        <Box flex={1} height="1.5px" bg="gray.200" />
      </Box>

      <Box display='flex' alignItems='center' justifyContent='space-between' px={1} gap={4}>
        <Text fontSize='xl' fontWeight='medium' textAlign='start' color='gray.500'>최신 가격 동향을 알아보고 시장 상황을 파악해 보세요</Text>
        <Stack>
          <Group
            fontFamily='NanumSquareNeo'
          >
            <Button 
              variant='outline' 
              border='1px solid'
              bg={props.region === 'ALL' ? 'orange.50' : 'white'}
              color={props.region === 'ALL' ? 'orange.500' : 'gray.500'} 
              borderColor={props.region === 'ALL' ? 'orange.500' : 'gray.500'} 
              borderRadius='lg' 
              fontWeight='bold'
              fontSize='md'
              px={6} 
              py={2}
              onClick={() => props.setRegion('ALL')}
              _hover={{
                color: 'orange.500',
                borderColor: 'orange.500',
                backgroundColor: 'orange.50',
              }}
            >
              통합
            </Button>
            <Button 
              variant='outline' 
              border='1px solid'
              bg={props.region === 'LAND' ? 'blue.50' : 'white'}
              color={props.region === 'LAND' ? 'blue.500' : 'gray.500'} 
              borderColor={props.region === 'LAND' ? 'blue.500' : 'gray.500'} 
              borderRadius='lg' 
              fontWeight='bold'
              fontSize='md'
              px={6} 
              py={2}
              onClick={() => props.setRegion('LAND')}
              _hover={{
                color: 'blue.500',
                borderColor: 'blue.500',
                backgroundColor: 'blue.50',
              }}
            >
              육지
            </Button>
            <Button 
              variant='outline' 
              border='1px solid'
              bg={props.region === 'JEJU' ? 'blue.50' : 'white'}
              color={props.region === 'JEJU' ? 'blue.500' : 'gray.500'} 
              borderColor={props.region === 'JEJU' ? 'blue.500' : 'gray.500'} 
              borderRadius='lg' 
              fontWeight='bold'
              fontSize='md'
              px={6} 
              py={2}
              onClick={() => props.setRegion('JEJU')}
              _hover={{
                color: 'blue.500',
                borderColor: 'blue.500',
                backgroundColor: 'blue.50',
              }}
            >
              제주
            </Button>
          </Group>
        </Stack>
      </Box>
    </Box>
  );
}

export function InSightHeadMobile(props: InSightHeadProps) {
  return (
    <Box display='flex' flexDirection='column' gap={4}>
      <Heading
        fontSize={{ base: "36px", md: "52px" }}
        fontWeight="700"
        lineHeight="1.1"
        letterSpacing="-0.02em"
        textAlign='center'
      >
        실시간 가격 동향
      </Heading>
      <Text fontSize='lg' fontWeight='medium' textAlign='center' color='gray.500' ms={1}>최신 가격 동향을 알아보고 시장 상황을 파악해 보세요</Text>
      <Stack display='flex' alignItems='center' justifyContent='center'>
        <Group
          marginTop={4}
          fontFamily='NanumSquareNeo'
        >
          <Button 
            variant='outline' 
            border='1px solid'
            bg={props.region === 'ALL' ? 'green.50' : 'white'}
            color={props.region === 'ALL' ? 'green.500' : 'gray.500'} 
            borderColor={props.region === 'ALL' ? 'green.500' : 'gray.500'} 
            borderRadius='lg' 
            fontWeight='bold'
            fontSize='md'
            px={6} 
            py={2}
            onClick={() => props.setRegion('ALL')}
            _hover={{
              color: 'green.500',
              borderColor: 'green.500',
              backgroundColor: 'green.50',
            }}
          >
            통합
          </Button>
          <Button 
            variant='outline' 
            border='1px solid'  
            bg={props.region === 'LAND' ? 'orange.50' : 'white'}
            color={props.region === 'LAND' ? 'orange.500' : 'gray.500'} 
            borderColor={props.region === 'LAND' ? 'orange.500' : 'gray.500'} 
            borderRadius='lg' 
            fontWeight='bold'
            fontSize='md'
            px={6} 
            py={2}
            onClick={() => props.setRegion('LAND')}
            _hover={{
              color: 'orange.500',
              borderColor: 'orange.500',
              backgroundColor: 'orange.50',
            }}
          >
            육지
          </Button>
          <Button 
            variant='outline' 
            border='1px solid'
            bg={props.region === 'JEJU' ? 'blue.50' : 'white'}
            color={props.region === 'JEJU' ? 'blue.500' : 'gray.500'} 
            borderColor={props.region === 'JEJU' ? 'blue.500' : 'gray.500'} 
            borderRadius='lg' 
            fontWeight='bold'
            fontSize='md'
            px={6} 
            py={2}
            onClick={() => props.setRegion('JEJU')}
            _hover={{
              color: 'blue.500',
              borderColor: 'blue.500',
              backgroundColor: 'blue.50',
            }}
          >
            제주
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}