"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeMapper = void 0;
const IngredientsMapper_1 = require("./IngredientsMapper");
const Skill_1 = require("../model/recipe/Skill");
const Glass_1 = require("../model/recipe/Glass");
class RecipeMapper {
    static toRecipeDTO(recipe, base, ingredients) {
        const ingredientData = IngredientsMapper_1.IngredientsMapper.toIngredientDetailDTO(ingredients);
        return {
            id: recipe._id,
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
                name: Skill_1.Skill.findSkillById(recipe.skill).name,
                url: Skill_1.Skill.findSkillById(recipe.skill).url
            },
            glass: {
                name: Glass_1.Glass.findGlassById(recipe.glass).name,
                url: Glass_1.Glass.findGlassById(recipe.glass).url
            },
            steps: recipe.steps,
            ingredients: ingredientData,
            defaultRecipe: recipe.defaultRecipe
        };
    }
}
exports.RecipeMapper = RecipeMapper;
//# sourceMappingURL=RecipeMapper.js.map