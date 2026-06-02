"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function CalculadoraEPI() {
  const [selectedEPI, setSelectedEPI] = useState("");
  const [dateResult, setDateResult] = useState<{ date: string; category: string; days: number } | null>(null);

  // Base de dados simulada para a calculadora
  const epiLifespan: Record<string, { days: number; category: string }> = {
    capacete: { days: 1825, category: "Proteção Craniana" }, // 5 anos
    bota: { days: 180, category: "Proteção dos Pés" },
    luva_raspa: { days: 30, category: "Proteção das Mãos" },
    oculos: { days: 180, category: "Proteção Ocular" },
    respirador: { days: 15, category: "Proteção Respiratória" },
    cinturao: { days: 1095, category: "Trabalho em Altura" }, // 3 anos
  };

  const calculateDate = () => {
    if (!selectedEPI || !epiLifespan[selectedEPI]) return;

    const data = epiLifespan[selectedEPI];
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + data.days);

    setDateResult({
      date: currentDate.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
      category: data.category,
      days: data.days
    });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans flex flex-col">
      {/* Header Corporativo */}
      <header className="bg-[#0f172a] text-white p-4 shadow-md border-b border-orange-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-black tracking-tighter">
            <span className="bg-orange-500 text-slate-950 px-2 py-0.5 rounded-md mr-1">AM</span>EPI
          </div>
          <div className="text-xs font-bold text-orange-400 uppercase tracking-widest">
            Ferramentas Técnicas Corporativas
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-lg">
          
          <Link href="/" className="inline-block text-sm font-bold text-slate-500 hover:text-orange-500 mb-6 transition-colors flex items-center gap-2">
            &larr; Voltar ao Sistema
          </Link>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
            {/* Header do Card */}
            <div className="bg-slate-900 p-8 border-b border-slate-800 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-700 shadow-inner">
                <span className="text-3xl">⏱️</span>
              </div>
              <h1 className="text-2xl font-black text-white tracking-tight mb-2">Auditoria de Troca</h1>
              <p className="text-sm text-slate-400">
                Calcule a data limite sugerida (NR-6) para a substituição dos equipamentos de segurança da sua equipe.
              </p>
            </div>

            {/* Formulário */}
            <div className="p-8">
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Qual EPI você começou a usar hoje?
                </label>
                <div className="relative">
                  <select 
                    value={selectedEPI}
                    onChange={(e) => setSelectedEPI(e.target.value)}
                    className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-800 font-medium text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all cursor-pointer"
                  >
                    <option value="" disabled>Selecione uma categoria de equipamento...</option>
                    <option value="capacete">Capacete de Segurança (Aba Frontal/Total)</option>
                    <option value="bota">Botina de Segurança (Couro/PVC)</option>
                    <option value="luva_raspa">Luva de Raspa/Vaqueta</option>
                    <option value="oculos">Óculos de Proteção Contra Impactos</option>
                    <option value="respirador">Respirador PFF2 / Máscara</option>
                    <option value="cinturao">Cinturão de Segurança Tipo Paraquedista</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <button 
                onClick={calculateDate}
                disabled={!selectedEPI}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-slate-200 disabled:text-slate-400 active:scale-95 text-slate-950 font-black py-4 rounded-xl text-sm uppercase tracking-wider transition-all shadow-md shadow-orange-500/20"
              >
                Processar Auditoria
              </button>

              {/* Resultado Animado */}
              {dateResult && (
                <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 animate-fade-in-up">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-4">
                    <span className="text-xs font-bold text-slate-500 uppercase">Categoria</span>
                    <span className="text-xs font-black text-slate-800 bg-white px-2 py-1 rounded shadow-sm border border-slate-100">{dateResult.category}</span>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Substituição Obrigatória em</p>
                    <div className="text-2xl font-black text-red-600 tracking-tight">
                      {dateResult.date}
                    </div>
                    <p className="text-xs text-slate-400 mt-2 font-medium">
                      Tempo estimado de vida útil: <span className="text-slate-600 font-bold">{dateResult.days} dias</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-6 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Os prazos são estimativas padrão. Consulte sempre o fabricante e as normas da CIPA local.
          </div>
        </div>
      </main>
    </div>
  );
}