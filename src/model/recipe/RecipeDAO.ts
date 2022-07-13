import mongoose from "mongoose";
import { Recipe } from "./Recipe"; 

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  enName: {
    type: String,
    required: true,
  },
  version: {
    type: [String],
  },
  base: {
    type: String,
    required: true,
  },
  proof: {
    type: Number,
    required: true,
  },
  skill: {
    id: { type: String, required: true },
    name: { type: String, required: true },
  },
  glass: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    required: true,
  },
  ingredients: [{
    ingredient: { type: mongoose.Schema.Types.ObjectId, requried: true, ref: "Ingredient" },
    quantity: { type: Number, requried: true },
    unit: { type: String, requred: true }
  }],
  steps: [String],  

});

export default mongoose.model<mongoose.Document & Recipe>("Recipe", RecipeSchema);