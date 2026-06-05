import { CartProvider } from '../context/CartContext';
import './globals.css';

export const metadata = {
  title: 'AMEPI - Proteção Industrial',
  description: 'Distribuidora Oficial de Proteção Industrial',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}