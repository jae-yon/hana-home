import { useQuery } from '@tanstack/react-query';

import supabase from '@/shared/config/supabase';

export const useCalcOptions = () => {
  return useQuery({
    queryKey: ['profit', 'options'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('calc_options')
        .select('*')
        .limit(1);

      if (error) throw error;

      return {
        constructionCost: data[0].construction_cost,
        loanRate: data[0].loan_ratio,
        loanInterestRate: data[0].interest_rate,
      }
    },
  })
}