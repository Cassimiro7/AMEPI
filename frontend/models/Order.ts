// models/Order.ts
import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema({
  items: { type: Array, required: true },
  subtotal: { type: Number, required: true },
  frete: { type: Number, required: true },
  total: { type: Number, required: true },
  cep: { type: String, required: true },
  endereco: { type: String, required: true },
  status: { type: String, default: "Pendente" }
}, {
  timestamps: true // Cria automaticamente a data e hora do pedido
});

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;