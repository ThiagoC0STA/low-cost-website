'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Check, Shield } from 'lucide-react';
import Image from 'next/image';
import { MagneticButton } from './MagneticButton';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(priceRef.current, {
        opacity: 0,
        scale: 0.5,
        y: 100,
        duration: 1,
      })
        .from(
          headlineRef.current?.querySelectorAll('.word') || [],
          { opacity: 0, y: 80, duration: 0.8, stagger: 0.12, ease: 'power3.out' },
          '-=0.6'
        )
        .from(
          containerRef.current?.querySelector('.subheadline') || [],
          { opacity: 0, y: 30, duration: 0.6 },
          '-=0.4'
        )
        .from(
          ctaRef.current?.children || [],
          { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 },
          '-=0.3'
        )
        .from(
          imageRef.current,
          { opacity: 0, x: 60, scale: 0.95, duration: 1, ease: 'power2.out' },
          '-=1.2'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden gradient-mesh">
      <div className="noise-overlay" />

      {/* Giant background price - hidden on mobile */}
      <div ref={priceRef} className="absolute right-[-5%] top-1/2 -translate-y-1/2 select-none pointer-events-none hidden sm:block">
        <span className="font-display text-[clamp(120px,25vw,280px)] font-extrabold leading-none text-[#00ff88]/8 tracking-tighter">
          R$300
        </span>
      </div>

      {/* Warm orbs - more balanced glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[min(400px,80vw)] h-64 rounded-full bg-[#00ff88]/12 blur-[80px]" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full bg-[#00d26a]/8 blur-[100px]" />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            {/* Badge - refined pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-zinc-300 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]" />
              </span>
              O menor preço do Brasil
            </div>

            <div ref={headlineRef} className="overflow-hidden mb-8">
              <h1 className="font-display text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white">
                <span className="word inline-block">Site</span>{' '}
                <span className="word inline-block bg-gradient-to-r from-[#00ff88] to-[#00d26a] bg-clip-text text-transparent">profissional</span>{' '}
                <span className="word inline-block">sem</span>{' '}
                <span className="word inline-block">enrolação</span>
              </h1>
            </div>

            <p className="subheadline text-base sm:text-lg lg:text-xl text-zinc-400 max-w-xl mb-10 mx-auto lg:mx-0 leading-relaxed">
              Para quem não pode pagar R$ 3 mil em agência mas precisa aparecer online.
              Site profissional em 2 dias.{' '}
              <span className="text-[#00ff88] font-semibold">A partir de R$ 300 à vista.</span>
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <MagneticButton href="#pricing" as="a">
                <span className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#00ff88] px-8 py-4 text-base sm:text-lg font-bold text-black shadow-[0_4px_24px_rgba(0,255,136,0.35)] transition-all hover:bg-white hover:shadow-[0_8px_32px_rgba(0,255,136,0.45)]">
                  Quero meu site agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </MagneticButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
              {['Sem cartão para começar', 'Respondo em até 2h', '7 dias de garantia'].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00ff88]/15">
                    <Check className="h-3 w-3 text-[#00ff88]" />
                  </span>
                  {item}
                </span>
              ))}
            </div>

            {/* Trust row */}
            <div className="mt-10 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=64&h=64&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
                ].map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt=""
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover border-2 border-[#030303]"
                  />
                ))}
              </div>
              <p className="text-sm text-zinc-400">
                <span className="text-white font-semibold">+847</span> negócios já fecharam
              </p>
            </div>
          </div>

          <div ref={imageRef} className="relative lg:pl-8 mt-10 lg:mt-0">
            <div className="relative max-w-sm mx-auto lg:max-w-none lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00ff88]/20 to-transparent rounded-3xl blur-2xl hidden lg:block" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 shadow-2xl ring-1 ring-white/5">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/img1.png"
                    alt="Professional website"
                    fill
                    className="object-cover saturate-[0.85] contrast-[1.05]"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/15 via-transparent to-transparent" aria-hidden />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-display font-semibold">sitebarato.com.br</span>
                    <span className="text-xs text-zinc-500">SSL seguro</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-2 sm:-bottom-5 sm:right-auto sm:-left-2 rounded-2xl bg-white px-4 py-3 sm:px-6 sm:py-4 shadow-xl shadow-black/40 border border-zinc-200">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-display font-bold text-black">R$ 500</span>
                  <span className="text-sm text-zinc-600"> à vista</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-xs text-zinc-500">
                  <Shield className="w-3.5 h-3.5 text-[#00ff88]" />
                  Plano mais popular
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
