import { IngredientsMapper } from "./IngredientsMapper";
import mongoose from "mongoose";
import { Base } from "../model/base/Base";
import { Ingredient } from "../model/ingredient/Ingredient";
import { Skill } from "../model/recipe/Skill";
import { Glass } from "../model/recipe/Glass";


interface BaseForMapper extends Base {
  _id: mongoose.Schema.Types.ObjectId;
}

interface IngredientsForMapper extends Ingredient {
  _id: mongoose.Schema.Types.ObjectId;
}

interface IngredientsDetailForMapper {
  ingredient: IngredientsForMapper,
  quantity: number;
  unit: string;
}

interface RecipeForMapper {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  enName: string;
  defaultRecipe: mongoose.Schema.Types.ObjectId | null;
  version: string;
  base: BaseForMapper;
  proof: number;
  proofIcon: string;
  skill: number;
  glass: number;
  ingredients: IngredientsDetailForMapper[];
  steps: string[];
}

export class RecipeMapper {
  public static toRecipeDTO(
    recipe: RecipeForMapper, 
    base: BaseForMapper, 
    ingredients: IngredientsDetailForMapper[]
  ) {

    const ingredientData = IngredientsMapper.toIngredientDetailDTO(ingredients);

    return {
      id: recipe._id as unknown as string,
      name: recipe.name,
      enName: recipe.enName,
      base: {
        id: base._id as unknown as string,
        name: base.name,
        url: base.url,
      },
      proof: recipe.proof,
      proofIcon: recipe.proofIcon,
      skill: {
        name: Skill.findSkillById(recipe.skill).name,
        url: Skill.findSkillById(recipe.skill).url
      },
      glass: {
        name: Glass.findGlassById(recipe.glass).name,
        url: Glass.findGlassById(recipe.glass).url
      },
      steps: recipe.steps,
      ingredients: ingredientData,
      defaultRecipe: recipe.defaultRecipe as unknown as string
    }
  }
}

