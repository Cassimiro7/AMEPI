"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function CalculadoraEPI() {
  const [epiType, setEpiType] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!epiType) return;

    // Regras de negócio fictícias para a validade de cada EPI
    let mesesValidade = 0;
    if (epiType === "capacete") mesesValidade = 60; // 5 anos
    if (epiType === "luva") mesesValidade = 3; // 3 meses
    if (epiType === "bota") mesesValidade = 12; // 1 ano

    // Calculando a data futura
    const dataAtual = new Date();
    dataAtual.setMonth(dataAtual.getMonth() + mesesValidade);
    
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR');
    
    setResult(`O seu EPI deve ser substituído até: ${dataFormatada}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Simples */}
      <header className="bg-[#131921] text-white p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-wider hover:text-orange-400">
            AMEPI
          </Link>
          <span className="font-bold text-orange-400">Ferramentas para Empresas</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Calculadora de Troca de EPI</h1>
        <p className="text-gray-600 mb-8">
          Selecione o equipamento para descobrir a data limite sugerida para a troca, garantindo a segurança da sua equipe.
        </p>

        <form onSubmit={handleCalculate} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Qual EPI você começou a usar hoje?
            </label>
            <select 
              className="w-full border border-gray-300 p-3 rounded-md text-black focus:ring-2 focus:ring-orange-500"
              value={epiType}
              onChange={(e) => setEpiType(e.target.value)}
              required
            >
              <option value="" disabled>Selecione uma opção...</option>
              <option value="capacete">Capacete de Segurança (Aba Frontal)</option>
              <option value="bota">Bota de Segurança (Couro/PVC)</option>
              <option value="luva">Luva de Raspa</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#febd69] hover:bg-[#f3a847] text-gray-900 font-bold py-3 rounded-md transition-colors"
          >
            Calcular Vencimento
          </button>
        </form>

        {/* Resultado na Tela */}
        {result && (
          <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800 font-bold text-lg text-center">
              ⚠️ {result}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}