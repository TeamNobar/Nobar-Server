import mongoose   from "mongoose";
import { Recipe } from "../Recipe";

export default interface RecipeEntity extends Recipe {
  _id: mongoose.Schema.Types.ObjectId
}