'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ROICalculator } from './ROICalculator';
import { PriceCalculator } from './PriceCalculator';
import { PlanQuiz } from './PlanQuiz';

gsap.registerPlugin(ScrollTrigger);

export function InteractiveToolsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.children;
    if (!cards?.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(cards, { y: 40 }, {
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Ferramentas interativas
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Calcule quanto você perde, simule seu investimento ou descubra o plano ideal.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          <ROICalculator />
          <PriceCalculator />
          <PlanQuiz />
        </div>
      </div>
    </section>
  );
}
