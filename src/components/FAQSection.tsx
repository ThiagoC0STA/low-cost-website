'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'O site é realmente profissional?',
    answer: 'Sim. Criamos designs personalizados com suas cores, fotos e textos. Cada site é adaptado ao seu negócio para um resultado profissional que atende suas necessidades.',
  },
  {
    question: 'E se eu não gostar? Tem garantia?',
    answer: 'Sim. 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor. Sem perguntas, sem burocracia. Queremos que você feche tranquilo.',
  },
  {
    question: 'Quanto tempo demora para o site ficar no ar?',
    answer: 'Até 2 dias úteis após você nos enviar as informações (textos, fotos, logo). Coletamos o que precisamos e colocamos seu site no ar rápido. Sem esperar semanas como em agências tradicionais.',
  },
  {
    question: 'Preciso saber de tecnologia?',
    answer: 'Não. Você só precisa nos enviar os textos, fotos e logo. Nós montamos tudo. Sem código, sem complicação.',
  },
  {
    question: 'O site é meu mesmo depois?',
    answer: 'Sim. Você paga uma vez e o site é seu. Você contrata a hospedagem separadamente (ou já pode ter). O conteúdo e o design são seus.',
  },
  {
    question: 'Hospedagem e domínio estão incluídos?',
    answer: 'Não. O valor é pelo desenvolvimento do site. Hospedagem e domínio você contrata separadamente (recomendamos opções baratas) ou usa os que já tem.',
  },
  {
    question: 'Vocês fazem manutenção?',
    answer: 'O site sai completo e funcionando. Se precisar de alterações ou suporte técnico no futuro, entre em contato e conversamos.',
  },
];

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!accordionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(accordionRef.current, { y: 30 }, {
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 xl:py-40 bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-xl text-zinc-400">As dúvidas que todo mundo tem antes de fechar.</p>
        </div>

        <div ref={accordionRef}>
        <Accordion.Root type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <Accordion.Item
              key={faq.question}
              value={`item-${i}`}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/30 overflow-hidden backdrop-blur-sm hover:border-zinc-700 transition-colors"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left font-medium text-white hover:bg-zinc-800/50 transition-colors group data-[state=open]:bg-zinc-800/50 text-sm sm:text-base">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0 overflow-hidden">
                <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
