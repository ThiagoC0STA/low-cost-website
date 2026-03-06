'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Wrench, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { icon: Send, title: 'Você envia', desc: 'Textos, fotos e logo do seu negócio.' },
  { icon: Wrench, title: 'Nós montamos', desc: 'Design personalizado, SEO e responsivo.' },
  { icon: Rocket, title: 'Site no ar', desc: 'Em até 2 dias após coletarmos as infos.' },
];

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (!cards?.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(cards, { y: 30, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Como funciona
          </h2>
          <p className="text-lg text-zinc-400">3 passos e seu site está no ar.</p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#00ff88]/15 flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-[#00ff88]" />
                </div>
                <div className="font-display font-bold text-amber-400 text-sm mb-1">Passo {i + 1}</div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+3.5rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-[#00ff88]/40 to-transparent" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
