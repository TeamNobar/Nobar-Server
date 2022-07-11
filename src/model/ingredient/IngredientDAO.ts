import mongoose from "mongoose";
import { Ingredient } from "./Ingredient";

const IngredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  engName: {
    type: String,
    required: true,
  },
  proof: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  }
});

export default mongoose.model<mongoose.Document & Ingredient>("Ingredient", IngredientSchema);