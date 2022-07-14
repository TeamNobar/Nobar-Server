import mongoose   from "mongoose";
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
  defaultRecipe: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: "Recipe"
  },
  version: {
    type: String,
  },
  base: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Base"
  },
  proof: {
    type: Number,
    required: true,
  },
  proofIcon: {
    type: String,
    required: true
  },
  skill: {
    type: Number,
    required: true
  },
  glass: {
    type: Number,
    required: true
  },
  ingredients: [
    {
      ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        requried: true,
        ref: "Ingredient"
      },
      quantity: {
        type: Number,
        requried: true
      },
      unit: {
        type: String,
        requred: true
      }
    }],
  steps: {
    type: [String],
    required: true
  }
});

export default mongoose.model<mongoose.Document & Recipe>("Recipe", RecipeSchema);
