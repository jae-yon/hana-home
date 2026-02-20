import { useEffect, useState } from 'react';

const DESKTOP_BREAKPOINT = 968;

/**
 * 반응형 처리를 위한 훅
 * @param breakpoint - 데스크톱으로 간주할 최소 너비 (기본값: 968)
 * @returns {boolean} isDesktop - breakpoint 이상이면 true
 */
export function useResponsive(breakpoint = DESKTOP_BREAKPOINT) {
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' && window.innerWidth >= breakpoint);

  useEffect(() => {
    const updateIsDesktop = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    updateIsDesktop();

    window.addEventListener('resize', updateIsDesktop);
    return () => window.removeEventListener('resize', updateIsDesktop);
  }, [breakpoint]);

  return { isDesktop };
}
