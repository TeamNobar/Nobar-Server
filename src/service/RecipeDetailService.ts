import { Model }  from "mongoose";
import { Recipe } from "../model/recipe/Recipe";

export default class RecipeDetailService {
  constructor(
    private readonly recipeDAO: Model<Recipe & Document>
  ) {
  }
};