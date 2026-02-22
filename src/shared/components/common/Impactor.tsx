import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { Presence } from '@chakra-ui/react';

interface ImpactorProps {
  once?: boolean; // 애니메이션 효과를 계속 유지할지 여부
  delay?: number;
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

export function Impactor(props: ImpactorProps) {
  const ref = useRef(null);
  const isView = useInView(ref, { once: props.once ?? false });

  const animationName = {
    openLeft: 'slide-from-left-custom, fade-in',
    openRight: 'slide-from-right-custom, fade-in',
    openTop: 'slide-from-top-custom, fade-in',
    openBottom: 'slide-from-bottom-custom, fade-in',
    closeLeft: 'slide-to-left-custom, fade-out',
    closeRight: 'slide-to-right-custom, fade-out',
    closeTop: 'slide-to-top-custom, fade-out',
    closeBottom: 'slide-to-bottom-custom, fade-out',
  };

  const animationStart = () => {
    if (props.direction === 'left') {
      return animationName.openLeft;
    } else if (props.direction === 'right') {
      return animationName.openRight;
    } else if (props.direction === 'top') {
      return animationName.openTop;
    } else if (props.direction === 'bottom') {
      return animationName.openBottom;
    } else {
      return animationName.openBottom;
    }
  }

  const animationEnd = () => {
    if (props.direction === 'left') {
      return animationName.closeLeft;
    } else if (props.direction === 'right') {
      return animationName.closeRight;
    } else if (props.direction === 'top') {
      return animationName.closeTop;
    } else if (props.direction === 'bottom') {
      return animationName.closeBottom;
    } else {
      return animationName.closeTop;
    }
  }

  return (
    <div ref={ref}>
      <Presence
        present={isView}
        animationName={{
          _open: `${animationStart()}, fade-in`,
          _closed: `${animationEnd()}, fade-out`,
        }}
        animationDuration={`${props.delay ?? 0.7}s`}
        animationTimingFunction='ease-in-out'
      >
        {props.children}
      </Presence>
    </div>
  );
}