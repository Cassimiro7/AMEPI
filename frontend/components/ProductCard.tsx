import React from 'react';

// Definindo os tipos para o TypeScript não reclamar
interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
    reviews: number;
  };
}

export default function ProductCard({ product }: ProductProps) {
  return (
    <div className="bg-white border border-gray-200 p-4 flex flex-col justify-between hover:shadow-lg transition-shadow cursor-pointer">
      {/* Imagem */}
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center mb-4">
        {/* Usando uma tag img simples para facilitar o mock inicial */}
        <img src={product.image} alt={product.name} className="max-h-full object-contain" />
      </div>

      {/* Informações do Produto */}
      <div>
        <h2 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1 hover:text-orange-600">
          {product.name}
        </h2>
        
        {/* Avaliações (Estrelinhas falsas) */}
        <div className="flex items-center text-sm text-yellow-500 mb-2">
          {'★'.repeat(Math.floor(product.rating))}
          <span className="text-blue-600 ml-2 hover:underline text-xs">
            {product.reviews} avaliações
          </span>
        </div>

        {/* Preço */}
        <p className="text-2xl font-bold text-gray-900 mb-4">
          <span className="text-sm align-top">R$</span> 
          {product.price.toFixed(2).replace('.', ',')}
        </p>
      </div>

      {/* Botão estilo Amazon */}
      <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-full py-2 text-sm font-semibold shadow-sm transition-colors mt-auto">
        Adicionar ao carrinho
      </button>
    </div>
  );
}