import { useQuery } from '@tanstack/react-query';

import type { Portfolio, PortfolioType } from '@/types/common';
import { supabase } from '@/shared/config/supabase';

export const PUBLIC_PORTFOLIO_QUERY_KEY = ['portfolios', 'public'] as const;

export type PublicPortfolioType = Lowercase<PortfolioType>;

/**
 * 시공사례 공개 목록 조회
 * - is_visible = true
 * - type 필터
 * - created_at 최신순
 */
export const usePublicPortfolios = (type: PublicPortfolioType) => {
  return useQuery({
    queryKey: [...PUBLIC_PORTFOLIO_QUERY_KEY, type],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('portfolios')
        .select('*')
        .eq('is_visible', true)
        .eq('type', type.toUpperCase())
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return (data ?? []) as Portfolio[];
    },
  });
};
