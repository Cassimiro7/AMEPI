"use client";

import { useState } from 'react';
import Link from 'next/link';
import { products } from '../../data/products'; // Ajuste o caminho se necessário

export default function CarrinhoPage() {
  // Inicializando o carrinho com alguns itens para demonstração
  const [cartItems, setCartItems] = useState([
    { product: products[0], quantity: 2 }, // Capacete
    { product: products[3], quantity: 1 }, // Bota
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.product.id === id) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const frete = subtotal > 0 ? 45.00 : 0; // Frete fixo apenas se houver itens
  const total = subtotal + frete;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans pb-20">
      {/* Header Simplificado */}
      <header className="bg-[#0f172a] text-white p-4 shadow-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xs font-bold text-slate-300 hover:text-orange-400 transition-colors uppercase tracking-wider flex items-center gap-2">
            <span>&larr;</span> Voltar ao Catálogo
          </Link>
          <div className="text-lg font-black tracking-tighter">
            <span className="bg-orange-500 text-slate-950 px-2 py-0.5 rounded-md">AM</span><span className="text-orange-500">EPI</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Carrinho de Cotação</h1>
          <p className="text-sm text-slate-500 mt-1">Gerencie os equipamentos selecionados para faturamento</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Coluna da Esquerda - Lista de Itens */}
          <div className="w-full lg:w-2/3">
            {cartItems.length === 0 ? (
              <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center shadow-sm">
                <div className="text-6xl mb-4">🛒</div>
                <h2 className="text-xl font-bold text-slate-800 mb-2">Seu carrinho está vazio</h2>
                <p className="text-slate-500 mb-6">Nenhum equipamento foi adicionado à sua cotação ainda.</p>
                <Link href="/" className="bg-slate-900 hover:bg-orange-500 text-white hover:text-slate-950 font-bold py-3 px-8 rounded-xl transition-all shadow-md">
                  Explorar Catálogo
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="hidden sm:grid grid-cols-12 gap-4 p-4 border-b border-slate-100 bg-slate-50 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <div className="col-span-6">Equipamento</div>
                  <div className="col-span-3 text-center">Quantidade</div>
                  <div className="col-span-3 text-right">Subtotal</div>
                </div>

                <div className="divide-y divide-slate-100">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-6 items-center group transition-colors hover:bg-slate-50/50">
                      
                      {/* Info do Produto */}
                      <div className="col-span-1 sm:col-span-6 flex gap-4 items-center">
                        <div className="w-20 h-20 bg-white border border-slate-200 rounded-xl p-2 shrink-0">
                          <img src={item.product.image} alt={item.product.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-orange-600 uppercase mb-1">{item.product.brand}</div>
                          <Link href={`/produto/${item.product.id}`} className="text-sm font-bold text-slate-800 hover:text-orange-500 line-clamp-2 transition-colors">
                            {item.product.name}
                          </Link>
                          <div className="text-xs text-slate-400 mt-1">R$ {item.product.price.toFixed(2).replace('.', ',')} / unid.</div>
                        </div>
                      </div>

                      {/* Controles de Quantidade */}
                      <div className="col-span-1 sm:col-span-3 flex justify-center items-center gap-3">
                        <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200">
                          <button onClick={() => updateQuantity(item.product.id, -1)} className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-sm rounded-md transition-all font-bold">
                            -
                          </button>
                          <span className="w-10 text-center text-sm font-bold text-slate-800">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.id, 1)} className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-sm rounded-md transition-all font-bold">
                            +
                          </button>
                        </div>
                      </div>

                      {/* Preço e Remover */}
                      <div className="col-span-1 sm:col-span-3 flex sm:flex-col justify-between items-end gap-2">
                        <div className="text-lg font-black text-slate-900 tracking-tight">
                          <span className="text-xs font-bold mr-1 text-slate-400">R$</span>
                          {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                        </div>
                        <button onClick={() => removeItem(item.product.id)} className="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                          Remover
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Coluna da Direita - Resumo */}
          <div className="w-full lg:w-1/3">
            <div className="bg-slate-900 text-white rounded-3xl p-8 sticky top-24 border border-slate-800 shadow-2xl">
              <h2 className="text-xl font-black tracking-tight mb-6 flex items-center gap-3">
                <span className="w-2 h-6 bg-orange-500 rounded-sm"></span> Resumo da Cotação
              </h2>
              
              <div className="space-y-4 text-sm mb-6 pb-6 border-b border-slate-700">
                <div className="flex justify-between text-slate-300">
                  <span>Subtotal ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} itens)</span>
                  <span className="font-bold text-white">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Logística (Transportadora)</span>
                  <span className="font-bold text-white">R$ {frete.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between text-green-400 text-xs font-bold bg-green-400/10 p-2 rounded-lg border border-green-400/20">
                  <span>Descontos Corporativos</span>
                  <span>Aplicados no checkout</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Total</span>
                <div className="text-3xl font-black text-white tracking-tight flex items-start">
                  <span className="text-sm font-bold mt-1 mr-1 text-slate-400">R$</span>
                  {total.toFixed(2).replace('.', ',')}
                </div>
              </div>

              <button disabled={cartItems.length === 0} className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-slate-700 disabled:text-slate-500 active:scale-95 text-slate-950 font-black py-4 rounded-xl text-sm uppercase tracking-wider transition-all shadow-lg shadow-orange-500/20">
                Fechar Cotação Digital
              </button>
              
              <div className="mt-4 text-[10px] text-slate-500 text-center uppercase tracking-wider font-bold">
                Ambiente 100% Seguro • Criptografia 256-bit
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}