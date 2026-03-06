'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { AnimatedCounter } from './AnimatedCounter';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { name: 'Maria Silva', role: 'Dentista', city: 'São Paulo, SP', content: 'Tinha receio de ser "site barato e ruim". Fiquei surpresa com a qualidade. Meus pacientes elogiam e consegui agendar 3x mais consultas pelo site.', rating: 5, image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=96&h=96&fit=crop&crop=face' },
  { name: 'Roberto Costa', role: 'Advogado', city: 'Belo Horizonte, MG', content: 'Como MEI, não tinha budget para agência. O site ficou profissional, aparece no Google e paguei menos que uma consultoria jurídica. Recomendo.', rating: 5, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face' },
  { name: 'Ana Paula Mendes', role: 'Consultora de beleza', city: 'Curitiba, PR', content: 'Em 2 dias já estava com o site no ar. Minhas clientes agendam pelo WhatsApp que coloquei no site. O investimento se paga sozinho.', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face' },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
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
    <section ref={sectionRef} id="exemplos" className="py-16 sm:py-24 lg:py-32 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white mb-4 sm:mb-6">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>4,8/5 em mais de 200 avaliações</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4">
            Mais de <AnimatedCounter end={847} className="text-[#00ff88]" /> negócios já confiam
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Advogados, dentistas, consultórios, salões, consultores e muito mais.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl sm:rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 backdrop-blur-sm hover:border-[#00ff88]/30 transition-colors duration-300">
              <Quote className="w-12 h-12 text-[#00ff88]/40 mb-4" />
              <p className="text-zinc-300 leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Image src={t.image} alt={t.name} width={48} height={48} className="rounded-full object-cover ring-2 ring-zinc-700" />
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-zinc-500">{t.role} · {t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
