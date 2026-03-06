'use client';

import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const WHATSAPP_NUMBER = '5541991741000';

const QUESTIONS = [
  {
    id: 'pages',
    question: 'Quantas páginas você precisa?',
    options: [
      { value: 'starter', label: 'Até 5 páginas', plan: 'Starter' },
      { value: 'pro', label: '5 a 10 páginas', plan: 'Profissional' },
      { value: 'premium', label: 'Mais de 10', plan: 'Premium' },
    ],
  },
  {
    id: 'priority',
    question: 'O que é mais importante pra você?',
    options: [
      { value: 'price', label: 'Menor investimento', plan: 'Starter' },
      { value: 'balance', label: 'Equilíbrio preço x recursos', plan: 'Profissional' },
      { value: 'full', label: 'Tudo incluso, máximo suporte', plan: 'Premium' },
    ],
  },
];

export function MiniQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const currentQuestion = QUESTIONS[step];
  const hasAnswer = !!answers[currentQuestion?.id];
  const isLastStep = step === QUESTIONS.length - 1;

  const handleSelect = (option: { value: string; plan: string }) => {
    const newAnswers = { ...answers, [currentQuestion.id]: option.plan };
    setAnswers(newAnswers);

    if (isLastStep) {
      setRecommendation(option.plan);
    } else {
      setStep(step + 1);
    }
  };

  const getPlanInfo = (plan: string) => {
    const info: Record<string, { price: number; desc: string }> = {
      Starter: { price: 300, desc: 'Até 5 páginas, design responsivo' },
      Profissional: { price: 500, desc: 'Até 10 páginas, SEO, suporte WhatsApp' },
      Premium: { price: 850, desc: 'Páginas ilimitadas, Analytics, prioridade' },
    };
    return info[plan] ?? info.Profissional;
  };

  const openWhatsApp = () => {
    const planInfo = recommendation ? getPlanInfo(recommendation) : null;
    const msg = planInfo
      ? `Olá! Fiz o quiz e o plano ${recommendation} (R$ ${planInfo.price}) parece ideal. Quero saber mais!`
      : 'Olá! Gostaria de saber mais sobre os planos de site.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  if (recommendation) {
    const planInfo = getPlanInfo(recommendation);
    return (
      <div className="rounded-3xl border border-[#00ff88]/30 bg-[#00ff88]/5 p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-[#00ff88]" />
          <span className="text-sm font-medium text-[#00ff88]">Plano ideal pra você</span>
        </div>
        <h3 className="font-display text-xl font-bold text-white mb-2">{recommendation}</h3>
        <p className="text-zinc-400 text-sm mb-4">{planInfo.desc}</p>
        <p className="text-2xl font-display font-bold text-[#00ff88] mb-6">R$ {planInfo.price.toLocaleString('pt-BR')} à vista</p>
        <button
          type="button"
          onClick={openWhatsApp}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#00ff88] py-4 font-semibold text-black hover:bg-white transition-colors"
        >
          Falar no WhatsApp
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-1 mb-4">
        {QUESTIONS.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? 'bg-[#00ff88]' : 'bg-zinc-700'}`}
          />
        ))}
      </div>
      <h3 className="font-display font-semibold text-lg text-white">{currentQuestion.question}</h3>
      <div className="space-y-2">
        {currentQuestion.options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => handleSelect(opt)}
            className={`w-full text-left rounded-xl border px-4 py-3 transition-all ${
              answers[currentQuestion.id] === opt.plan
                ? 'border-[#00ff88] bg-[#00ff88]/10 text-white'
                : 'border-zinc-600 text-zinc-300 hover:border-zinc-500'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
