import { useQuery } from '@tanstack/react-query';

import { fetchByRange } from '@/shared/api/fetchMarketPrice';

// 월간 REC 현물 시세 조회 훅 (하루 마다 재조회)
export const useMonthlyRec = () => {
  // KST 기준 날짜
  const today = new Date().toLocaleDateString('sv-SE');

  return useQuery({
    queryKey: ['rec', today],
    queryFn: async () => await fetchByRange('rec_spot_daily', 30, 30),

    // 하루 동안 절대 stale 안 됨
    staleTime: Infinity,

    // 메모리 정리 (적당히 1시간)
    gcTime: 1000 * 60 * 60,

    retry: 1,
    refetchOnWindowFocus: false,
  });
};