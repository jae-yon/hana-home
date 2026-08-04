import { useQuery } from '@tanstack/react-query';

import type { Portfolio } from '@/types/common';
import { supabase } from '@/shared/config/supabase';

export const MAIN_PORTFOLIO_QUERY_KEY = ['portfolios', 'main'] as const;

/**
 * 메인 페이지 시공사례 조회
 * - is_main_visible = true
 * - created_at 최신순
 */
export const useMainPortfolios = () => {
  return useQuery({
    queryKey: MAIN_PORTFOLIO_QUERY_KEY,
    queryFn: async () => {
      const { data, error } = await supabase
        .from('portfolios')
        .select('*')
        .eq('is_main_visible', true)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return (data ?? []) as Portfolio[];
    },
  });
};
