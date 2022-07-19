import mongoose       from "mongoose";
import { Ingredient } from "./Ingredient";

export default interface IngredientEntity extends Ingredient {
  _id: mongoose.Schema.Types.ObjectId,
}