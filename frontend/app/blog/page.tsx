import Link from 'next/link';
import { posts } from '../../data/posts';
import CommentSection from '../../components/CommentSection';

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header Simples para o Blog */}
      <header className="bg-[#131921] text-white p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-wider hover:text-orange-400 transition-colors">
            AMEPI
          </Link>
          <span className="font-bold text-orange-400">Blog de Segurança</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Lista de Artigos */}
        <div className="space-y-8 mb-12">
          {posts.map((post) => (
            <article key={post.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
              <button className="mt-4 text-blue-600 font-semibold hover:underline">
                Ler artigo completo →
              </button>
            </article>
          ))}
        </div>

        {/* Nossa seção de Interação */}
        <hr className="border-gray-300 my-8" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Participe da Discussão</h2>
        <p className="text-gray-600 mb-4">Tem alguma dúvida sobre EPIs? Deixe abaixo!</p>
        
        <CommentSection />

      </main>
    </div>
  );
}