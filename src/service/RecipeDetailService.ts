import { Model }      from "mongoose";
import { Ingredient } from "../model/ingredient/Ingredient";
import { Recipe }     from "../model/recipe/Recipe";

export default class RecipeDetailService {
  constructor(
    private readonly recipeDAO: Model<Recipe & Document>,
    private readonly ingredient: Model<Ingredient & Document>
  ) {
  }
};