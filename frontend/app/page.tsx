'use client'; // <-- Adicionado para permitir o uso de estado e interatividade

import { useState } from 'react'; // <-- Importando o hook useState
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import WeatherWidget from '../components/WeatherWidget';
import AuthButton from '../components/AuthButton';
import { products } from '../data/products';

export default function Home() {
  // Estado para armazenar o texto digitado no input
  const [searchTerm, setSearchTerm] = useState('');

  // Lógica de filtragem: verifica se o nome do produto inclui o que foi digitado
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 antialiased font-sans">
      
      {/* Topbar de Alerta Industrial */}
      <div className="bg-orange-600 text-white text-xs font-bold py-2 px-4 text-center tracking-wider uppercase shadow-inner">
        ⚡ Todo o catálogo com Certificado de Aprovação (CA) Regularizado conforme NR-6
      </div>

      {/* Header Premium AMEPI */}
      <header className="bg-[#0f172a] text-white sticky top-0 z-50 shadow-xl backdrop-blur-md bg-[#0f172a]/90 border-b border-slate-800">
        <div className="max-w-7xl mx-auto p-4 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
          
          {/* Logo e Slogan */}
          <div className="flex items-center gap-4 shrink-0">
            <h1 className="text-3xl font-black tracking-tighter text-white flex items-center gap-1.5 hover:scale-105 transition-transform cursor-default">
              <span className="bg-gradient-to-br from-orange-400 to-orange-600 text-slate-950 px-2.5 py-0.5 rounded-lg font-black shadow-lg shadow-orange-500/20">AM</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">EPI</span>
            </h1>
            <div className="hidden md:block text-[11px] text-slate-400 border-l border-slate-700 pl-4 leading-tight">
              Distribuidora Oficial de<br/>
              <span className="text-white font-bold tracking-wide">Proteção Industrial</span>
            </div>
          </div>
          
          {/* Barra de Pesquisa Técnica Avançada */}
          <div className="flex flex-1 w-full max-w-2xl group">
            <div className="relative w-full flex shadow-sm group-focus-within:shadow-orange-500/10 transition-all rounded-xl">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">🔍</span>
              <input 
                type="text" 
                placeholder="Buscar por equipamento..." 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-l-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:bg-slate-800 transition-colors text-sm"
                value={searchTerm} // <-- Conectado ao estado
                onChange={(e) => setSearchTerm(e.target.value)} // <-- Atualiza o estado ao digitar
              />
              <button className="bg-orange-500 hover:bg-orange-400 active:scale-95 text-slate-950 font-black px-6 rounded-r-xl text-sm transition-all border border-orange-500 hover:border-orange-400">
                Buscar
              </button>
            </div>
          </div>

          {/* Ações Rápidas & Perfil */}
          <div className="flex items-center gap-4 sm:gap-6 text-sm font-semibold shrink-0">
            <Link href="/blog" className="hidden lg:block text-slate-400 hover:text-orange-400 transition-colors">
              Informativo Técnico
            </Link>
            <div className="hidden sm:block h-8 w-px bg-slate-800"></div>
            <AuthButton />
            <Link href="/carrinho" className="bg-orange-500 hover:bg-orange-400 text-slate-950 transition-all px-4 py-2.5 rounded-xl cursor-pointer flex items-center gap-2 font-black shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5">
              <span className="text-lg leading-none">🛒</span> 
              <span className="hidden sm:inline">Ver Lote</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Sub-Navegação Técnica (mantida igual) */}
      <nav className="bg-[#1e293b] text-slate-400 border-b border-slate-700 text-xs font-bold tracking-wide uppercase shadow-sm">
         {/* ... (código mantido) ... */}
         <div className="max-w-7xl mx-auto px-4 py-3 flex gap-8 overflow-x-auto scrollbar-none items-center whitespace-nowrap">
          <span className="cursor-pointer text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1">
            <span className="text-base leading-none">⚡</span> Ver Todos os EPIs
          </span>
          <span className="cursor-pointer hover:text-white transition-colors">Protection Head</span>
          <span className="cursor-pointer hover:text-white transition-colors">Proteção Ocular</span>
          <span className="cursor-pointer hover:text-white transition-colors">Luvas Técnicas</span>
          <span className="cursor-pointer hover:text-white transition-colors">Calçados de Segurança</span>
          <Link href="/calculadora" className="text-amber-400 hover:text-amber-300 hover:underline flex items-center gap-1 ml-auto">
            <span className="text-base leading-none">🧮</span> Calculadora de Validade de CA
          </Link>
        </div>
      </nav>

      {/* Seção Hero (mantida igual) */}
      <section className="relative bg-gradient-to-b from-[#0f172a] to-slate-900 text-white py-20 px-4 overflow-hidden border-b-[6px] border-orange-500">
         {/* ... (código mantido) ... */}
         <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="flex flex-col items-start">
            <span className="bg-orange-500/10 text-orange-400 text-xs font-black px-4 py-2 rounded-full border border-orange-500/20 uppercase tracking-widest shadow-sm">
              Linha Pesada 2026
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-6 mb-6 leading-[1.1]">
              A segurança da <br/> sua equipe em <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                conformidade com a lei.
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-md mb-10 leading-relaxed font-medium">
              Equipamentos de alta performance testados e aprovados para os ambientes industriais mais rigorosos do Brasil.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a href="#catalogo" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-400 hover:-translate-y-1 text-slate-950 font-black px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-orange-500/20 text-sm uppercase tracking-wider text-center">
                Explorar Catálogo Técnico
              </a>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                <span className="bg-green-500/20 text-green-400 p-1 rounded-full text-lg leading-none">✔</span> 
                Pronta Entrega
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex justify-end relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/20 blur-[80px]"></div>
            
            <div className="border border-slate-700/50 p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl relative border-l-orange-500 border-l-4 shadow-2xl z-10 min-w-[320px]">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-black text-orange-400 uppercase tracking-widest">Informativo Climatológico</p>
                <span className="text-slate-600">📡</span>
              </div>
              <WeatherWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Grade de Produtos */}
      <div id="catalogo" className="max-w-7xl mx-auto p-6 sm:p-8 mt-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b-2 border-slate-200/60">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-1">Equipamentos em Destaque</h2>
            <p className="text-sm font-medium text-slate-500">Filtrados por maior índice de aprovação técnica</p>
          </div>
          <div className="bg-slate-200 text-slate-600 px-3 py-1 rounded-lg text-xs font-bold mt-4 sm:mt-0 shadow-sm border border-slate-300">
            {/* Atualizando a contagem para refletir a busca */}
            Mostrando {filteredProducts.length} itens encontrados
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Mapeando os produtos FILTRADOS em vez de todos os produtos */}
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {/* Feedback caso a busca não encontre nada */}
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-500">
              <p className="text-lg font-bold mb-2">Nenhum equipamento encontrado.</p>
              <p className="text-sm">Tente buscar por outro nome ou termo técnico.</p>
            </div>
          )}
        </div>
      </div>

    </main>
  );
}