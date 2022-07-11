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
    id: { type: String },
    name: { type: String },
    required: true,
  },
  glass: {
    id: { type: String },
    name: { type: String },
    required: true,
  },
  ingredients: [{
    name: { type: String, required: true },
    engName: { type: String, required: true },
    proof: { type: Number, required: true },
    category: { type: String, required: true },
  }],
  steps: [String],  

});

export default mongoose.model<mongoose.Document & Recipe>("Recipe", RecipeSchema);