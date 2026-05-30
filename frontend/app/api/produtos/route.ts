import { NextResponse } from 'next/server';
import { products } from '../../../data/products';

export async function GET() {
  // Aqui você poderia conectar a um banco de dados real (como PostgreSQL ou MySQL).
  // Por enquanto, vamos retornar nosso mock data como se fosse um banco de dados.
  
  return NextResponse.json(products, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}