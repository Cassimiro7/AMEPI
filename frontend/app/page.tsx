import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import WeatherWidget from '../components/WeatherWidget';
import { products } from '../data/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 antialiased font-sans">
      
      {/* Topbar de Alerta Industrial */}
      <div className="bg-orange-600 text-white text-xs font-bold py-2 px-4 text-center tracking-wider uppercase">
        ⚡ Todo o catálogo com Certificado de Aprovação (CA) Regularizado conforme NR-6
      </div>

      {/* Header Premium AMEPI */}
      <header className="bg-[#0f172a] text-white sticky top-0 z-50 shadow-md backdrop-blur-md bg-opacity-95 border-b border-slate-800">
        <div className="max-w-7xl mx-auto p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-6">
            <h1 className="text-3xl font-black tracking-tighter text-white flex items-center gap-2">
              <span className="bg-orange-500 text-slate-950 px-2.5 py-0.5 rounded-lg font-black">AM</span>
              <span className="text-orange-500">EPI</span>
            </h1>
            <div className="hidden lg:block text-xs text-slate-400 border-l border-slate-700 pl-4">
              Distribuidora Oficial de<br/>
              <span className="text-white font-bold">Proteção Industrial</span>
            </div>
          </div>
          
          {/* Barra de Pesquisa Técnica Avançada */}
          <div className="flex flex-1 max-w-xl mx-4 w-full">
            <div className="relative w-full flex">
              <input 
                type="text" 
                placeholder="Buscar por equipamento, CA ou palavra-chave..." 
                className="w-full px-4 py-2.5 bg-slate-800/80 border border-slate-700 rounded-l-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-sm"
              />
              <button className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-slate-950 font-bold px-6 rounded-r-xl text-sm transition-all shadow-lg shadow-orange-500/20">
                Pesquisar
              </button>
            </div>
          </div>

          {/* Ações Rápidas */}
          <div className="flex items-center gap-4 text-sm font-semibold">
            <Link href="/blog" className="text-slate-300 hover:text-orange-400 transition-colors">
              Informativo Técnico
            </Link>
            <Link href="/carrinho" className="bg-orange-500 hover:bg-orange-600 text-slate-950 transition-colors px-4 py-2 rounded-xl cursor-pointer flex items-center gap-2 font-black shadow-lg shadow-orange-500/20">
              <span>🛒</span> <span>Ver Lote</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Sub-Navegação Técnica */}
      <nav className="bg-[#1e293b] text-slate-300 border-b border-slate-700 text-xs font-bold tracking-wide uppercase">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-6 overflow-x-auto scrollbar-none items-center whitespace-nowrap">
          <span className="cursor-pointer text-orange-400 hover:text-white transition-colors">⚡ Ver Todos os EPIs</span>
          <span className="cursor-pointer hover:text-white transition-colors">Protection Head</span>
          <span className="cursor-pointer hover:text-white transition-colors">Proteção Ocular</span>
          <span className="cursor-pointer hover:text-white transition-colors">Luvas Técnicas</span>
          <span className="cursor-pointer hover:text-white transition-colors">Calçados de Segurança</span>
          <Link href="/calculadora" className="text-orange-400 hover:underline">
            🧮 Calculadora de Validade de CA
          </Link>
        </div>
      </nav>

      {/* Seção Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white py-16 px-4 overflow-hidden border-b-4 border-orange-500">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <span className="bg-orange-500/10 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full border border-orange-500/30 uppercase tracking-widest">
              Linha Pesada 2026
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4 mb-6 leading-tight">
              A segurança da sua equipe <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                em conformidade com a lei.
              </span>
            </h2>
            <p className="text-slate-400 text-base max-w-md mb-8 leading-relaxed">
              Equipamentos de alta performance testados e aprovados para os ambientes industriais mais rigorosos do Brasil.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#catalogo" className="bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm">
                Explorar Catálogo Técnico
              </a>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="text-green-500 text-lg">✔</span> Pronta Entrega para Indústrias
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="w-72 h-72 rounded-3xl bg-gradient-to-tr from-orange-500 to-amber-300 opacity-20 blur-3xl absolute"></div>
            <div className="border border-slate-700/60 p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm relative border-l-orange-500/40 border-l-2">
              <p className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">Informativo Climatológico</p>
              <WeatherWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Grade de Produtos */}
      <div id="catalogo" className="max-w-7xl mx-auto p-6 sm:p-8 mt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Equipamentos em Destaque</h2>
            <p className="text-sm text-slate-500">Filtrados por maior índice de aprovação técnica</p>
          </div>
          <div className="text-xs font-bold text-slate-400 mt-2 sm:mt-0">Mostrando {products.length} itens essenciais</div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </main>
  );
}