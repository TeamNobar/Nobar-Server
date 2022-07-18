import { Document, Model } from "mongoose";
import NobarError          from "../error/NobarError";
import { NobarErrorCode }  from "../error/NobarErrorCode";
import NobarErrorMessage   from "../error/NobarErrorMessage";
import logger              from "../loaders/Logger";
import { Base }            from "../model/base/Base";
import BaseDAO             from "../model/base/BaseDAO";
import BaseEntity          from "../model/base/entity/BaseEntity";
import { Ingredient }      from "../model/ingredient/Ingredient";
import IngredientDAO       from "../model/ingredient/IngredientDAO";
import RecipeEntity        from "../model/recipe/entity/RecipeEntity";
import { Recipe }          from "../model/recipe/Recipe";

export default class RecipeDetailService {
  constructor(
    private readonly recipeDAO: Model<Recipe & Document>,
    private readonly baseDAO: Model<Base & Document>,
    private readonly ingredientDAO: Model<Ingredient & Document>
  ) {
  }

  public async getRecipeDetail(recipeId: string) {
    try {
      // DI 하고 싶어서 분리하고 싶은데 내부에서 DAO 그대로 하면 무슨 소용
      /*const recipe: RecipeEntity | null = await this.recipeDAO.findById(recipeId)
        .populate({path: "base", model: BaseDAO})
        .populate({path: "ingredients.ingredient", model: IngredientDAO});*/
      const recipe: RecipeEntity | null = await this.recipeDAO.findById(recipeId);
      if (!recipe) {
        throw new NobarError(NobarErrorCode.BAD_REQUST, NobarErrorMessage.NOT_FOUND_RECIPE);
      }

      const base: BaseEntity | null
      const ingredients = recipe.ingredients.map(value => {
        value.ingredient.valueOf();
      })
      return {
        id: recipe._id.valueOf().toString(),
      };
    } catch (error) {
      logger.error(error);
      throw error
    }
  }

  private validateReicpe(recipe: RecipeEntity | null) {
    throw new NobarError(
      NobarErrorCode.BAD_REQUST
    )
  }
}