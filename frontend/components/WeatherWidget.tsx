export default async function WeatherWidget() {
  try {
    // Fazendo a requisição para a API de clima usando as coordenadas de Fortaleza
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-3.7172&longitude=-38.5431&current_weather=true",
      { next: { revalidate: 3600 } } // Atualiza o clima a cada 1 hora automaticamente
    );
    
    const data = await res.json();
    const temp = data.current_weather.temperature;

    return (
      <div className="bg-[#232f3e] text-[#febd69] p-2 text-sm flex items-center justify-center border-t border-gray-600 font-bold">
        <span>🌤️ Clima em Fortaleza agora: {temp}°C</span>
      </div>
    );
  } catch (error) {
    // Se a internet cair ou a API falhar, o widget apenas desaparece sem quebrar o site
    return null; 
  }
}