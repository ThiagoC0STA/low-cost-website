'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Smartphone, Zap, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  { icon: Search, title: 'Clientes te encontram no Google', description: 'SEO básico incluído. Seu negócio aparece quando alguém pesquisa.' },
  { icon: Smartphone, title: 'Site que funciona no celular', description: '70% das buscas são mobile. Seu site precisa ser responsivo.' },
  { icon: Zap, title: 'Entrega em até 2 dias', description: 'Após você nos enviar textos, fotos e logo. Seu site no ar rapidinho, sem esperar semanas.' },
  { icon: Shield, title: 'Suporte por WhatsApp', description: 'Atendimento humano para dúvidas. Sem robôs, resposta rápida.' },
];

export function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.children;
    if (!cards?.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(cards, { y: 30 }, {
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="beneficios" className="py-16 sm:py-24 lg:py-32 bg-[#030303] relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            O que você ganha
          </h2>
          <p className="text-xl text-zinc-400">
            Qualidade de agência, preço que cabe no bolso.
          </p>
        </div>

        {/* Stats row - fills the gap, adds social proof */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-16 mb-8 sm:mb-12 lg:mb-16">
          <div className="text-center">
            <div className="font-display text-3xl sm:text-4xl font-bold text-[#00ff88]">2 dias</div>
            <div className="text-sm text-zinc-500 mt-1">após coleta das infos</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl sm:text-4xl font-bold text-[#00ff88]">100%</div>
            <div className="text-sm text-zinc-500 mt-1">responsivo</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl sm:text-4xl font-bold text-[#00ff88]">7 dias</div>
            <div className="text-sm text-zinc-500 mt-1">de garantia</div>
          </div>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group perspective-card rounded-3xl border border-zinc-800/80 bg-zinc-900/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#00ff88]/40 hover:shadow-[0_0_60px_rgba(0,255,136,0.1)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#00ff88]/15 flex items-center justify-center mb-6 group-hover:bg-[#00ff88]/25 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-[#00ff88]" />
              </div>
              <h3 className="font-display font-semibold text-xl lg:text-2xl text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
