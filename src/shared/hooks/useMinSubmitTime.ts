import { useCallback, useRef } from 'react';

/**
 * 폼 제출 최소 경과 시간을 검사하는 훅.
 * 마운트 시점부터 지정한 시간(초)이 지나야 제출을 허용할 때 사용 (봇 방지 등).
 *
 * @param minSeconds - 제출 허용 최소 경과 시간(초)
 * @returns isAllowedToSubmit - 호출 시점 기준으로 최소 시간이 지났으면 true
 */
export function useMinSubmitTime(minSeconds: number) {
  const startedAt = useRef(Date.now());

  const isAllowedToSubmit = useCallback(() => {
    const elapsedMs = Date.now() - startedAt.current;
    return elapsedMs >= minSeconds * 1000;
  }, [minSeconds]);

  return { isAllowedToSubmit };
}
