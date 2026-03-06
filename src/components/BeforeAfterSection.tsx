'use client';

import Image from 'next/image';
const examples = [
  {
    before: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
    title: 'Consultório odontológico',
    result: '+180% em agendamentos online',
  },
  {
    before: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80',
    title: 'Escritório de advocacia',
    result: 'Aparece no Google quando buscam o nome',
  },
];

export function BeforeAfterSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Antes e depois
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            De nada na internet a presença profissional em até 2 dias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {examples.map((ex) => (
            <div key={ex.title} className="space-y-4">
              <h3 className="font-display font-semibold text-xl text-white">{ex.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-red-400 mb-2 font-medium">Antes</p>
                  <div className="aspect-video rounded-xl overflow-hidden border border-zinc-800">
                    <Image
                      src={ex.before}
                      alt="Antes"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover grayscale opacity-80"
                    />
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">Invisível no Google</p>
                </div>
                <div>
                  <p className="text-xs text-[#00ff88] mb-2 font-medium">Depois</p>
                  <div className="aspect-video rounded-xl overflow-hidden border border-[#00ff88]/30">
                    <Image
                      src={ex.after}
                      alt="Depois"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-[#00ff88] mt-1">{ex.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
