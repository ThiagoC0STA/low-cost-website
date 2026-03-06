'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calculator, DollarSign, Sparkles } from 'lucide-react';
import { ROICalculator } from './ROICalculator';
import { PriceCalculator } from './PriceCalculator';
import { PlanQuiz } from './PlanQuiz';

gsap.registerPlugin(ScrollTrigger);

const TOOLS = [
  { id: 'roi', label: 'ROI', icon: Calculator, component: ROICalculator },
  { id: 'price', label: 'Simulador', icon: DollarSign, component: PriceCalculator },
  { id: 'quiz', label: 'Quiz', icon: Sparkles, component: PlanQuiz },
];

export function InteractiveToolsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [mobileTab, setMobileTab] = useState(0);

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

  const ActiveComponent = TOOLS[mobileTab].component;

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Ferramentas interativas
          </h2>
          <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            Calcule quanto você perde, simule seu investimento ou descubra o plano ideal.
          </p>
        </div>

        {/* Mobile: tabs - one tool at a time for clarity */}
        <div className="md:hidden mb-6">
          <div className="flex rounded-xl bg-zinc-900/80 p-1 border border-zinc-800">
            {TOOLS.map((tool, i) => (
              <button
                key={tool.id}
                type="button"
                onClick={() => setMobileTab(i)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${
                  mobileTab === i ? 'bg-[#00ff88] text-black' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <tool.icon className="w-4 h-4 shrink-0" />
                {tool.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: single active tool */}
        <div className="md:hidden">
          <ActiveComponent />
        </div>

        {/* Desktop: all 3 tools in grid */}
        <div ref={gridRef} className="hidden md:grid md:grid-cols-3 gap-8">
          <ROICalculator />
          <PriceCalculator />
          <PlanQuiz />
        </div>
      </div>
    </section>
  );
}
