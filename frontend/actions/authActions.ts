'use server';

// Ajuste o caminho dos "../" para apontar corretamente para o seu arquivo auth.ts principal
import { signIn, signOut } from "../auth"; 

export async function loginGoogle() {
  await signIn("google");
}

export async function logoutUser() {
  await signOut();
}