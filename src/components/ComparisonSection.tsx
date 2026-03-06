'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const comparison = [
  { feature: 'Design profissional', short: 'Design profissional', mercado: false, nos: true },
  { feature: 'Responsivo (celular)', short: 'Responsivo', mercado: false, nos: true },
  { feature: 'SEO básico', short: 'SEO básico', mercado: false, nos: true },
  { feature: 'Entrega em até 2 dias (após coleta)', short: 'Entrega em 2 dias', mercado: false, nos: true },
  { feature: 'Preço a partir de R$ 300 à vista', short: 'A partir de R$ 300', mercado: false, nos: true },
  { feature: 'Mensalidade obrigatória', short: 'Mensalidade', mercado: true, nos: false },
];

export function ComparisonSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tableRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(tableRef.current, { y: 40 }, {
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 sm:py-40 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Nós vs. mercado tradicional
          </h2>
          <p className="text-xl text-zinc-400">Mesmo resultado, fração do preço.</p>
        </div>

        <div
          ref={tableRef}
          className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[280px] sm:min-w-[400px]">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="px-4 sm:px-6 py-5 text-left font-semibold text-white">O que você precisa</th>
                  <th className="px-3 sm:px-6 py-5 text-center font-semibold text-red-400 whitespace-nowrap">Mercado</th>
                  <th className="px-3 sm:px-6 py-5 text-center font-semibold text-[#00ff88] bg-[#00ff88]/5 whitespace-nowrap">
                    Nós
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                    <td className="px-4 sm:px-6 py-4 text-zinc-300">
                      <span className="hidden sm:inline">{row.feature}</span>
                      <span className="sm:hidden">{row.short}</span>
                    </td>
                    <td className="px-3 sm:px-6 py-4 text-center">
                      {row.mercado ? (
                        <Check className="w-5 h-5 text-red-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-zinc-600 mx-auto" />
                      )}
                    </td>
                    <td className="px-3 sm:px-6 py-4 text-center bg-[#00ff88]/5">
                      {row.nos ? (
                        <Check className="w-5 h-5 text-[#00ff88] mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-zinc-600 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
