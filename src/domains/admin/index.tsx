import { useState } from 'react';

import { Box, Button, HStack, Input, Link, Text, VStack } from '@chakra-ui/react';
import { useLogin } from './hooks/useAdmin';

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: loginMutation, isPending } = useLogin();
  
  const handleLogin = () => {
    if (!id || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }
    loginMutation({ email: id, password: password });
  };

  return (
    <Box
      gap={8}
      minH="100vh"
      bg="gray.100"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Link href="/" _hover={{ textDecoration: "none" }} outline="none">
        <HStack>
          <VStack align="center">
            <Text
              fontSize="10px"
              fontWeight="600"
              color="orange.600"
              letterSpacing="0.1em"
              textTransform="uppercase"
              lineHeight={1}
            >
              HanaSolution
            </Text>
            <Text
              fontSize="3xl"
              fontWeight="700"
              color="gray.700"
              letterSpacing="-0.025em"
              lineHeight={1.3}
            >
              하나솔루션
            </Text>
          </VStack>
        </HStack>
      </Link>

      <VStack gap={4} w="100%" maxW="360px" fontFamily="Pretendard">
        <Input 
          size="xl" 
          outline="none"
          borderRadius="lg"
          type="text"
          placeholder="아이디" 
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Input 
          size="xl" 
          outline="none"
          type="password" 
          borderRadius="lg"
          placeholder="비밀번호" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button 
          w="100%" 
          size="xl"
          bg="gray.800"
          fontSize="xl"
          color="white"
          borderRadius="lg"
          letterSpacing="0.1em"
          _hover={{
            bg: "orange.600",
          }}
          onClick={handleLogin}
          loading={isPending}
          disabled={isPending}
        >
          로그인
        </Button>
      </VStack>
    </Box>
  );
}
