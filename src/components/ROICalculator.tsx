'use client';

import { useState } from 'react';

export function ROICalculator() {
  const [monthlyClients, setMonthlyClients] = useState(10);
  const [avgTicket, setAvgTicket] = useState(150);
  const [conversionRate, setConversionRate] = useState(5);

  const lostRevenue = Math.round(monthlyClients * avgTicket * (conversionRate / 100));
  const yearlyLoss = lostRevenue * 12;
  const siteCost = 500;
  const roiMonths = lostRevenue > 0 ? (siteCost / lostRevenue).toFixed(1) : '-';

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 lg:p-8">
      <h3 className="font-display font-bold text-xl text-white mb-2">
        Quanto você deixa de faturar sem site?
      </h3>
      <p className="text-zinc-400 text-sm mb-6">
        Estudos mostram que 5-15% dos visitantes de um site viram clientes. Sem site, você perde esses contatos.
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm text-zinc-500 mb-1">
            Pessoas que te procuram por mês (estimativa)
          </label>
          <input
            type="range"
            min="5"
            max="100"
            value={monthlyClients}
            onChange={(e) => setMonthlyClients(Number(e.target.value))}
            className="w-full accent-[#00ff88]"
          />
          <span className="text-white font-medium">{monthlyClients} pessoas</span>
        </div>

        <div>
          <label className="block text-sm text-zinc-500 mb-1">
            Ticket médio (R$)
          </label>
          <input
            type="range"
            min="50"
            max="500"
            step="25"
            value={avgTicket}
            onChange={(e) => setAvgTicket(Number(e.target.value))}
            className="w-full accent-[#00ff88]"
          />
          <span className="text-white font-medium">R$ {avgTicket}</span>
        </div>

        <div>
          <label className="block text-sm text-zinc-500 mb-1">
            % que virariam clientes com um site (estimativa)
          </label>
          <input
            type="range"
            min="2"
            max="15"
            value={conversionRate}
            onChange={(e) => setConversionRate(Number(e.target.value))}
            className="w-full accent-[#00ff88]"
          />
          <span className="text-white font-medium">{conversionRate}%</span>
        </div>
      </div>

      <div className="rounded-2xl bg-red-500/20 border border-red-500/30 p-4">
        <p className="text-red-400 font-medium text-sm mb-1">Você pode estar perdendo:</p>
        <p className="text-2xl font-display font-bold text-white">
          R$ {lostRevenue.toLocaleString('pt-BR')}/mês
        </p>
        <p className="text-zinc-400 text-sm mt-1">
          = R$ {yearlyLoss.toLocaleString('pt-BR')}/ano
        </p>
      </div>

      <p className="mt-4 text-sm text-zinc-500">
        Um site de R$ {siteCost.toLocaleString('pt-BR')} à vista se paga em <strong className="text-[#00ff88]">{roiMonths} mês(es)</strong> de clientes que você recupera.
      </p>
    </div>
  );
}
