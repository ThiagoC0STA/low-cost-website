'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function pad(num: number) {
  return num.toString().padStart(2, '0');
}

// End of current month - offer "expires"
function getEndOfMonth() {
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
  return end.getTime();
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const endTime = getEndOfMonth();

    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, endTime - now);

      if (diff <= 0) {
        setExpired(true);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  if (expired) {
    return (
      <span className="text-sm text-amber-400 font-medium">
        Oferta encerrada. Entre em contato para condições especiais.
      </span>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center gap-3 rounded-xl bg-amber-500/15 border border-amber-500/30 px-4 py-2"
    >
      <span className="text-sm text-amber-400 font-medium">
        Preço especial até o fim do mês:
      </span>
      <span className="font-mono font-bold text-amber-300 tabular-nums flex gap-1">
        <span>{pad(timeLeft.days)}d</span>
        <span>{pad(timeLeft.hours)}h</span>
        <span>{pad(timeLeft.minutes)}m</span>
        <span>{pad(timeLeft.seconds)}s</span>
      </span>
    </motion.div>
  );
}
