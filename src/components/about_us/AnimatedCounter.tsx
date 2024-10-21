"use client"
// AnimatedCounter.tsx
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number; // Duration in seconds (optional)
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, duration = 2.5 }) => {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let count = 0;
    const increment = Math.ceil(target / (duration * 1000 / 10));
    const interval = setInterval(() => {
      count += increment;
      if (count > target) count = target;
      if (countRef.current) {
        countRef.current.textContent = count.toString();
      }
      if (count === target) {
        clearInterval(interval);
      }
    }, 10);
    
    return () => clearInterval(interval);
  }, [target, duration]);

  return <span ref={countRef}>{0}</span>;
};

export default AnimatedCounter;
