import RecipeIngredient from "../model/recipe/RecipeIngredient";

export interface RecipeDetailDTO {
  name: string,
  enName: string,
  defaultRecipe: string | null,
  version: string,
  base: string,
  proof: number,
  proofIcon: string,
  skill: number,
  glass: number,
  ingredients: RecipeIngredient[],
  steps: string[],
  isScrap: boolean
}

