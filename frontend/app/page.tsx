import { connectToDatabase } from "@/lib/mongodb";
import Product from "@/models/Product";
import HomeClient from "../components/HomeClient";

// Força o Next.js a buscar os dados frescos sempre que alguém abrir a página
export const dynamic = "force-dynamic";

export default async function Home() {
  // 1. Conecta no banco de dados
  await connectToDatabase();

  // 2. Busca todos os produtos do MongoDB e converte para JSON
  const produtosDoBanco = await Product.find({}).lean();

  // 3. Limpa o formato do _id do MongoDB para evitar erros ao passar pro Client
  const produtosFormatados = produtosDoBanco.map((produto: any) => ({
    ...produto,
    _id: produto._id.toString(), // Converte o ObjectId para uma string normal
  }));

  // 4. Renderiza a interface que construímos, passando os dados do banco!
  return <HomeClient products={produtosFormatados} />;
}