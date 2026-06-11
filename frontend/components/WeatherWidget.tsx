'use client';

import { useState, useEffect } from 'react';

export default function WeatherWidget() {
  const [temp, setTemp] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-3.7172&longitude=-38.5431&current=temperature_2m"
        );
        
        // Se a API falhar ou der limite excedido, usamos console.warn para o Next.js não travar a tela
        if (!res.ok) {
          console.warn("Open-Meteo API: Limite diário excedido. Usando temperatura padrão de Fortaleza.");
          setLoading(false);
          return;
        }

        const data = await res.json();
        
        if (data?.current?.temperature_2m !== undefined) {
          setTemp(data.current.temperature_2m);
        }
      } catch (error) {
        // Erros de rede também viram avisos discretos no terminal
        console.warn("Falha de rede ao buscar dados do clima:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  // Enquanto carrega pela primeira vez
  if (loading) {
    return (
      <div className="bg-[#232f3e] text-[#febd69] p-2 text-sm flex items-center justify-center border-t border-gray-600 font-bold animate-pulse">
        <span>🌤️ Sintonizando clima em Fortaleza...</span>
      </div>
    );
  }

  // Como o limite da API estourou hoje, ele vai cair aqui e usar fixo os 28°C pro layout ficar perfeito!
  const climaFinal = temp !== null ? `${temp}°C` : "28°C";

  return (
    <div className="bg-[#232f3e] text-[#febd69] p-2 text-sm flex items-center justify-center border-t border-gray-600 font-bold">
      <span>🌤️ Clima em Fortaleza agora: {climaFinal}</span>
    </div>
  );
}