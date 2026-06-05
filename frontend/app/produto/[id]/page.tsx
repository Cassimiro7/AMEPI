import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '../../../data/products';
import BuyBoxButtons from '../../../components/BuyBoxButtons';

export default async function ProdutoPage({ params }: { params: Promise<{ id: string }> }) {
  
  const resolvedParams = await params;
  const product = products.find(p => p.id === parseInt(resolvedParams.id));

  if (!product) {
    notFound();
  }

  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 antialiased font-sans pb-24">
      
      {/* Header Técnico Reduzido */}
      <header className="bg-[#0f172a] text-white p-4 shadow-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xs font-bold text-slate-300 hover:text-orange-400 transition-colors uppercase tracking-wider flex items-center gap-2">
            <span>&larr;</span> Voltar ao Painel Geral AMEPI
          </Link>
          
          <div className="flex items-center gap-3">
            <div className="hidden sm:block bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[10px] font-black uppercase border border-slate-700">
              Ficha Técnico Digital
            </div>
            <Link href="/carrinho" className="bg-orange-500 hover:bg-orange-600 text-slate-950 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all shadow-md flex items-center gap-2">
              🛒 Ir para o Lote
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumb Técnico */}
      <div className="text-[11px] text-slate-500 py-4 px-6 max-w-7xl mx-auto font-bold uppercase tracking-wider">
        Central de Suprimentos <span className="mx-2 text-slate-300">&gt;</span> <span className="text-orange-600">{product.brand}</span> <span className="mx-2 text-slate-300">&gt;</span> {product.name}
      </div>

      {/* Painel do Equipamento */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-10 mt-2">
        
        {/* Mostruário de Imagem Industrial */}
        <div className="w-full lg:w-5/12 flex flex-col">
          <div className="bg-white border border-slate-100 shadow-xl shadow-slate-200/50 p-8 rounded-3xl flex justify-center items-center w-full min-h-[400px]">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-[380px] object-contain"
            />
          </div>
          
          {/* Tags de Normas */}
          <div className="grid grid-cols-3 gap-2 mt-4 text-center">
            <div className="bg-slate-100 rounded-xl p-2 border border-slate-200"><p className="text-[10px] text-slate-500 font-bold uppercase">MTE</p><p className="text-xs font-black text-slate-700">Conforme</p></div>
            <div className="bg-slate-100 rounded-xl p-2 border border-slate-200"><p className="text-[10px] text-slate-500 font-bold uppercase">Laudo</p><p className="text-xs font-black text-green-600">Aprovado</p></div>
            <div className="bg-slate-100 rounded-xl p-2 border border-slate-200"><p className="text-[10px] text-slate-500 font-bold uppercase">Qualidade</p><p className="text-xs font-black text-slate-700">ISO 9001</p></div>
          </div>
        </div>

        {/* Informações de Engenharia e Preços */}
        <div className="w-full lg:w-7/12 flex flex-col md:flex-row gap-8">
          
          <div className="flex-1">
            <span className="text-xs font-black text-orange-600 uppercase tracking-widest">{product.brand} Industrial</span>
            <h1 className="text-2xl md:text-3xl font-black leading-tight mt-1 mb-4 text-slate-950 tracking-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2.5 py-1 rounded-full border border-green-200 uppercase tracking-wider">
                🛡 Certificado CA Ativo
              </span>
              <span className="text-xs text-slate-400 font-medium">| {product.reviews} testes de impacto estrutural</span>
            </div>

            {/* Bloco de Preço Técnico */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mb-6">
              <div className="text-[11px] font-bold text-slate-400 uppercase mb-1">Valor Unitário Corporativo</div>
              <div className="flex items-baseline gap-3">
                <div className="text-4xl font-black text-slate-900 tracking-tight flex items-start">
                  <span className="text-lg font-bold mt-1 mr-1 text-slate-400">R$</span>
                  {product.price.toFixed(2).replace('.', ',')}
                </div>
                <div className="text-sm text-slate-400 line-through">
                  Regulado: R$ {product.oldPrice.toFixed(2).replace('.', ',')}
                </div>
                <span className="bg-red-50 text-red-700 font-bold text-xs px-2 py-0.5 rounded border border-red-100">-{discount}% OFF</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-2">*Faturamento facilitado via CNPJ disponível no fechamento.</p>
            </div>

            {/* Ficha Técnica Detalhada */}
            <div className="mt-6">
              <h2 className="text-sm font-black uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-orange-500 rounded-sm"></span> Memorial de Especificações
              </h2>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="border-t border-slate-100 pt-4 space-y-2">
                  <div className="flex justify-between text-xs py-1 border-b border-slate-50"><span className="font-bold text-slate-500">Fabricante</span> <span className="font-bold text-slate-800">{product.brand}</span></div>
                  <div className="flex justify-between text-xs py-1 border-b border-slate-50"><span className="font-bold text-slate-500">Normativa Principal</span> <span className="font-bold text-slate-800">NR-6 / Portaria MTE</span></div>
                  <div className="flex justify-between text-xs py-1"><span className="font-bold text-slate-500">Ciclo de Vida Útil</span> <span className="font-bold text-slate-800">Elevado / Longa Duração</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Buy Box Comercial Lateral */}
          <div className="w-full md:w-[280px] shrink-0">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sticky top-24 border border-slate-800 shadow-2xl">
              <div className="text-xs font-bold text-slate-400 uppercase mb-2">Disponibilidade Logística</div>
              <div className="text-green-400 font-bold text-sm mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Prontidão de Estoque
              </div>

              <div className="text-xs text-slate-300 space-y-3 mb-6 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p>🚚 **Despacho imediato** para canteiros de obras e galpões.</p>
                <p>🛡 **Seguro total** contra avarias logísticas incluso.</p>
              </div>

              <BuyBoxButtons product={product} />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}