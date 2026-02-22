import { useEffect, useState } from 'react';

interface UseCountUpProps {
  target: number;
  duration: number;
  enabled?: boolean;
  decimals?: number;
  /** 이 값이 바뀌면 애니메이션을 처음부터 다시 실행합니다 (예: region) */
  resetKey?: unknown;
}

/**
 * 숫자를 카운트 업하는 훅
 * @param props 
 * @returns {number} 카운트 업된 숫자
 * @description 숫자를 카운트 업하는 훅
 * @example
 * const value = useCountUp({ target: 100, duration: 1000 });
 * console.log(value); // 100
 */

export const useCountUp = (props: UseCountUpProps) => {
  const { target, duration, enabled = true, decimals = 2, resetKey } = props;

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let rafId: number;
    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      const raw = eased * target;

      // 소수점 자릿수 고정
      const fixed = Number(raw.toFixed(decimals));
      setValue(fixed);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setValue(Number(target.toFixed(decimals)));
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [enabled, target, duration, decimals, resetKey]);

  return value;
};

/**
 * 카운트업 숫자를 천 단위 구분자 포맷으로 변환
 */
export function formatCountUpPrice(value: number, decimals = 0): string {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}