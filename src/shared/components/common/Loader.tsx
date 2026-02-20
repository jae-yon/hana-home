import { Box, Spinner, Text } from '@chakra-ui/react';

export default function Loader() {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' height='100vh' gap={2}>
      <Spinner size='xl' color='gray.solid' css={{ "--spinner-track-color": "colors.gray.200" }} animationDuration={'0.7s'} borderWidth={3} />
      <Text fontSize='sm' color='gray.solid' fontWeight='medium' animation={'pulse'}>loading</Text>
    </Box>
  );
}