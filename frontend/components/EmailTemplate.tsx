import * as React from 'react';

// Aqui definimos tudo o que o e-mail vai receber
interface EmailTemplateProps {
  nomeCliente: string;
  pedidoId: string;
  endereco: any;
  items: any[];
  subtotal: number;
  frete: number;
  total: number;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nomeCliente,
  pedidoId,
  endereco,
  items,
  subtotal,
  frete,
  total
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#1e293b', maxWidth: '600px', margin: '0 auto', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
    
    {/* Cabeçalho */}
    <div style={{ backgroundColor: '#0f172a', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: '#ffffff', margin: 0, fontSize: '24px' }}>AMEPI Suprimentos</h1>
    </div>

    <div style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Olá, {nomeCliente}!</h2>
      <p style={{ color: '#475569', lineHeight: '1.5' }}>
        Seu lote de suprimentos <strong>#{pedidoId.slice(-6).toUpperCase()}</strong> foi registrado com sucesso em nosso sistema e já está sendo preparado para o envio.
      </p>

      {/* Tabela de Produtos */}
      <h3 style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '8px', marginTop: '30px' }}>Detalhes dos Equipamentos</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f8fafc', textAlign: 'left', color: '#64748b', fontSize: '14px' }}>
            <th style={{ padding: '10px' }}>Item</th>
            <th style={{ padding: '10px', textAlign: 'center' }}>Qtd</th>
            <th style={{ padding: '10px', textAlign: 'right' }}>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '10px', fontSize: '14px' }}>
                <strong>{item.name}</strong><br/>
                <span style={{ fontSize: '12px', color: '#94a3b8' }}>R$ {item.price.toFixed(2).replace('.', ',')} / un</span>
              </td>
              <td style={{ padding: '10px', textAlign: 'center', fontSize: '14px' }}>x{item.quantity}</td>
              <td style={{ padding: '10px', textAlign: 'right', fontSize: '14px', fontWeight: 'bold' }}>
                R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Resumo Financeiro */}
      <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: '#475569' }}>
          <span>Subtotal:</span>
          <strong>R$ {subtotal?.toFixed(2).replace('.', ',')}</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: '#475569' }}>
          <span>Frete Logístico:</span>
          <strong>{frete === 0 ? <span style={{ color: '#22c55e' }}>GRÁTIS</span> : `R$ ${frete?.toFixed(2).replace('.', ',')}`}</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #e2e8f0', fontSize: '18px' }}>
          <span><strong>Custo Total:</strong></span>
          <strong style={{ color: '#f97316' }}>R$ {total?.toFixed(2).replace('.', ',')}</strong>
        </div>
      </div>

      {/* Endereço */}
      <h3 style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '8px' }}>Destino Logístico</h3>
      <p style={{ color: '#475569', lineHeight: '1.5', backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px' }}>
        <strong>{endereco?.rua}, Nº {endereco?.numero}</strong><br/>
        {endereco?.bairro}<br/>
        {endereco?.cidade} - {endereco?.estado}<br/>
        CEP: {endereco?.cep}
      </p>
    </div>

    {/* Rodapé */}
    <div style={{ backgroundColor: '#f1f5f9', padding: '20px', textAlign: 'center', color: '#64748b', fontSize: '12px' }}>
      <p style={{ margin: 0 }}>Obrigado por confiar na AMEPI Suprimentos.</p>
      <p style={{ margin: '5px 0 0 0' }}>Este é um e-mail automático, por favor não responda.</p>
    </div>
  </div>
);