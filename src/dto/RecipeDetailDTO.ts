import RecipeIngredient from "../model/recipe/RecipeIngredient";

export interface RecipeDetailDTO {
  id: string
  name: string,
  enName: string,
  version: string[],
  base: string,
  proof: number,
  proofIcon: string,
  skill: number,
  glass: number,
  ingredients: RecipeIngredient[],
  steps: string[],
  isScrap: boolean
}

