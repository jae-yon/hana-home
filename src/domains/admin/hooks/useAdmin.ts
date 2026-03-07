import { useMutation } from '@tanstack/react-query'

import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from '@/shared/config/constants';

// 로그인 훅
export const useLogin = () =>{
  return useMutation({
    mutationFn: async ({ email, password }: { email: string, password: string }) => {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/auth/sessions`, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_PUBLISHABLE_KEY,
        },
      });
      
      if (!response.ok) {
        throw new Error('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
      }

      const data = await response.json();

      sessionStorage.setItem('access_token', data.access_token);
      sessionStorage.setItem('refresh_token', data.refresh_token);
    },
    onSuccess: () => {
      window.location.href = '/';
    },
    onError: (error) => {
      alert(error.message);
    },
  })
}

