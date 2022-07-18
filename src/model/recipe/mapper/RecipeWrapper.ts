import { RecipeDetailDTO } from "../../../dto/RecipeDetailDTO";
import BaseEntity          from "../../base/entity/BaseEntity";
import IngredientEntity    from "../../ingredient/IngredientEntity";
import RecipeEntity        from "../entity/RecipeEntity";

export default class RecipeWrapper {
  public static toRecipeDetailDTO(
    recipeEntity: RecipeEntity,
    baseEntity: BaseEntity
  ): RecipeDetailDTO {

  }
};