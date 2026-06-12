'use server';

import { connectToDatabase } from "@/lib/mongodb";
import Product from "@/models/Product";
import { products } from "@/data/products";
import Order from "@/models/Order";

// Importa tanto o signIn quanto o signOut do seu arquivo auth.ts
import { signIn, signOut } from "../auth";

export async function deslogar() {
  await signOut({ redirectTo: "/" });
}

export async function logar() {
  // Chama o login do Google no servidor
  await signIn("google", { redirectTo: "/" });
}

export async function popularBancoDeDados() {
  try {
    await connectToDatabase();
    
    // Apaga os produtos antigos para não duplicar (opcional)
    await Product.deleteMany({});
    
    // Insere toda a sua lista de uma vez no MongoDB!
    await Product.insertMany(products);
    
    console.log("✅ Banco de dados populado com sucesso!");
    return { sucesso: true };
  } catch (error) {
    console.error("❌ Erro ao popular o banco:", error);
    return { sucesso: false };
  }
}

// NOVA FUNÇÃO: Salva o pedido feito no carrinho
export async function finalizarPedido(dadosPedido: any) {
  try {
    await connectToDatabase();
    
    // Cria o pedido no MongoDB Atlas
    const novoPedido = await Order.create(dadosPedido);
    
    console.log("✅ Pedido salvo com sucesso ID:", novoPedido._id);
    return { sucesso: true, pedidoId: novoPedido._id.toString() };
  } catch (error) {
    console.error("❌ Erro ao salvar pedido:", error);
    return { sucesso: false };
  }
}