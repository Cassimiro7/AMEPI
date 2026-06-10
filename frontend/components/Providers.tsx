'use client';

import { SessionProvider } from "next-auth/react";

export function Providers({ 
  children, 
  session 
}: { 
  children: React.ReactNode;
  session: any; // Adicionamos a sessão aqui
}) {
  // Repassamos a sessão recebida diretamente para o provedor
  return <SessionProvider session={session}>{children}</SessionProvider>;
}