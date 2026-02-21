import { useQuery } from '@tanstack/react-query';

import { fetchByRange } from '@/shared/api/fetchMarketPrice';

// 주간 SMP 시세 조회 훅 (한시간 마다 재조회)
export const useWeeklySmp = () => {
  return useQuery({
    queryKey: ['smp', 'weekly'],
    queryFn: async () => await fetchByRange('smp_spot_hourly', 7, 336),

    // 1시간 동안 fresh
    staleTime: 1000 * 60 * 60,

    // 메모리 유지 시간
    gcTime: 1000 * 60 * 60,

    retry: 1,

    // stale 상태일 때 포커스하면 재조회
    refetchOnWindowFocus: true,

    refetchInterval: false,
  });
};