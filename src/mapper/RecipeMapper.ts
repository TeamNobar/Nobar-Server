// import { Base } from "src/model/base/Base";
import { IngredientMapper } from "./IngredientMapper";
// import { Recipe } from "../model/recipe/Recipe";
// import { Ingredient } from "../model/ingredient/Ingredient";

export class RecipeMapper {
  public static toRecipeDTO(recipe: any, recipeId: string, base: any, ingredients: any) {

    const ingredientData = IngredientMapper.toIngredientDTO(ingredients);

    return {
      id: recipeId,
      name: recipe.name,
      enName: recipe.enName,
      base: {
        id: base._id,
        name: base.name,
        url: base.url,
      },
      proof: recipe.proof,
      proofIcon: recipe.proofIcon,
      skill: {
        name: "스킬이름",
        url: "스킬이미지url"
      },
      glass: {
        name: "잔 이름",
        url: "잔 이미지url"
      },
      steps: recipe.steps,
      ingredients: ingredientData,
      defaultRecipe: recipe.defaultRecipe
    }
  }
}