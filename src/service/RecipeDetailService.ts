import { Document, Model } from "mongoose";
import { RecipeDetailDTO } from "../dto/RecipeDetailDTO";
import NobarError          from "../error/NobarError";
import { NobarErrorCode }  from "../error/NobarErrorCode";
import NobarErrorMessage   from "../error/NobarErrorMessage";
import logger              from "../loaders/Logger";
import { Base }            from "../model/base/Base";
import BaseEntity          from "../model/base/entity/BaseEntity";
import { Ingredient }      from "../model/ingredient/Ingredient";
import IngredientEntity    from "../model/ingredient/IngredientEntity";
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
      const recipe: RecipeEntity = await this.findRecipeById(recipeId);
      const base: BaseEntity = await this.findBaseById(recipe.base.valueOf().toString())
      const ingredients: IngredientEntity[] = Promise.all(recipe.ingredients.map(async (value) => {
        await this.findIngredientById(value.ingredient.valueOf().toString());
      }));
      const RecipeDetailResponse: RecipeDetailDTO =
      return {
        id: recipe._id.valueOf().toString(),
      };
    } catch (error) {
      logger.error(error);
      throw error
    }
  }

  private async findRecipeById(recipeId: string): Promise<RecipeEntity> {
    const recipe: RecipeEntity | null = await this.recipeDAO.findById(recipeId);
    if (!recipe) {
      throw new NobarError(NobarErrorCode.BAD_REQUST, NobarErrorMessage.NOT_FOUND_RECIPE);
    }
    return recipe;
  }

  private async findBaseById(baseId: string): Promise<BaseEntity> {
    const base: BaseEntity | null = await this.baseDAO.findById(baseId);
    if (!base) {
      throw new NobarError(NobarErrorCode.BAD_REQUST, NobarErrorMessage.NOT_FOUND_BASE);
    }
    return base;
  }

  private async findIngredientById(ingredientId: string) {
    const ingredient: IngredientEntity | null = await this.ingredientDAO.findById(ingredientId);
    if (!ingredient) {
      throw new NobarError(NobarErrorCode.BAD_REQUST, NobarErrorMessage.NOT_FOUND_BASE);
    }
  }
}