export interface TechnicalSpecification {
  caNumber: string;
  validity: string;
  status: "REGULAR" | "VENCIDO" | "EM_REVISAO";
  nrNorm: string;
  fabricante: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  brand: string;
  image: string;
  category: string;
  description: string;
  reviews: number;
  technicalInfo: TechnicalSpecification;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Cinturão de Segurança Tipo Paraquedista c/ Regulagem",
    price: 189.90,
    oldPrice: 249.90,
    brand: "Task",
    category: "Trabalho em Altura",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356fce?q=80&w=600", 
    description: "Cinturão de segurança tipo paraquedista confeccionado em fita de poliéster multifilamentos de alta tenacidade. Possui argola dorsal em aço forjado para retenção de queda e fivelas de engate rápido.",
    reviews: 142,
    technicalInfo: {
      caNumber: "42315",
      validity: "15/12/2028",
      status: "REGULAR",
      nrNorm: "NR-35 / NR-6",
      fabricante: "Task Equipamentos Industriais Ltda"
    }
  },
  {
    id: 2,
    name: "Óculos de Proteção Lente Incolor Antirrisco",
    price: 15.50,
    oldPrice: 22.90,
    brand: "Danny",
    category: "Proteção Ocular",
    image: "https://images.unsplash.com/photo-1580983546059-4fbd486a4387?q=80&w=600",
    description: "Óculos de segurança com armação e visor confeccionados em uma única peça de policarbonato com tratamento antirrisco e proteção UV.",
    reviews: 85,
    technicalInfo: {
      caNumber: "34122",
      validity: "10/05/2027",
      status: "REGULAR",
      nrNorm: "NR-6",
      fabricante: "Danny Comércio de EPIs"
    }
  },
  {
    id: 3,
    name: "Capacete de Segurança com Jugular Aba Frontal",
    price: 34.90,
    oldPrice: 45.00,
    brand: "MSA",
    category: "Proteção da Cabeça",
    image: "https://images.unsplash.com/photo-1541888086225-ee8075f7312b?q=80&w=600",
    description: "Capacete de segurança classe B, injetado em polietileno de alta densidade, com suspensão em fita e tira jugular ajustável. Ideal para construção civil e indústrias.",
    reviews: 312,
    technicalInfo: {
      caNumber: "3104",
      validity: "22/08/2026",
      status: "REGULAR",
      nrNorm: "NR-6",
      fabricante: "MSA do Brasil"
    }
  },
  {
    id: 4,
    name: "Bota de Segurança em Couro com Bico de Composite",
    price: 159.90,
    oldPrice: 199.90,
    brand: "Marluvas",
    category: "Proteção para os Pés",
    image: "https://images.unsplash.com/photo-1605367303036-7e44a04d0937?q=80&w=600",
    description: "Calçado de segurança tipo botina, confeccionado em couro vaqueta com fechamento em cadarço. Possui biqueira de composite leve e resistente, além de solado bidensidade antiderrapante.",
    reviews: 420,
    technicalInfo: {
      caNumber: "41419",
      validity: "05/11/2029",
      status: "REGULAR",
      nrNorm: "NR-6",
      fabricante: "Marluvas Calçados de Segurança"
    }
  },
  {
    id: 5,
    name: "Luva de Vaqueta Petroleira com Reforço",
    price: 28.50,
    oldPrice: 35.00,
    brand: "Kalipso",
    category: "Proteção para as Mãos",
    image: "https://images.unsplash.com/photo-1584844696144-8d96333917c5?q=80&w=600",
    description: "Luva de segurança confeccionada em couro vaqueta na palma e dorso, com reforço interno e elástico para ajuste. Excelente resistência à abrasão e escoriações.",
    reviews: 198,
    technicalInfo: {
      caNumber: "16072",
      validity: "12/03/2025",
      status: "REGULAR",
      nrNorm: "NR-6",
      fabricante: "Kalipso EPIs"
    }
  },
  {
    id: 6,
    name: "Protetor Auditivo Tipo Concha 22dB",
    price: 89.90,
    oldPrice: 115.00,
    brand: "3M",
    category: "Proteção Auditiva",
    image: "https://images.unsplash.com/photo-1588147660601-3c5cb63c0a4e?q=80&w=600",
    description: "Abafador de ruídos com hastes ajustáveis e conchas revestidas com espuma e almofadas macias. Oferece atenuação de 22dB (NRRsf), garantindo conforto para longas jornadas.",
    reviews: 275,
    technicalInfo: {
      caNumber: "12189",
      validity: "30/09/2026",
      status: "REGULAR",
      nrNorm: "NR-15 / NR-6",
      fabricante: "3M do Brasil Ltda"
    }
  },
  {
    id: 7,
    name: "Respirador PFF2 / N95 com Válvula",
    price: 8.90,
    oldPrice: 12.50,
    brand: "Delta Plus",
    category: "Proteção Respiratória",
    image: "https://images.unsplash.com/photo-1584515979956-d9cb795c3574?q=80&w=600",
    description: "Máscara respiratória PFF2 com válvula de exalação que facilita a respiração e reduz o calor interno. Protege contra poeiras, névoas e fumos metálicos.",
    reviews: 530,
    technicalInfo: {
      caNumber: "38503",
      validity: "18/01/2027",
      status: "REGULAR",
      nrNorm: "NR-6",
      fabricante: "Delta Plus Brasil"
    }
  },
  {
    id: 8,
    name: "Máscara de Solda de Escurecimento Automático",
    price: 219.90,
    oldPrice: 289.00,
    brand: "Vonder",
    category: "Proteção Facial e Solda",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600",
    description: "Máscara de solda com display de escurecimento automático (DIN 9 a 13) movida a bateria de lítio e células solares. Protege contra raios UV e infravermelhos.",
    reviews: 112,
    technicalInfo: {
      caNumber: "34708",
      validity: "04/07/2024",
      status: "EM_REVISAO",
      nrNorm: "NR-6",
      fabricante: "OVD Máquinas e Ferramentas"
    }
  },
  {
    id: 9,
    name: "Colete Refletivo de Sinalização Classe 2",
    price: 22.00,
    oldPrice: 30.00,
    brand: "Steelflex",
    category: "Vestimentas",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600",
    description: "Colete de segurança de alta visibilidade, confeccionado em tecido fluorescente com faixas refletivas. Fechamento frontal em zíper. Ideal para tráfego e obras.",
    reviews: 88,
    technicalInfo: {
      caNumber: "ISENTO",
      validity: "N/A",
      status: "REGULAR",
      nrNorm: "NBR 15292",
      fabricante: "Steelflex Vestimentas"
    }
  },
  {
    id: 10,
    name: "Luva Anticorte Nível 5 com Banho de PU",
    price: 45.90,
    oldPrice: 59.90,
    brand: "Danny",
    category: "Proteção para as Mãos",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600",
    description: "Luva tricotada em fios de polietileno de alta densidade com banho de poliuretano (PU) na palma. Oferece máxima resistência a cortes e excelente tato.",
    reviews: 156,
    technicalInfo: {
      caNumber: "29014",
      validity: "11/11/2023",
      status: "VENCIDO",
      nrNorm: "NR-6",
      fabricante: "Danny Comércio de EPIs"
    }
  }
];