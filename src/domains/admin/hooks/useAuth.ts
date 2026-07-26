import { useEffect, useState } from 'react';

import { supabase } from '@/shared/config/supabase';

// 관리자 권한 확인
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const verifyToken = async () => {
      const accessToken = sessionStorage.getItem('access_token');
      const refreshToken = sessionStorage.getItem('refresh_token');

      if (!accessToken || !refreshToken) {
        setIsAuthenticated(false);
        return;
      }

      const { data, error } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });

      if (error || !data.session) {
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('refresh_token');
        setIsAuthenticated(false);
        return;
      }

      setIsAuthenticated(true);
    };

    verifyToken();
  }, []);

  return isAuthenticated;
};
