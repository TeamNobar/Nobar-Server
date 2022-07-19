import { GlassDTO }          from "../../../dto/recipe/GlassDTO";
import { RecipeDetailDTO }   from "../../../dto/recipe/RecipeDetailDTO";
import RecipeIngredientDTO   from "../../../dto/recipe/RecipeIngredientDTO";
import { SkillDTO }          from "../../../dto/recipe/SkillDTO";
import BaseEntity            from "../../base/entity/BaseEntity";
import BaseMapper            from "../../base/mapper/BaseMapper";
import RecipeEntity          from "../entity/RecipeEntity";
import { Glass }             from "../Glass";
import { Skill }             from "../Skill";
import GlassMapper           from "./GlassMapper";
import RecipeIngredientEmbed from "./RecipeIngredientEmbed";
import SkillMapper           from "./SkillMapper";

export default class RecipeMapper {
  public static toRecipeDetailDTO(
    recipe: RecipeEntity,
    base: BaseEntity,
    recipeVersions: RecipeEntity[] | null,
    embededIngredient: RecipeIngredientEmbed[]
  ): RecipeDetailDTO {
    const skillDTO: SkillDTO = SkillMapper.toSkillDTO(
      Skill.findSkillById(recipe.skill)
    );
    const glassDTO: GlassDTO = GlassMapper.toGlassDTO(
      Glass.findGlassById(recipe.glass)
    );
    return <RecipeDetailDTO>{
      id: recipe._id.valueOf().toString(),
      name: recipe.name,
      enName: recipe.enName,
      version: this.getRecipeNames(recipeVersions),
      base: BaseMapper.toBaseDTO(base),
      proof: recipe.proof,
      proofIcon: recipe.proofIcon,
      skill: skillDTO,
      glass: glassDTO,
      ingredients: this.mapRecipeIngredientDTO(embededIngredient),
      steps: recipe.steps,
      isScrap: false
    }
  }

  private static getRecipeNames(recipeVersions: RecipeEntity[] | null): string[] {
    return recipeVersions?.map(
      value => value.version
    ) || []
  }

  private static mapRecipeIngredientDTO(embededIngredient: RecipeIngredientEmbed[]) {
    return embededIngredient.map(value => <RecipeIngredientDTO>{
      id: value.ingredient._id.valueOf().toString(),
      name: value.ingredient.name,
      enName: value.ingredient.enName,
      proof: value.ingredient.proof,
      category: value.ingredient.category,
      quantity: this.makeQuantity(value.quantity, value.unit)
    })
  }

  private static makeQuantity(quantity: number, unit: string): string {
    if (quantity === 0) {
      return unit;
    }
    return `${quantity}${unit}`;
  }
};