'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Sparkles } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  { name: 'Starter', price: 300, description: 'Para começar', features: ['Até 5 páginas', 'Design responsivo', 'Email de contato'], highlighted: false },
  { name: 'Profissional', price: 500, description: 'O mais escolhido', features: ['Até 10 páginas', 'Design responsivo', 'SEO básico incluído', 'Suporte por WhatsApp'], highlighted: true },
  { name: 'Premium', price: 850, description: 'Para quem quer mais', features: ['Páginas ilimitadas', 'Tudo do Profissional', 'Integração Google Analytics', 'Formulários avançados', 'Prioridade no suporte'], highlighted: false },
];

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (!cards?.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(cards, { y: 40 }, {
        y: 0,
        duration: 0.6,
        stagger: 0.12,
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
    <section ref={sectionRef} id="pricing" className="py-24 sm:py-32 bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Preço que não machuca o bolso
          </h2>
          <p className="text-xl text-zinc-400 mb-6">
            Sites convencionais: <s className="text-red-400">R$ 2.500 a R$ 8.000</s>. Aqui você paga uma vez e o site é seu.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-500/30 px-5 py-2.5 text-sm text-amber-400 font-medium">
              <Sparkles className="w-4 h-4" />
              Pagamento único · Sem mensalidade
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#00ff88]/20 border border-[#00ff88]/40 px-5 py-2.5 text-sm text-[#00ff88] font-medium">
              Entrega em até 2 dias após coleta das informações
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 border border-red-500/40 px-5 py-2.5 text-sm text-red-400 font-medium">
              Só 3 vagas restantes este mês
            </div>
          </div>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border-2 p-8 transition-all duration-300 ${
                plan.highlighted ? 'border-[#00ff88] bg-[#00ff88]/5 md:scale-105 z-10' : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-600'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-[#00ff88] px-4 py-1.5 text-sm font-bold text-black">Mais popular</span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-white">{plan.name}</h3>
                <p className="text-sm text-zinc-500">{plan.description}</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-display font-bold text-white">R$ {plan.price.toLocaleString('pt-BR')}</span>
                <span className="text-zinc-500"> à vista</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#00ff88] shrink-0" />
                    <span className="text-zinc-400">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contato"
                className={`block w-full rounded-2xl py-4 text-center font-semibold transition-colors ${
                  plan.highlighted ? 'bg-[#00ff88] text-black hover:bg-white' : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                Quero este plano
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-zinc-500">Pagamento único · Site é seu para sempre</p>
      </div>
    </section>
  );
}
