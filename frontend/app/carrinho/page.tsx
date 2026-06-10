'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

export default function CarrinhoPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Estados para o cálculo de frete
  const [cep, setCep] = useState('');
  const [frete, setFrete] = useState(0);
  const [endereco, setEndereco] = useState<string | null>(null);
  const [loadingFrete, setLoadingFrete] = useState(false);
  const [erroFrete, setErroFrete] = useState('');

  // Cálculos financeiros
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const total = subtotal + frete;

  // Função para buscar o CEP e calcular o frete
  const calcularFrete = async () => {
    if (cep.replace(/\D/g, '').length !== 8) {
      setErroFrete('Digite um CEP válido com 8 números.');
      return;
    }

    setLoadingFrete(true);
    setErroFrete('');
    setEndereco(null);

    try {
      // Usando a BrasilAPI para buscar os dados reais do CEP
      const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep.replace(/\D/g, '')}`);
      
      if (!response.ok) {
        throw new Error('CEP não encontrado na base logística.');
      }

      const data = await response.json();
      
      // Simulação de regras de negócio B2B para o valor do frete
      let valorSimulado = 0;
      if (data.state === 'SP' || data.state === 'RJ' || data.state === 'MG') {
        valorSimulado = 35.50; // Sudeste
      } else if (data.state === 'CE' || data.state === 'PE' || data.state === 'BA') {
        valorSimulado = 15.00; // Nordeste (Mais barato, simulando armazém local)
      } else {
        valorSimulado = 55.90; // Restante do Brasil
      }

      // Se o subtotal for maior que R$ 1000, frete grátis
      if (subtotal > 1000) {
        valorSimulado = 0;
      }

      setFrete(valorSimulado);
      setEndereco(`${data.city} - ${data.state}`);
      
    } catch (error: any) {
      setErroFrete(error.message || 'Erro ao calcular frete.');
      setFrete(0);
    } finally {
      setLoadingFrete(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans pb-20">
      
      <header className="bg-[#0f172a] text-white p-6 shadow-md border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tight flex items-center gap-3">
            <span className="bg-orange-500 text-slate-950 px-3 py-1 rounded-lg">🛒</span>
            Lote de Suprimentos
          </h1>
          <Link href="/" className="text-sm font-bold text-slate-300 hover:text-orange-400 transition-colors uppercase tracking-wider">
            &larr; Continuar Cotando
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 flex flex-col lg:flex-row gap-8">
        
        {/* Lista de Itens (Esquerda) */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <h2 className="text-lg font-black text-slate-800 uppercase tracking-wider">Itens do Lote ({cart.length})</h2>
              <span className="text-xs font-bold text-slate-500">Pronta Entrega 🚚</span>
            </div>

            {cart.length === 0 ? (
              <div className="p-12 text-center text-slate-500 font-medium flex flex-col items-center">
                <span className="text-4xl mb-4">📦</span>
                Seu lote de suprimentos está vazio.
                <Link href="/" className="mt-4 text-orange-600 font-bold hover:underline">
                  Voltar ao catálogo técnico
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {cart.map((item) => (
                  <div key={item.id} className="p-6 flex flex-col sm:flex-row gap-6 items-center hover:bg-slate-50/50 transition-colors">
                    
                    <div className="w-24 h-24 bg-white border border-slate-200 rounded-xl p-2 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain rounded-lg" />
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <div className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-1">{item.brand}</div>
                      <h3 className="text-sm font-bold text-slate-900 leading-snug mb-2">{item.name}</h3>
                      <div className="text-lg font-black text-slate-800">
                        R$ {item.price.toFixed(2).replace('.', ',')} <span className="text-xs font-normal text-slate-400">/ un</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3 shrink-0">
                      <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-white rounded-md hover:shadow-sm transition-all font-bold">-</button>
                        <span className="w-10 text-center text-sm font-black text-slate-900">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-white rounded-md hover:shadow-sm transition-all font-bold">+</button>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-sm font-black text-slate-900">
                          Total: R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-red-500 hover:text-red-700 font-bold uppercase tracking-wider flex items-center gap-1"
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Resumo do Pedido (Direita) */}
        <div className="w-full lg:w-[380px]">
          <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800 sticky top-8">
            <h2 className="text-sm font-black text-white uppercase tracking-widest mb-6 border-b border-slate-700 pb-4">
              Fechamento do Lote
            </h2>
            
            {/* Bloco de Cálculo de Frete */}
            <div className="mb-6 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Destino Logístico (CEP)
              </label>
              <div className="flex gap-2 mb-2">
                <input 
                  type="text" 
                  maxLength={9}
                  placeholder="Apenas números..." 
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-orange-500"
                />
                <button 
                  onClick={calcularFrete}
                  disabled={loadingFrete || cart.length === 0}
                  className="bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-white font-bold px-4 py-2 rounded-lg text-xs transition-colors"
                >
                  {loadingFrete ? '...' : 'OK'}
                </button>
              </div>
              
              {erroFrete && <p className="text-red-400 text-[10px] font-bold">{erroFrete}</p>}
              
              {endereco && !erroFrete && (
                <div className="mt-3 text-[11px] text-slate-300 flex items-start gap-2">
                  <span className="text-green-400">📍</span>
                  <span>Despacho para:<br/><strong className="text-white">{endereco}</strong></span>
                </div>
              )}
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-slate-300 text-sm">
                <span>Subtotal dos Equipamentos</span>
                <span className="font-bold">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between text-slate-300 text-sm">
                <span>Frete Logístico</span>
                <span className="font-bold">
                  {frete === 0 && subtotal > 0 && endereco ? (
                    <span className="text-green-400">GRÁTIS</span>
                  ) : (
                    `R$ ${frete.toFixed(2).replace('.', ',')}`
                  )}
                </span>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-6 mb-8">
              <div className="flex justify-between items-end">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Custo Total</span>
                <div className="text-3xl font-black text-white">
                  R$ {total.toFixed(2).replace('.', ',')}
                </div>
              </div>
              <p className="text-[10px] text-slate-500 mt-2 text-right">Impostos inclusos conforme regime tributário.</p>
            </div>

            <button 
              disabled={cart.length === 0}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-slate-700 disabled:text-slate-500 active:scale-95 text-slate-950 font-black py-4 rounded-xl text-sm uppercase tracking-widest transition-all shadow-lg shadow-orange-500/20"
            >
              Emitir Pedido de Compra
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}