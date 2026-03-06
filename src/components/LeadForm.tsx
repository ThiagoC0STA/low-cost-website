'use client';

import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

const WHATSAPP_NUMBER = '5541991741000';

const BUSINESS_OPTIONS = [
  { value: 'Clínica / Consultório / Saúde', label: 'Clínica / Consultório / Saúde' },
  { value: 'Advocacia', label: 'Advocacia' },
  { value: 'Beleza / Salão', label: 'Beleza / Salão' },
  { value: 'Consultoria', label: 'Consultoria' },
  { value: 'Educação / Cursos', label: 'Educação / Cursos' },
  { value: 'Prestação de serviços', label: 'Prestação de serviços' },
  { value: 'Comércio / Loja', label: 'Comércio / Loja' },
  { value: 'Outro', label: 'Outro' },
];

export function LeadForm() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ name: '', business: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = data.name && data.business
      ? `Olá! Me chamo ${data.name.trim()} e tenho um negócio de ${data.business}. Gostaria de saber mais sobre o site profissional.`
      : 'Olá! Gostaria de saber mais sobre o site profissional.';

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(url, '_blank');
      setLoading(false);
    }, 500);
  };

  const nextStep = () => {
    if (step < 1) setStep(step + 1);
  };

  const canProceed = step === 0 ? data.name.trim().length >= 2 : true;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-1 mb-4">
        {[0, 1].map((i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? 'bg-[#00ff88]' : 'bg-zinc-700'}`}
          />
        ))}
      </div>

      {step === 0 && (
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
            Como podemos te chamar?
          </label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Seu nome"
            className="w-full rounded-xl border border-zinc-600 bg-zinc-800/50 px-4 py-3 text-white placeholder-zinc-500 focus:border-[#00ff88] focus:outline-none"
            required
          />
        </div>
      )}

      {step === 1 && (
        <div>
          <label htmlFor="business" className="block text-sm font-medium text-zinc-400 mb-2">
            Qual seu tipo de negócio?
          </label>
          <select
            id="business"
            value={data.business}
            onChange={(e) => setData({ ...data, business: e.target.value })}
            className="w-full rounded-xl border border-zinc-600 bg-zinc-800/50 px-4 py-3 text-white focus:border-[#00ff88] focus:outline-none"
            required
          >
            <option value="">Selecione...</option>
            {BUSINESS_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      )}

      <div className="flex gap-3 pt-2">
        {step < 1 ? (
          <button
            type="button"
            onClick={nextStep}
            disabled={!canProceed}
            className="flex-1 rounded-xl bg-[#00ff88] py-3.5 font-semibold text-black transition-colors hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuar
          </button>
        ) : (
          <button
            type="submit"
            disabled={loading}
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#00ff88] py-3.5 font-semibold text-black transition-colors hover:bg-white disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Abrir WhatsApp
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
}
