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
  technicalInfo: TechnicalSpecification; // <-- Nova propriedade obrigatória
}

export const products: Product[] = [
  {
    id: 1,
    name: "Cinturão de Segurança Tipo Paraquedista c/ Regulagem",
    price: 189.90,
    oldPrice: 249.90,
    brand: "Task",
    category: "Trabalho em Altura",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400", // Substitua pelas suas imagens
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
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400",
    description: "Óculos de segurança com armação e visor confeccionados em uma única peça de policarbonato com tratamento antirrisco e proteção UV.",
    reviews: 85,
    technicalInfo: {
      caNumber: "34122",
      validity: "10/05/2027",
      status: "REGULAR",
      nrNorm: "NR-6",
      fabricante: "Danny Comércio de EPIs"
    }
  }
];