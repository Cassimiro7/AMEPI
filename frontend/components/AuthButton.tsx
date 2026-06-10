'use client';

import { useSession } from "next-auth/react";
// Importamos as duas ações do nosso arquivo!
import { logar, deslogar } from "../app/actions"; 

export default function AuthButton() {
  const { data: session } = useSession();

  // SE ESTIVER LOGADO:
  if (session?.user) {
    return (
      <div className="flex items-center gap-3">
        <img 
          src={session.user.image || ""} 
          alt="Foto de perfil" 
          className="w-8 h-8 rounded-full border border-orange-500"
        />
        <div className="hidden sm:block text-xs">
          <p className="text-slate-300">Olá,</p>
          <p className="font-bold text-white leading-none">{session.user.name}</p>
        </div>
        
        <form action={deslogar}>
          <button 
            type="submit" 
            className="text-xs font-bold text-slate-400 hover:text-red-400 ml-2 transition-colors cursor-pointer"
          >
            Sair
          </button>
        </form>
      </div>
    );
  }

  // SE NÃO ESTIVER LOGADO:
  return (
    // Agora o login também usa um formulário chamando o servidor!
    <form action={logar}>
      <button 
        type="submit" 
        className="bg-transparent hover:bg-slate-800 text-white border border-slate-600 px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
      >
        <span className="text-blue-500 text-lg leading-none">G</span> Entrar
      </button>
    </form>
  );
}