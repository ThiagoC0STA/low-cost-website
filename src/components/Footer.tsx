'use client';

import { Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-zinc-800 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Site<span className="text-[#00ff88]">Barato</span>
            </h3>
            <p className="text-zinc-500">O site mais barato do Brasil. Qualidade profissional, preço acessível.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="mailto:contato@sitebarato.com.br"
              className="flex items-center gap-3 text-zinc-400 hover:text-[#00ff88] transition-colors"
            >
              <Mail className="w-5 h-5" />
              contato@sitebarato.com.br
            </a>
            <a
              href="tel:+5541991741000"
              className="flex items-center gap-3 text-zinc-400 hover:text-[#00ff88] transition-colors"
            >
              <Phone className="w-5 h-5" />
              (41) 99174-1000
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} Site Barato. Todos os direitos reservados.</p>
          <p className="mt-2">7 dias de garantia · Pagamento único · Pagamento seguro</p>
        </div>
      </div>
    </footer>
  );
}
