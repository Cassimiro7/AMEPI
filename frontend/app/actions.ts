'use server';

// Importa tanto o signIn quanto o signOut do seu arquivo auth.ts!
import { signIn, signOut } from "../auth";

export async function deslogar() {
  await signOut({ redirectTo: "/" });
}

export async function logar() {
  // Chama o login do Google no servidor
  await signIn("google", { redirectTo: "/" });
}