'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '#problema', label: 'Problema' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#pricing', label: 'Preços' },
  { href: '#exemplos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ['rgba(8,8,8,0.5)', 'rgba(10,10,12,0.97)']
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 60],
    ['0 0 0 rgba(0,0,0,0)', '0 4px 24px rgba(0,0,0,0.3)']
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: headerBg, boxShadow: headerShadow }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl border-b border-white/[0.06] transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="#" className="font-display font-bold text-xl text-white">
            Site<span className="text-[#00ff88]">Barato</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="#contato"
              className="inline-flex items-center rounded-xl bg-[#00ff88] px-5 py-2.5 text-sm font-semibold text-black hover:bg-white transition-colors"
            >
              Começar agora
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden border-t border-white/10"
          >
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3.5 px-4 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 text-base font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link
                  href="#contato"
                  className="block w-full rounded-xl bg-[#00ff88] px-5 py-4 text-center font-semibold text-black hover:bg-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Começar agora
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
