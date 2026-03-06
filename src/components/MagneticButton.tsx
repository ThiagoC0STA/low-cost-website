'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  as?: 'a' | 'button' | 'div';
}

export function MagneticButton({ children, href, className = '', onClick, as = 'a' }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const style = { transform: `translate(${position.x}px, ${position.y}px)` };

  const commonProps = {
    ref: ref as React.RefObject<HTMLAnchorElement & HTMLButtonElement & HTMLDivElement>,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style,
    className,
  };

  if (as === 'a' && href) {
    return (
      <motion.a href={href} {...commonProps} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        {children}
      </motion.a>
    );
  }

  if (as === 'button') {
    return (
      <motion.button type="button" onClick={onClick} {...commonProps} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        {children}
      </motion.button>
    );
  }

  return (
    <motion.div {...commonProps} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.div>
  );
}
