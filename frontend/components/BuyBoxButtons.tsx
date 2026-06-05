'use client';

import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';

export default function BuyBoxButtons({ product }: { product: any }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleBuy = () => {
    addToCart(product);
    router.push('/carrinho');
  };

  return (
    <>
      <button 
        onClick={handleBuy} 
        className="flex justify-center items-center gap-2 w-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-slate-950 font-black py-3 rounded-xl mb-3 text-xs uppercase tracking-wider transition-all shadow-lg shadow-orange-500/20"
      >
        🛒 Adicionar ao Lote
      </button>
      <button 
        onClick={handleBuy} 
        className="flex justify-center items-center w-full bg-transparent hover:bg-slate-800 text-slate-300 font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all border border-slate-700"
      >
        Faturar Agora
      </button>
    </>
  );
}