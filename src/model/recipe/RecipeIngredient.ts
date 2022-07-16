import * as mongoose from "mongoose";

export default interface RecipeIngredient{
  ingredient: mongoose.Schema.Types.ObjectId,
  quantity: number,
  unit: string
}