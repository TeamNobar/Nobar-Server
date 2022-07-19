import { RecipeDetailDTO } from "../../../dto/RecipeDetailDTO";
import BaseEntity          from "../../base/entity/BaseEntity";
import BaseMapper          from "../../base/mapper/BaseMapper";
import IngredientEntity    from "../../ingredient/IngredientEntity";
import RecipeEntity        from "../entity/RecipeEntity";

export default class RecipeMapper {
  public static toRecipeDetailDTO(
    recipe: RecipeEntity,
    base: BaseEntity,
    recipeVersions: RecipeEntity[] | null
  ): RecipeDetailDTO {
    return <RecipeDetailDTO>{
      id: recipe._id.valueOf().toString(),
      name: recipe.name,
      enName: recipe.enName,
      version: this.getRecipeNames(recipeVersions),
      base: BaseMapper.toBaseDTO(base),
      proof: recipe.proof,
      proofIcon: recipe.proofIcon,
      skill: recipe.skill,
      glass: recipe.glass
    }
  }

  private static getRecipeNames(recipeVersions: RecipeEntity[] | null): string[] {
    return recipeVersions?.map(
      value => value.version
    ) || []
  }
};