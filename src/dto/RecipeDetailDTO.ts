import RecipeIngredient from "../model/recipe/RecipeIngredient";
import { BaseDTO }      from "./base/BaseDTO";

export interface RecipeDetailDTO {
  id: string
  name: string,
  enName: string,
  version: string[],
  base: BaseDTO,
  proof: number,
  proofIcon: string,
  skill: number,
  glass: number,
  ingredients: RecipeIngredient[],
  steps: string[],
  isScrap: boolean
}

