// src/components/AnimatedCounter.jsx
import React, { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ targetString, duration = 2000 }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  // Extract numeric value (e.g., "4,300+" -> 4300)
  const numericTarget = parseInt(targetString.replace(/,/g, ''), 10) || 0;
  const suffix = targetString.replace(/[0-9,]/g, ''); // Extracts "+" or other chars

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease-out formula for smooth slowing down at the end
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutProgress * numericTarget));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, numericTarget, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}