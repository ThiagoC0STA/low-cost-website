'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const WHATSAPP_NUMBER = '5511999999999';
const STORAGE_KEY = 'sitebarato_exit_seen';
const MESSAGE = 'Olá! Vi a oferta de R$ 50 de desconto. Quero aproveitar!';

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth) {
        setOpen(true);
        localStorage.setItem(STORAGE_KEY, '1');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleClose = () => setOpen(false);

  const handleCta = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`, '_blank');
    handleClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden
      />
      <div className="relative w-full max-w-md rounded-3xl border border-amber-500/30 bg-zinc-900 p-8 shadow-2xl">
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 text-zinc-500 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-500/40 px-4 py-1.5 text-sm text-amber-400 font-medium mb-4">
            Espera! Oferta exclusiva
          </div>
          <h3 className="font-display text-2xl font-bold text-white mb-2">
            R$ 50 de desconto no seu site
          </h3>
          <p className="text-zinc-400 mb-6">
            Feche pelo WhatsApp agora e ganhe R$ 50 de desconto em qualquer plano. Válido só hoje.
          </p>
          <button
            type="button"
            onClick={handleCta}
            className="w-full rounded-xl bg-[#25D366] py-4 font-semibold text-white hover:bg-[#20bd5a] transition-colors"
          >
            Quero o desconto no WhatsApp
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="mt-4 text-sm text-zinc-500 hover:text-zinc-400"
          >
            Não, obrigado
          </button>
        </div>
      </div>
    </div>
  );
}
