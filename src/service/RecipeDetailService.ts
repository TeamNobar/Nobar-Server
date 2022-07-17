import { Document, Model } from "mongoose";
import logger              from "../loaders/Logger";
import { Recipe }          from "../model/recipe/Recipe";

export default class RecipeDetailService {
  constructor(
    private readonly recipeDAO: Model<Recipe & Document>,
  ) {
  }

  public async getRecipeDetail(recipeId: string) {
    try {
      const recipe = await this.recipeDAO.findById(recipeId)
        .populate("base");
      return recipe;
    } catch (error) {
      logger.error(error);
      throw error
    }
  }
};