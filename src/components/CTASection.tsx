'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Clock } from 'lucide-react';
import Link from 'next/link';
import { LeadForm } from './LeadForm';

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current?.children || [], { y: 30 }, {
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contato" className="py-32 sm:py-40 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#00ff88]/15 blur-[120px]" />

      <div ref={contentRef} className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-500/40 px-5 py-2.5 text-sm text-amber-400 font-medium mb-6">
            <Clock className="w-4 h-4" />
            Apenas 12 vagas este mês
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Fale com um especialista
          </h2>
          <p className="text-xl text-zinc-400">
            3 passos rápidos e você já está no WhatsApp com a gente.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-700 bg-zinc-900/80 p-6 lg:p-8 backdrop-blur-sm">
          <LeadForm />
        </div>

        <div className="mt-8 flex flex-wrap gap-6 justify-center text-sm text-zinc-500">
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#00ff88]" />
            7 dias de garantia
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#00ff88]" />
            Entrega em até 2 dias após coleta
          </span>
          <span>Sem mensalidade</span>
          <span>Pagamento seguro</span>
        </div>

        <p className="mt-6 text-center">
          <Link href="#pricing" className="text-zinc-500 hover:text-white text-sm">
            Ou ver planos novamente
          </Link>
        </p>
      </div>
    </section>
  );
}
