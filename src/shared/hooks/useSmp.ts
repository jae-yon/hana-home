import { useQuery } from '@tanstack/react-query';
import supabase from '@/shared/config/supabase';

// 최근 SMP 시세 조회 훅 (한시간 마다 재조회)
export const useLatestSmp = () => {
  return useQuery({
    queryKey: ['smp', 'latest'],
    queryFn: async () => {
      const now = new Date();
      const tradeDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
      const tradeHour = now.getHours();

      // 오늘자 기준 가장 최근 2개의 데이터 조회
      const { data, error } = await supabase
        .from('smp_spot_hourly')
        .select('*')
        .lte('trade_date', tradeDate)
        .lte('trade_hour', tradeHour)
        .order('trade_date', { ascending: false })
        .order('trade_hour', { ascending: false })
        .limit(2);

      if (error) throw error;

      return data;
    },
    // 1시간 1분 동안 fresh
    staleTime: 1000 * 60 * 60 * 1 + 1000 * 60,

    // 1시간 1분 동안 유지
    gcTime: 1000 * 60 * 60 * 1 + 1000 * 60,

    retry: 1,

    // stale 상태일 때 포커스하면 재조회
    refetchOnWindowFocus: true,

    refetchInterval: false,
  });
};

// 전일 SMP 종가 시세 조회 훅 (하루 마다 재조회)
export const useYesterdaySmp = () => {
  return useQuery({
    queryKey: ['smp', 'yesterday'],
    queryFn: async () => {
      const now = new Date();
      const yesterday = new Date(now);
      yesterday.setDate(now.getDate() - 1);
      const tradeDate = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;
      
      // 전일 기준 가장 최근 2개의 데이터 조회
      const { data, error } = await supabase
        .from('smp_spot_hourly')
        .select('*')
        .eq('trade_date', tradeDate)
        .order('trade_hour', { ascending: false })
        .limit(2);

      if (error) throw error;

      return data;
    },
    // 24시간 1분 동안 fresh
    staleTime: 1000 * 60 * 60 * 24 + 1000 * 60,

    // 24시간 1분 동안 유지
    gcTime: 1000 * 60 * 60 * 24 + 1000 * 60,

    retry: 1,

    // stale 상태일 때 포커스하면 재조회
    refetchOnWindowFocus: true,

    refetchInterval: false,
  });
}

// 주간 SMP 조회 훅 (하루 마다 재조회)
export const useWeeklySmp = () => {
  return useQuery({
    queryKey: ['smp', 'weekly'],
    queryFn: async () => {
      const now = new Date();
      const tradeDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

      // 현재 날짜 기준 일주일치 데이터 조회
      const { data, error } = await supabase
        .from('smp_spot_hourly')
        .select('*')
        .lte('trade_date', tradeDate)
        .order('trade_date', { ascending: false })
        .limit(7 * 48);
      
      if (error) throw error;

      return data;
    },
    // 1시간 1분 동안 fresh
    staleTime: 1000 * 60 * 60 * 1 + 1000 * 60,

    // 1시간 1분 동안 유지
    gcTime: 1000 * 60 * 60 * 1 + 1000 * 60,

    retry: 1,

    // stale 상태일 때 포커스하면 재조회
    refetchOnWindowFocus: true,

    refetchInterval: false,
  });
}