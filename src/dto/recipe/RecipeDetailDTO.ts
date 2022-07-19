import { BaseDTO }         from "../base/BaseDTO";
import { GlassDTO }        from "./GlassDTO";
import RecipeIngredientDTO from "./RecipeIngredientDTO";
import { SkillDTO }        from "./SkillDTO";

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
  ingredients: RecipeIngredientDTO[],
  steps: string[],
  isScrap: boolean
}

