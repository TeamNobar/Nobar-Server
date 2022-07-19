import mongoose, { Model }   from "mongoose";
import { RecipeDetailDTO }   from "../dto/recipe/RecipeDetailDTO";
import NobarError            from "../error/NobarError";
import { NobarErrorCode }    from "../error/NobarErrorCode";
import NobarErrorMessage     from "../error/NobarErrorMessage";
import logger                from "../loaders/Logger";
import { Base }              from "../model/base/Base";
import BaseEntity            from "../model/base/entity/BaseEntity";
import { Ingredient }        from "../model/ingredient/Ingredient";
import IngredientEntity      from "../model/ingredient/IngredientEntity";
import RecipeEntity          from "../model/recipe/entity/RecipeEntity";
import RecipeIngredientEmbed from "../model/recipe/mapper/RecipeImgredientEmbed";
import RecipeMapper          from "../model/recipe/mapper/RecipeMapper";
import { Recipe }            from "../model/recipe/Recipe";
import RecipeIngredient      from "../model/recipe/RecipeIngredient";

export default class RecipeDetailService {
  constructor(
    private readonly recipeDAO: Model<Recipe & mongoose.Document>,
    private readonly baseDAO: Model<Base & mongoose.Document>,
    private readonly ingredientDAO: Model<Ingredient & mongoose.Document>
  ) {
  }

  public async getRecipeDetail(recipeId: string): Promise<RecipeDetailDTO> {
    try {
      // DI 하고 싶어서 분리하고 싶은데 내부에서 DAO 그대로 하면 무슨 소용
      /*const recipe: RecipeEntity | null = await this.recipeDAO.findById(recipeId)
        .populate({path: "base", model: BaseDAO})
        .populate({path: "ingredients.ingredient", model: IngredientDAO});*/
      const recipe: RecipeEntity = await this.findRecipeById(recipeId);
      const base: BaseEntity = await this.findBaseById(recipe.base.valueOf().toString());
      const recipeVersions: RecipeEntity[] | null = await this.findRecipeVersionNames(recipeId);
      const embededIngredient: RecipeIngredientEmbed[] = await this.embedAllIngredient(recipe.ingredients);
      const recipeDetailDTO: RecipeDetailDTO = RecipeMapper.toRecipeDetailDTO(recipe, base, recipeVersions, embededIngredient);
      return recipeDetailDTO
    } catch (error) {
      logger.error(error);
      throw error
    }
  }

  private async findRecipeById(recipeId: string): Promise<RecipeEntity> {
    const recipe: RecipeEntity | null = await this.recipeDAO.findById(recipeId);
    if (!recipe) {
      throw new NobarError(NobarErrorCode.BAD_REQUEST, NobarErrorMessage.NOT_FOUND_RECIPE);
    }
    return recipe;
  }

  private async findBaseById(baseId: string): Promise<BaseEntity> {
    const base: BaseEntity | null = await this.baseDAO.findById(baseId);
    if (!base) {
      throw new NobarError(NobarErrorCode.BAD_REQUEST, NobarErrorMessage.NOT_FOUND_BASE);
    }
    return base;
  }

  private async findRecipeVersionNames(defaultRecipeId: string): Promise<RecipeEntity[] | null> {
    return this.recipeDAO.find({defaultRecipe: defaultRecipeId});
  }

  private async embedAllIngredient(ingredients: RecipeIngredient[]): Promise<RecipeIngredientEmbed[]> {
    return Promise.all(
      ingredients.map(async value => await this.embedIngredient(value))
    )
  }

  private async embedIngredient(recipeIngredient: RecipeIngredient) {
    const ingredient: IngredientEntity = await this.findIngredientById(recipeIngredient.ingredient.valueOf().toString());
    return <RecipeIngredientEmbed>{
      ingredient: ingredient,
      quantity: recipeIngredient.quantity,
      unit: recipeIngredient.unit
    }
  }

  private async findIngredientById(ingredientId: string): Promise<IngredientEntity> {
    const ingredient: IngredientEntity | null = await this.ingredientDAO.findById(ingredientId);
    if (!ingredient) {
      throw new NobarError(NobarErrorCode.BAD_REQUEST, NobarErrorMessage.NOT_FOUND_BASE);
    }
    return ingredient;
  }
}