import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { Portfolio, PortfolioInput, PortfolioType } from '@/types/common';

import { supabase } from '@/shared/config/supabase';

export const PORTFOLIO_QUERY_KEY = ['portfolios'] as const;

export type PortfolioCategory = 'all' | Lowercase<PortfolioType>;

// 관리자 권한 확인
async function ensureAdminSession() {
  const accessToken = sessionStorage.getItem('access_token');
  const refreshToken = sessionStorage.getItem('refresh_token');

  if (!accessToken || !refreshToken) {
    throw new Error('로그인 후 이용해주세요.');
  }

  const { data, error } = await supabase.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken,
  });

  if (error || !data.session) {
    throw new Error('로그인 후 이용해주세요.');
  }

  return data.session;
}

// 시공사례 목록 조회 - 관리자
export const usePortfolios = (category: PortfolioCategory = 'all') => {
  return useQuery({
    queryKey: [...PORTFOLIO_QUERY_KEY, category],
    queryFn: async () => {
      await ensureAdminSession();

      let query = supabase.from('portfolios').select('*');

      if (category !== 'all') {
        query = query.eq('type', category.toUpperCase()).order('created_at', { ascending: false });
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      return (data ?? []) as Portfolio[];
    },
  });
};

// 시공사례 등록 - 관리자
export const useCreatePortfolio = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: PortfolioInput) => {
      await ensureAdminSession();

      const { data, error } = await supabase
        .from('portfolios')
        .insert({
          type: input.type,
          title: input.title,
          module: input.module,
          inverter: input.inverter,
          capacity: input.capacity,
          image_url: input.image_url,
          subtitle: input.subtitle ?? null,
          link_url: input.link_url ?? null,
          is_visible: input.is_visible ?? true,
          is_main_visible: input.is_main_visible ?? false,
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      return data as Portfolio;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PORTFOLIO_QUERY_KEY });
      alert('시공사례가 등록되었습니다.');
    },
    onError: (error: Error) => {
      console.error(error);
      alert('시공사례 등록에 실패했습니다. 다시 시도해주세요.');
    },
  });
};

// 시공사례 수정 - 관리자
export const useUpdatePortfolio = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...input }: PortfolioInput & { id: string }) => {
      await ensureAdminSession();

      const { data, error } = await supabase
        .from('portfolios')
        .update({
          type: input.type,
          title: input.title,
          module: input.module,
          inverter: input.inverter,
          capacity: input.capacity,
          image_url: input.image_url,
          subtitle: input.subtitle ?? null,
          link_url: input.link_url ?? null,
          is_visible: input.is_visible ?? true,
          is_main_visible: input.is_main_visible ?? false,
        })
        .eq('id', id)
        .select()
        .single();

      if (error) {
        throw error;
      }

      return data as Portfolio;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PORTFOLIO_QUERY_KEY });
      alert('시공사례가 수정되었습니다.');
    },
    onError: () => {
      alert('시공사례 수정에 실패했습니다. 다시 시도해주세요.');
    },
  });
};

// 시공사례 삭제 - 관리자
export const useDeletePortfolio = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      await ensureAdminSession();

      const { data, error } = await supabase
        .from('portfolios')
        .delete()
        .eq('id', id)
        .select('id');

      if (error) {
        throw error;
      }

      if (!data?.length) {
        throw new Error('삭제할 시공사례를 찾을 수 없습니다.');
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PORTFOLIO_QUERY_KEY });
      alert('시공사례가 삭제되었습니다.');
    },
    onError: () => {
      alert('시공사례 삭제에 실패했습니다. 다시 시도해주세요.');
    },
  });
};
