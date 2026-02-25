import { Box, Button, Link, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handlePreviousClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' height='100vh' gap={2} fontFamily='NanumSquareNeo'>
        <Text fontSize='9xl' fontWeight='bold' color='gray.700' fontFamily='A2z'>4<Text as='span' color='red.500'>0</Text>4</Text>
        <Text fontSize='xl' fontWeight='700' color='gray.700'>페이지를 찾을 수 없습니다:(</Text>
        <Text fontSize='sm' fontWeight='700' color='gray.500'>요청하신 페이지가 삭제되었거나, 일시적으로 사용이 불가능합니다.</Text>

        <Box display='flex' alignItems='center' justifyContent='center' marginTop={4} gap={2}>
          <Link onClick={handleHomeClick}>
            <Button size='lg' fontWeight='700' bg='orange.600' color='white' borderRadius='md' fontSize='lg' paddingX={8} paddingY={6}>홈으로</Button>
          </Link>
          <Link onClick={handlePreviousClick}>
            <Button size='lg' fontWeight='700' bg='gray.800' color='white' borderRadius='md' fontSize='lg' paddingX={8} paddingY={6}>이전 페이지</Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}