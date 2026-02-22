import { useQuery } from '@tanstack/react-query';
import supabase from '@/shared/config/supabase';

// 최근 REC 현물 시세 조회 훅 (하루 마다 재조회)
export const useLatestRec = () => {
  return useQuery({
    queryKey: ['rec', 'latest'],
    queryFn: async () => {
      const now = new Date();
      // 오늘 날짜 포맷팅
      const tradeDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

      // 오늘자 기준 가장 최근 2개의 데이터 조회
      const { data, error } = await supabase
        .from('rec_spot_daily')
        .select('*')
        .lte('trade_date', tradeDate)
        .order('trade_date', { ascending: false })
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

// 월간 REC 현물 시세 조회 훅 (하루 마다 재조회)
export const useMonthlyRec = () => {
  return useQuery({
    queryKey: ['rec', 'monthly'],
    queryFn: async () => {
      const now = new Date();
      // 오늘 날짜 포맷팅
      const tradeDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
      // 오늘자 기준 한달 전 날짜 포맷팅
      const oneMonthAgo = new Date(now);
      oneMonthAgo.setMonth(now.getMonth() - 1);
      const oneMonthAgoDate = `${oneMonthAgo.getFullYear()}-${String(oneMonthAgo.getMonth() + 1).padStart(2, '0')}-${String(oneMonthAgo.getDate()).padStart(2, '0')}`;

      // 한달 전 기준 데이터 조회
      const { data, error } = await supabase
        .from('rec_spot_daily')
        .select('*')
        .gte('trade_date', oneMonthAgoDate)
        .lte('trade_date', tradeDate)
        .order('trade_date', { ascending: false })
        .limit(7);

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