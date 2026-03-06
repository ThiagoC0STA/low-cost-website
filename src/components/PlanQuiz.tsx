'use client';

import { useState } from 'react';
import Link from 'next/link';

const QUESTIONS = [
  {
    id: 'business',
    question: 'Qual seu tipo de negócio?',
    options: [
      { value: 'saude', label: 'Clínica / Consultório / Saúde', plan: 'Profissional' },
      { value: 'advocacia', label: 'Advocacia', plan: 'Profissional' },
      { value: 'beleza', label: 'Beleza / Salão', plan: 'Starter' },
      { value: 'consultoria', label: 'Consultoria', plan: 'Profissional' },
      { value: 'servicos', label: 'Prestação de serviços', plan: 'Profissional' },
      { value: 'comercio', label: 'Loja / Comércio', plan: 'Premium' },
    ],
  },
  {
    id: 'pages',
    question: 'Quantas páginas você precisa?',
    options: [
      { value: '5', label: 'Até 5 páginas', plan: 'Starter' },
      { value: '10', label: '5 a 10 páginas', plan: 'Profissional' },
      { value: '20', label: 'Mais de 10 páginas', plan: 'Premium' },
    ],
  },
  {
    id: 'priority',
    question: 'O que é mais importante agora?',
    options: [
      { value: 'preco', label: 'Melhor custo-benefício', plan: 'Starter' },
      { value: 'converter', label: 'Aparecer no Google e converter', plan: 'Profissional' },
      { value: 'completo', label: 'Tudo incluso e prioridade', plan: 'Premium' },
    ],
  },
];

const PLANS = {
  Starter: { price: 300, desc: 'Ideal para começar com o essencial' },
  Profissional: { price: 500, desc: 'O mais escolhido - SEO + suporte' },
  Premium: { price: 850, desc: 'Tudo que você precisa + prioridade' },
};

export function PlanQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string | null>(null);

  const currentQ = QUESTIONS[step];
  const selectedPlan = result ? answers[currentQ?.id] : null;

  const handleSelect = (option: { value: string; plan: string }) => {
    const newAnswers = { ...answers, [currentQ.id]: option.plan };
    setAnswers(newAnswers);

    if (step === QUESTIONS.length - 1) {
      const plans = Object.values(newAnswers) as string[];
      const count: Record<string, number> = {};
      plans.forEach((p) => { count[p] = (count[p] || 0) + 1; });
      const recommended = Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
      setResult(recommended);
    } else {
      setStep(step + 1);
    }
  };

  if (result) {
    const plan = PLANS[result as keyof typeof PLANS];
    return (
      <div className="rounded-3xl border-2 border-[#00ff88] bg-[#00ff88]/5 p-8 text-center">
        <p className="text-[#00ff88] font-medium mb-2">Plano recomendado para você:</p>
        <h3 className="font-display text-3xl font-bold text-white mb-2">{result}</h3>
        <p className="text-2xl font-bold text-[#00ff88] mb-1">R$ {plan?.price.toLocaleString('pt-BR')} à vista</p>
        <p className="text-zinc-400 text-sm mb-6">{plan?.desc}</p>
        <Link
          href="#pricing"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00ff88] px-8 py-3 font-semibold text-black hover:bg-white transition-colors"
        >
          Ver este plano
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 lg:p-8">
      <div className="flex gap-1 mb-6">
        {QUESTIONS.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full ${i <= step ? 'bg-[#00ff88]' : 'bg-zinc-700'}`}
          />
        ))}
      </div>
      <h3 className="font-display font-bold text-xl text-white mb-4">{currentQ.question}</h3>
      <div className="space-y-2">
        {currentQ.options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => handleSelect(opt)}
            className="w-full text-left rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-zinc-300 hover:border-[#00ff88]/50 hover:bg-zinc-800 transition-colors"
          >
            {opt.label}
          </button>
        ))}
      </div>
      {step > 0 && (
        <button
          type="button"
          onClick={() => setStep(step - 1)}
          className="mt-4 text-sm text-zinc-500 hover:text-white"
        >
          Voltar
        </button>
      )}
    </div>
  );
}
