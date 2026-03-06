'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function GuaranteeSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        scale: 0.95,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/10 via-transparent to-[#00ff88]/10" />
      <div ref={ref} className="relative mx-auto max-w-4xl px-4">
        <div className="flex flex-col sm:flex-row items-center gap-6 rounded-3xl border-2 border-[#00ff88]/30 bg-[#00ff88]/5 p-8 sm:p-10 backdrop-blur-sm">
          <ShieldCheck className="w-16 h-16 text-[#00ff88] shrink-0" />
          <div className="text-center sm:text-left">
            <h3 className="font-display font-bold text-2xl text-white">7 dias de garantia incondicional</h3>
            <p className="text-zinc-400 mt-2 text-lg">
              Se não gostar, devolvemos 100%. Sem perguntas, sem burocracia. Você fecha tranquilo. Entrega em até 2 dias após nos enviar textos, fotos e logo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
