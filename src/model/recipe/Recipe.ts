import mongoose from "mongoose";
import RecipeIngredient from "./RecipeIngredient";

export interface Recipe {
  name: string,
  enName: string,
  defaultRecipe: mongoose.Schema.Types.ObjectId | null,
  version: string,
  base: mongoose.Schema.Types.ObjectId, 
  proof: number,
  proofIcon: string,
  skill: number,
  glass: number,
  ingredients: RecipeIngredient[],
  steps: string[],
}

