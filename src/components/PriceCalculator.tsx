'use client';

import { useState } from 'react';
import Link from 'next/link';

const BASE_PRICE = 300;
const PRICE_PER_PAGE = 30;
const SEO_ADD = 100;
const ANALYTICS_ADD = 100;

export function PriceCalculator() {
  const [pages, setPages] = useState(5);
  const [seo, setSeo] = useState(true);
  const [analytics, setAnalytics] = useState(false);

  const price = Math.min(
    BASE_PRICE + (pages - 5) * PRICE_PER_PAGE + (seo ? SEO_ADD : 0) + (analytics ? ANALYTICS_ADD : 0),
    850
  );

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 lg:p-8">
      <h3 className="font-display font-bold text-xl text-white mb-2">
        Simule seu investimento
      </h3>
      <p className="text-zinc-400 text-sm mb-6">
        Ajuste conforme sua necessidade. Pagamento único.
      </p>

      <div className="space-y-6 mb-6">
        <div>
          <label className="block text-sm text-zinc-500 mb-2">
            Quantas páginas? ({pages})
          </label>
          <input
            type="range"
            min="5"
            max="20"
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
            className="w-full accent-[#00ff88]"
          />
          <div className="flex justify-between text-xs text-zinc-600 mt-1">
            <span>5</span>
            <span>20+</span>
          </div>
        </div>

        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={seo}
              onChange={(e) => setSeo(e.target.checked)}
              className="rounded border-zinc-600 bg-zinc-800 text-[#00ff88] focus:ring-[#00ff88]"
            />
            <span className="text-zinc-300">SEO básico (aparecer no Google)</span>
            <span className="text-[#00ff88] text-sm">+R$ 100</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="rounded border-zinc-600 bg-zinc-800 text-[#00ff88] focus:ring-[#00ff88]"
            />
            <span className="text-zinc-300">Google Analytics</span>
            <span className="text-[#00ff88] text-sm">+R$ 100</span>
          </label>
        </div>
      </div>

      <div className="rounded-2xl bg-[#00ff88]/10 border border-[#00ff88]/30 p-4 mb-4">
        <p className="text-zinc-400 text-sm">Seu investimento (único):</p>
        <p className="text-3xl font-display font-bold text-[#00ff88]">
          R$ {price.toLocaleString('pt-BR')}
        </p>
      </div>

      <Link
        href="#contato"
        className="block w-full rounded-xl bg-[#00ff88] py-3.5 text-center font-semibold text-black hover:bg-white transition-colors"
      >
        Quero este valor
      </Link>
    </div>
  );
}
