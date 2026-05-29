import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      
      {/* Header estilo Amazon (Azul Escuro) */}
      <header className="bg-[#131921] text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold tracking-wider text-white">
            AMEPI
          </h1>
          <span className="text-sm border border-transparent hover:border-white p-1 cursor-pointer hidden md:block">
            Entregar em <br/><span className="font-bold">Brasil</span>
          </span>
        </div>
        
        {/* Barra de Pesquisa Falsa */}
        <div className="flex-1 max-w-2xl mx-4 hidden sm:flex">
          <input 
            type="text" 
            placeholder="Pesquisar EPIs..." 
            className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none"
          />
          <button className="bg-[#febd69] hover:bg-[#f3a847] px-4 rounded-r-md text-gray-900 font-bold">
            Buscar
          </button>
        </div>

        {/* Carrinho */}
        <div className="flex items-center font-bold cursor-pointer hover:border-white border border-transparent p-1">
          <span>🛒 Carrinho</span>
        </div>
      </header>

      {/* Sub-header (A barra cinza escuro abaixo do header principal) */}
      <nav className="bg-[#232f3e] text-white p-2 text-sm flex gap-4 overflow-x-auto">
        <span className="cursor-pointer hover:border-white border border-transparent p-1">Todas as categorias</span>
        <span className="cursor-pointer hover:border-white border border-transparent p-1">Capacetes</span>
        <span className="cursor-pointer hover:border-white border border-transparent p-1">Luvas</span>
        <span className="cursor-pointer hover:border-white border border-transparent p-1">Calçados de Segurança</span>
        <span className="cursor-pointer hover:border-white border border-transparent p-1">Ofertas do Dia</span>
      </nav>

      {/* Catálogo de Produtos (A Grade) */}
      <div className="max-w-[1500px] mx-auto p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl font-bold mb-6 text-gray-900">EPIs em Destaque</h2>
        
        {/* Grid Responsiva: 1 coluna no celular, 2 no tablet, 4 no PC, 5 em telas grandes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </main>
  );
}