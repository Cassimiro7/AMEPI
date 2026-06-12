import mongoose, { Schema, Document } from "mongoose";

// 1. Criamos os Schemas correspondentes às suas interfaces
const TechnicalSpecificationSchema = new Schema({
  caNumber: { type: String, required: true },
  validity: { type: String, required: true },
  status: { 
    type: String, 
    enum: ["REGULAR", "VENCIDO", "EM_REVISAO"], 
    required: true 
  },
  nrNorm: { type: String, required: true },
  fabricante: { type: String, required: true }
}, { _id: false }); // _id: false evita que o MongoDB crie um ID dentro do objeto interno

const ProductSchema = new Schema({
  id: { type: Number, required: true, unique: true }, // O ID numérico que você já usa
  name: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number, required: true },
  brand: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  reviews: { type: Number, required: true },
  technicalInfo: { type: TechnicalSpecificationSchema, required: true }
}, {
  timestamps: true // Adiciona automaticamente createdAt e updatedAt (útil para sistemas reais)
});

// 2. Exportamos o Modelo cuidando para não recriá-lo se ele já existir em cache no Next.js
const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;