import { BaseDTO } from "../base/BaseDTO";
import { GlassDTO } from "../recipe/GlassDTO";
import { SkillDTO } from "../recipe/SkillDTO";
import { IngredientDTO } from "../ingredient/IngredientDTO";

export interface RecipeDTO {
  id: string,
  name: string,
  enName: string,
  base: BaseDTO,
  proof: number,
  proofIcon: string,  
  skill: SkillDTO,
  glass: GlassDTO,
  ingredients: IngredientDTO[],
  steps: string[],
  defaultRecipe: string
}