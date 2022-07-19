import RecipeIngredient from "../model/recipe/RecipeIngredient";
import { BaseDTO }      from "./base/BaseDTO";
import { GlassDTO }     from "./recipe/GlassDTO";
import { SkillDTO }     from "./recipe/SkillDTO";

export interface RecipeDetailDTO {
  id: string
  name: string,
  enName: string,
  version: string[],
  base: BaseDTO,
  proof: number,
  proofIcon: string,
  skill: SkillDTO,
  glass: GlassDTO,
  ingredients: RecipeIngredient[],
  steps: string[],
  isScrap: boolean
}

