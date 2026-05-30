"use client"; // Isso diz ao Next.js que este componente tem interatividade no navegador

import { useState } from 'react';

export default function CommentSection() {
  // Estado para guardar a lista de comentários
  const [comments, setComments] = useState([
    { id: 1, user: "Carlos Silva", text: "Ótimo artigo, tirou minhas dúvidas!" }
  ]);
  
  // Estado para guardar o que está sendo digitado no campo de texto
  const [newComment, setNewComment] = useState("");

  // Função que roda ao clicar em "Enviar"
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() === "") return; // Não envia comentário vazio

    const commentToAdd = {
      id: comments.length + 1,
      user: "Visitante",
      text: newComment
    };

    setComments([...comments, commentToAdd]); // Adiciona o novo comentário à lista
    setNewComment(""); // Limpa a caixa de texto
  };

  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Comentários ({comments.length})</h3>
      
      {/* Formulário de Interação */}
      <form onSubmit={handleAddComment} className="mb-6">
        <textarea 
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
          rows={3}
          placeholder="Deixe seu comentário ou dúvida..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button 
          type="submit" 
          className="mt-2 bg-[#febd69] hover:bg-[#f3a847] text-gray-900 font-bold py-2 px-6 rounded-md transition-colors"
        >
          Enviar Comentário
        </button>
      </form>

      {/* Lista de Comentários */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-100 pb-4">
            <p className="font-bold text-gray-800">{comment.user}</p>
            <p className="text-gray-600 mt-1">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}