'use server';

import dbConnect from "@/lib/mongodb"; 
import Product from "@/models/Product";
import { products } from "@/data/products";
import Order from "@/models/Order";

// Importa signIn, signOut e o auth (para pegar a sessão do usuário logado)
import { signIn, signOut, auth } from "../auth";

// Importações para o envio de e-mail (Resend)
import { Resend } from 'resend';
import { EmailTemplate } from "@/components/EmailTemplate";

export async function deslogar() {
  await signOut({ redirectTo: "/" });
}

export async function logar() {
  // Chama o login do Google no servidor
  await signIn("google", { redirectTo: "/" });
}

export async function popularBancoDeDados() {
  try {
    await dbConnect(); 
    
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

// FUNÇÃO PRINCIPAL: Salva o pedido feito no carrinho E envia o e-mail detalhado
export async function finalizarPedido(dadosPedido: any) {
  try {
    // 👇 MOVIDO PARA CÁ: Inicializa o Resend dentro da função para garantir a leitura da chave na AWS
    const resend = new Resend(process.env.RESEND_API_KEY);

    await dbConnect(); 

    // 1. PEGA A SESSÃO DO USUÁRIO LOGADO
    const session = await auth();
    const emailDoCliente = session?.user?.email;

    // Bloqueia a continuação caso a pessoa não esteja logada (segurança)
    if (!emailDoCliente) {
      console.error("Tentativa de compra sem usuário logado.");
      return { sucesso: false, erro: "Usuário não autenticado." };
    }
    
    // 2. FORMATA OS DADOS PARA O BANCO DE DADOS MONGODB
    const dadosParaOBanco = {
      items: dadosPedido.items,
      subtotal: dadosPedido.subtotal,
      frete: dadosPedido.frete,
      total: dadosPedido.total,
      cep: dadosPedido.endereco?.cep || dadosPedido.cep, 
      endereco: `${dadosPedido.endereco.rua}, Nº ${dadosPedido.endereco.numero} - ${dadosPedido.endereco.bairro}, ${dadosPedido.endereco.cidade} - ${dadosPedido.endereco.estado}` 
    };

    // 3. CRIA O PEDIDO NO BANCO
    const novoPedido = await Order.create(dadosParaOBanco);
    const pedidoIdString = novoPedido._id.toString();
    
    console.log("✅ Pedido salvo com sucesso ID:", pedidoIdString);

    // 4. DISPARA O E-MAIL DE CONFIRMAÇÃO COM DETALHES VIA RESEND
    try {
      await resend.emails.send({
        // Como o domínio atual é o padrão do Amplify, mantemos o remetente de testes do Resend
        from: 'AMEPI Suprimentos <onboarding@resend.dev>',
        
        // O destinatário puxa dinamicamente do Google de quem fez a compra
        to: emailDoCliente, 
        
        subject: `Pedido Emitido com Sucesso! - ID: ${pedidoIdString.slice(-6).toUpperCase()}`,
        
        // Passa todos os dados detalhados para o template desenhar a tabela e os valores
        react: <EmailTemplate 
          nomeCliente={session?.user?.name || 'Comprador AMEPI'}
          pedidoId={pedidoIdString}
          endereco={dadosPedido.endereco}
          items={dadosPedido.items}
          subtotal={dadosPedido.subtotal}
          frete={dadosPedido.frete}
          total={dadosPedido.total}
        />,
      });
      console.log(`📩 E-mail de confirmação com detalhes enviado para: ${emailDoCliente}`);
    } catch (emailError) {
      console.error("⚠️ Pedido salvo no banco, mas falha ao disparar o e-mail:", emailError);
    }

    return { sucesso: true, pedidoId: pedidoIdString };
  } catch (error) {
    console.error("❌ Erro ao salvar pedido:", error);
    return { sucesso: false };
  }
} 