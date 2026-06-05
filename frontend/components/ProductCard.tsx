'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
    router.push('/carrinho');
  };

  return (
    <div className="group bg-white border border-slate-100 rounded-2xl p-5 flex flex-col h-full hover:shadow-xl hover:shadow-slate-200/80 hover:-translate-y-1 transition-all duration-300 relative">
      
      <div className="absolute top-4 left-4 bg-slate-900 text-orange-400 text-[10px] font-black px-2.5 py-1 rounded-md shadow-sm z-10 border border-slate-800 tracking-wide uppercase">
        -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% REF
      </div>

      <Link href={`/produto/${product.id}`} className="flex justify-center mb-4 relative overflow-hidden rounded-xl bg-slate-50 p-4 h-48 items-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      
      <div className="mb-1 text-[11px] font-bold text-orange-600 uppercase tracking-widest">
        {product.brand}
      </div>

      <Link href={`/produto/${product.id}`} className="flex-1">
        <h3 className="text-sm text-slate-800 font-bold hover:text-orange-600 line-clamp-2 mb-2 transition-colors leading-snug">
          {product.name}
        </h3>
      </Link>

      <div className="flex items-center gap-1 mb-4 bg-slate-50 w-fit px-2 py-1 rounded-md border border-slate-100">
        <span className="text-amber-500 text-xs">★</span>
        <span className="text-slate-700 text-xs font-bold">{product.rating || "5.0"}</span>
        <span className="text-slate-400 text-[11px] ml-1">({product.reviews} laudos)</span>
      </div>

      <div className="pt-3 border-t border-slate-100 mt-auto">
        <div className="flex items-baseline gap-2 mb-3">
          <div className="text-2xl text-slate-900 font-black tracking-tight flex items-start">
            <span className="text-xs font-bold mt-1 mr-0.5 text-slate-500">R$</span>
            {product.price.toFixed(2).replace('.', ',')}
          </div>
          <div className="text-xs text-slate-400 line-through">
            R$ {product.oldPrice.toFixed(2).replace('.', ',')}
          </div>
        </div>
        
        <div className="flex gap-2">
          <Link 
            href={`/produto/${product.id}`}
            className="flex-1 flex items-center justify-center bg-slate-900 group-hover:bg-slate-800 text-white py-2.5 rounded-xl text-[11px] font-bold transition-all duration-300 uppercase tracking-wider shadow-sm"
          >
            Especificações
          </Link>
          <button 
            onClick={handleAddToCart}
            title="Adicionar ao Lote"
            className="w-12 flex justify-center items-center bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-slate-950 rounded-xl transition-all duration-300 border border-orange-200 hover:border-orange-500"
          >
            🛒
          </button>
        </div>
      </div>
    </div>
  );
}