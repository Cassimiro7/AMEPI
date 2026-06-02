import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '../../../data/products';

// 1. O 'async' foi adicionado aqui na função principal
export default async function ProdutoPage({ params }: { params: Promise<{ id: string }> }) {
  
  // 2. O 'await' resolve o erro do Next.js extraindo o ID corretamente
  const resolvedParams = await params;
  const product = products.find(p => p.id === parseInt(resolvedParams.id));

  if (!product) {
    notFound();
  }

  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-20">
      
      {/* Header Simplificado */}
      <header className="bg-[#131921] text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link href="/" className="text-sm font-medium hover:text-orange-400 transition-colors flex items-center gap-2">
            <span>&larr;</span> Voltar para o Catálogo AMEPI
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="text-xs text-gray-500 py-4 px-6 max-w-7xl mx-auto font-medium tracking-wide">
        EPIs <span className="mx-2">&gt;</span> <span className="text-blue-600 cursor-pointer hover:underline">{product.brand}</span> <span className="mx-2">&gt;</span> {product.name}
      </div>

      {/* Container Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-8 mt-4">
        
        {/* Coluna da Esquerda: Imagem com visual Premium */}
        <div className="w-full md:w-5/12 flex flex-col items-center">
          <div className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 p-8 rounded-2xl flex justify-center w-full transition-transform hover:scale-[1.02] duration-300">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-[450px] w-full object-cover rounded-xl"
            />
          </div>
          <div className="flex gap-4 w-full justify-center mt-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border-2 border-transparent hover:border-orange-500 rounded-lg p-1 cursor-pointer transition-all shadow-sm">
                <img src={product.image} className="h-16 w-16 object-cover rounded-md opacity-80 hover:opacity-100" alt="thumbnail" />
              </div>
            ))}
          </div>
        </div>

        {/* Coluna Central/Direita */}
        <div className="w-full md:w-7/12 flex flex-col lg:flex-row gap-8">
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold leading-tight mb-2 text-gray-900 tracking-tight">
              {product.name}
            </h1>
            <p className="text-sm text-blue-600 hover:underline cursor-pointer mb-4 font-medium">
              Visite a loja oficial {product.brand}
            </p>
            
            <div className="flex items-center gap-4 mt-2 border-b border-gray-200 pb-4">
              <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                <span>{product.rating.toString().replace('.', ',')}</span>
                <span className="text-yellow-500 drop-shadow-sm">★★★★★</span>
                <span className="text-blue-600 ml-2">{product.reviews} avaliações</span>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-red-50 to-transparent p-4 rounded-xl border-l-4 border-[#cc0c39]">
              <div className="flex items-center gap-3">
                <span className="text-4xl text-[#cc0c39] font-light">-{discount}%</span>
                <div className="text-4xl text-gray-900 font-bold flex items-start tracking-tighter">
                  <span className="text-lg mt-1 mr-1 font-medium">R$</span>
                  {Math.floor(product.price)}
                  <span className="text-lg mt-1 font-medium">
                    {(product.price % 1).toFixed(2).substring(2)}
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-500 mt-2 font-medium">
                Preço anterior: <span className="line-through">R$ {product.oldPrice.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span> Sobre este produto
              </h2>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {product.description}
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 font-medium">
                  <li>Produto certificado com CA (Certificado de Aprovação) válido.</li>
                  <li>Alta durabilidade e resistência testada rigorosamente.</li>
                  <li>Design ergonômico focado no conforto prolongado.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Buy Box Elegante */}
          <div className="w-full lg:w-[300px]">
            <div className="bg-white border border-gray-200 shadow-2xl shadow-gray-200/50 rounded-2xl p-6 sticky top-6">
              <div className="text-2xl text-gray-900 font-bold flex items-start mb-4">
                <span className="text-base mt-1 mr-1">R$</span>
                {product.price.toFixed(2).replace('.', ',')}
              </div>
              
              <div className="text-sm text-gray-700 mb-6 bg-green-50 p-3 rounded-lg border border-green-100">
                Entrega <span className="font-bold text-green-700">GRÁTIS</span> para o Brasil. Detalhes
              </div>
              
              <div className="text-lg text-green-600 font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Em estoque
              </div>

              <button className="w-full bg-gradient-to-b from-[#ffd814] to-[#f7ca00] hover:from-[#f7ca00] hover:to-[#e5bc00] text-gray-900 font-bold py-3 rounded-xl mb-3 shadow-sm border border-[#fcd200] transition-all hover:shadow-md active:scale-95">
                Adicionar ao carrinho
              </button>
              <button className="w-full bg-gradient-to-b from-[#ffa41c] to-[#fa8900] hover:from-[#fa8900] hover:to-[#e07b00] text-white font-bold py-3 rounded-xl mb-6 shadow-sm border border-[#ff8f00] transition-all hover:shadow-md active:scale-95">
                Comprar agora
              </button>

              <div className="text-xs text-gray-500 space-y-2 bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between"><span>Vendido por</span> <span className="font-bold text-gray-700">AMEPI Oficial</span></div>
                <div className="flex justify-between"><span>Envio</span> <span className="font-bold text-gray-700">Transportadora AMEPI</span></div>
                <div className="flex justify-between"><span>Garantia</span> <span className="text-blue-600 font-medium">90 dias pela fábrica</span></div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}