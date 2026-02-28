import { useMutation } from '@tanstack/react-query'

import { AddressToLocationResult } from '@/types/map';

import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from '@/shared/config/constants';

// 주소의 좌표 조회 훅
export const useAddressToLocation = () => {
  return useMutation({
    mutationFn: async (address: string): Promise<AddressToLocationResult> => {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/map/geocoding`, {
        method: 'POST',
        body: JSON.stringify({ address }),
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_PUBLISHABLE_KEY,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch geocoding');
      }

      const json = await response.json();
      const data = (json.data ?? json) as AddressToLocationResult;

      return data;
    },
  })
}