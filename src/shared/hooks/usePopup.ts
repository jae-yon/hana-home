import { useQuery } from '@tanstack/react-query';

import type { Popup } from '@/types/common';
import { supabase } from '@/shared/config/supabase';

export const ACTIVE_POPUP_QUERY_KEY = ['popups', 'active'] as const;

/**
 * 메인 페이지 노출용 활성 팝업 조회
 * - is_active = true
 * - expires_at 이 없거나 현재 시각 이후
 */
export const useActivePopups = () => {
  return useQuery({
    queryKey: ACTIVE_POPUP_QUERY_KEY,
    queryFn: async () => {
      const now = new Date().toISOString();

      const { data, error } = await supabase
        .from('popups')
        .select('*')
        .eq('is_active', true)
        .or(`expires_at.is.null,expires_at.gt.${now}`)
        .order('priority', { ascending: true })
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return (data ?? []) as Popup[];
    },
  });
};
