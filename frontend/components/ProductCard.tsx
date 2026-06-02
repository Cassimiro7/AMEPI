import Link from 'next/link';

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-5 flex flex-col h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
      
      {/* Badge de Desconto Dinâmico (Design Premium) */}
      <div className="absolute top-4 left-4 bg-[#cc0c39] text-white text-xs font-bold px-2 py-1 rounded shadow-sm z-10">
        -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
      </div>

      <Link href={`/produto/${product.id}`} className="flex justify-center mb-5 relative overflow-hidden rounded-xl">
        {/* Efeito de zoom suave na imagem ao passar o mouse */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-xl"
        />
      </Link>
      
      <Link href={`/produto/${product.id}`}>
        <h3 className="text-sm text-gray-800 font-bold hover:text-orange-500 line-clamp-2 mb-2 transition-colors">
          {product.name}
        </h3>
      </Link>

      <div className="flex items-center gap-1 mb-3 bg-gray-50 w-fit px-2 py-1 rounded-md">
        <span className="text-yellow-500 text-sm drop-shadow-sm">★★★★★</span>
        <span className="text-blue-500 text-xs font-medium hover:underline cursor-pointer ml-1">{product.reviews} avaliações</span>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <div className="text-2xl text-gray-900 font-bold mb-4 flex items-start">
          <span className="text-xs font-medium mt-1 mr-1">R$</span>
          {product.price.toFixed(2).replace('.', ',')}
        </div>
        
        <Link 
          href={`/produto/${product.id}`}
          className="block w-full text-center bg-gradient-to-r from-gray-900 to-gray-800 hover:from-orange-500 hover:to-orange-400 text-white py-2.5 rounded-xl text-sm font-bold shadow-md transition-all duration-300 hover:shadow-lg active:scale-95"
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
}