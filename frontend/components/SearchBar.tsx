'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleSearch(term: string) {
    // Cria uma cópia dos parâmetros atuais da URL
    const params = new URLSearchParams(searchParams.toString());
    
    if (term) {
      params.set('search', term); // Adiciona ?search=termo na URL
    } else {
      params.delete('search'); // Remove se o campo ficar vazio
    }
    
    // Atualiza a URL sem recarregar a página por completo
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="relative w-full max-w-xs md:max-w-md">
      <input
        type="text"
        placeholder="Buscar EPIs (ex: luva, capacete...)"
        defaultValue={searchParams.get('search')?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full bg-slate-800 text-white placeholder-slate-400 border border-slate-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-orange-500 transition-all standard-transition"
      />
      {/* Ícone decorativo de lupa */}
      <span className="absolute right-3 top-2.5 text-slate-500">
        🔍
      </span>
    </div>
  );
}