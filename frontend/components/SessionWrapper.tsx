'use client';

import { SessionProvider } from "next-auth/react";

export default function SessionWrapper({ 
  children,
  session // <-- Adicionamos a sessão aqui
}: { 
  children: React.ReactNode;
  session: any;
}) {
  // Entregamos a sessão direto para o Provider
  return <SessionProvider session={session}>{children}</SessionProvider>;
}