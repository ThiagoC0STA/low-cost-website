'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertCircle, SearchX, Users, TrendingDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  { icon: SearchX, title: 'Invisível no Google', description: 'Clientes procuram seu serviço mas encontram apenas concorrentes.' },
  { icon: Users, title: 'Clientes indo para concorrentes', description: 'Quem tem site aparece primeiro. Sem site = zero credibilidade.' },
  { icon: TrendingDown, title: 'Deixando de faturar', description: 'Cada dia sem site é dinheiro que escorre para quem está online.' },
  { icon: AlertCircle, title: '"Site é caro"', description: 'Agora essa desculpa acabou. Menos que um delivery por mês.' },
];

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (!cards?.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(cards, { y: 30 }, {
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="problema" className="py-16 sm:py-24 lg:py-32 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            Seu negócio está <span className="text-red-400">invisível</span> na internet?
          </h2>
          <p className="text-xl text-zinc-400">
            Enquanto você adia, seus clientes vão para quem já aparece online.
          </p>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-red-500/30 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center mb-5">
                <problem.icon className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-2">{problem.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-medium text-white">
            <span className="text-red-400">Cada dia sem site</span> = clientes que você perde
          </p>
        </div>
      </div>
    </section>
  );
}
