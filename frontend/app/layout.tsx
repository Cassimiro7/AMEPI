import { CartProvider } from '../context/CartContext';
import SessionWrapper from '../components/SessionWrapper';
import { auth } from '../auth'; // <-- Importamos a sua função auth
import './globals.css';

export const metadata = {
  title: 'AMEPI - Proteção Industrial',
  description: 'Distribuidora Oficial de Proteção Industrial',
};

// Precisamos colocar o 'async' aqui para poder usar o await
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Busca a sessão instantaneamente no servidor
  const session = await auth();

  return (
    <html lang="pt-BR">
      <body>
        {/* Passamos a sessão recém-buscada para o Wrapper */}
        <SessionWrapper session={session}>
          <CartProvider>
            {children}
          </CartProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}