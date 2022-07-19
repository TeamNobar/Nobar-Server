import RecipeIngredient from "../../model/recipe/RecipeIngredient";
import { BaseDTO }      from "../base/BaseDTO";
import { GlassDTO }     from "./GlassDTO";
import { SkillDTO }     from "./SkillDTO";

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

