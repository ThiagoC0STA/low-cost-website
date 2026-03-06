'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Check, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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

      {/* Giant background price */}
      <div ref={priceRef} className="absolute right-[-5%] top-1/2 -translate-y-1/2 select-none pointer-events-none">
        <span className="font-display text-[clamp(120px,25vw,280px)] font-extrabold leading-none text-[#00ff88]/8 tracking-tighter">
          R$300
        </span>
      </div>

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[#00ff88]/15 blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#00d26a]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 px-4 py-2 text-sm text-[#00ff88] font-medium mb-6">
              <Zap className="w-4 h-4" />
              O menor preço do Brasil
            </div>

            <div ref={headlineRef} className="overflow-hidden mb-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.05] text-white">
                <span className="word inline-block">Site</span>{' '}
                <span className="word inline-block text-[#00ff88]">profissional</span>{' '}
                <span className="word inline-block">sem</span>{' '}
                <span className="word inline-block">enrolação</span>
              </h1>
            </div>

            <p className="subheadline text-lg sm:text-xl text-zinc-400 max-w-xl mb-8 mx-auto lg:mx-0">
              Para quem não pode pagar R$ 3 mil em agência mas precisa aparecer online.
              Site profissional em 2 dias. <strong className="text-white">A partir de R$ 300 à vista.</strong>
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <MagneticButton href="#pricing" as="a">
                <span className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#00ff88] px-8 py-4 text-lg font-bold text-black transition-all hover:bg-white hover:shadow-[0_0_60px_rgba(0,255,136,0.5)]">
                  Quero meu site agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </MagneticButton>
              <Link
                href="#exemplos"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-zinc-600 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-white/5 hover:border-zinc-500"
              >
                Ver exemplos
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-zinc-500">
              {['Sem cartão para começar', 'Respondo em até 2h', '7 dias de garantia'].map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00ff88]" />
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
              <p className="text-sm text-zinc-500">
                <span className="text-white font-medium">+847</span> negócios já fecharam
              </p>
            </div>
          </div>

          <div ref={imageRef} className="relative lg:pl-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00ff88]/20 to-transparent rounded-3xl blur-2xl" />
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
              <div className="absolute -bottom-5 -left-2 rounded-2xl bg-white px-6 py-4 shadow-xl shadow-black/40 border border-zinc-200">
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
