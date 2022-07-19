import { RecipeDetailDTO } from "../../../dto/RecipeDetailDTO";
import BaseEntity          from "../../base/entity/BaseEntity";
import IngredientEntity    from "../../ingredient/IngredientEntity";
import RecipeEntity        from "../entity/RecipeEntity";

export default class RecipeWrapper {
  public static toRecipeDetailDTO(
    recipe: RecipeEntity,
    base: BaseEntity,
    recipeVersions: RecipeEntity[] | null
  ): RecipeDetailDTO {
    return <RecipeDetailDTO>{
      id: recipe._id,
      name: recipe.name,
      enName: recipe.enName,
      defaultRecipe
    }
  }

  private getRecipeNames(recipeVersions: RecipeEntity[] | null) {
    return recipeVersions?.map(
      value => value.version
    );
  }
};