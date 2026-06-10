import { signIn, signOut, auth } from "../auth"

export default async function AuthButton() {
  // O comando auth() verifica se alguém está logado neste momento
  const session = await auth()

  // SE ESTIVER LOGADO: Mostra foto, nome e botão de sair
  if (session && session.user) {
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
        
        {/* Formulário obrigatório do Next.js Server Actions para deslogar */}
        <form action={async () => {
          "use server"
          await signOut()
        }}>
          <button type="submit" className="text-xs font-bold text-slate-400 hover:text-red-400 ml-2 transition-colors">
            Sair
          </button>
        </form>
      </div>
    )
  }

  // SE NÃO ESTIVER LOGADO: Mostra o botão de entrar com Google
  return (
    <form action={async () => {
      "use server"
      await signIn("google")
    }}>
      <button 
        type="submit" 
        className="bg-transparent hover:bg-slate-800 text-white border border-slate-600 px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-sm flex items-center gap-2"
      >
        <span className="text-blue-500 text-lg leading-none">G</span> Entrar
      </button>
    </form>
  )
}