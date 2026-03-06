'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SCROLL_THRESHOLD = 700;

export function UrgencyBar() {
  const [vagas, setVagas] = useState(3);
  const hasDropped = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasDropped.current) return;
      if (window.scrollY > SCROLL_THRESHOLD) {
        hasDropped.current = true;
        setVagas(2);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-red-500/10 border-y border-red-500/20 py-2.5">
      <div className="mx-auto max-w-7xl px-4 flex justify-center">
        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded-xl bg-red-500/15 border border-red-500/30 px-4 py-2 text-sm font-semibold text-red-400 hover:bg-red-500/25 hover:border-red-500/40 transition-colors"
        >
          Só{' '}
          <span className="inline-flex min-w-[1ch] justify-center tabular-nums">
            <AnimatePresence mode="wait">
              <motion.span
                key={vagas}
                initial={{ y: -6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 6, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="inline-block text-sm font-extrabold text-white"
              >
                {vagas}
              </motion.span>
            </AnimatePresence>
          </span>{' '}
          vagas restantes para entrega esta semana
        </a>
      </div>
    </section>
  );
}
