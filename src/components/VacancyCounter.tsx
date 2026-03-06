'use client';

import { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const STORAGE_KEY = 'sitebarato_vacancies';
const INITIAL_VAGAS = 5;
const MIN_VAGAS = 1;

export function VacancyCounter() {
  const [vagas, setVagas] = useState(INITIAL_VAGAS);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed) && parsed >= MIN_VAGAS) setVagas(parsed);
    }
  }, []);

  return (
    <div className="inline-flex items-center gap-2 rounded-xl bg-amber-500/15 border border-amber-500/30 px-4 py-2">
      <Users className="w-4 h-4 text-amber-400" />
      <span className="text-sm text-amber-400 font-medium">
        <span className="font-bold text-amber-300">{vagas}</span>{' '}
        {vagas === 1 ? 'vaga restante' : 'vagas restantes'} para entrega esta semana
      </span>
    </div>
  );
}
