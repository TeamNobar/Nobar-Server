"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseMapper_1 = __importDefault(require("../../base/mapper/BaseMapper"));
const Glass_1 = require("../Glass");
const Skill_1 = require("../Skill");
const GlassMapper_1 = __importDefault(require("./GlassMapper"));
const SkillMapper_1 = __importDefault(require("./SkillMapper"));
class RecipeMapper {
    static toRecipeDTO(recipe, base, embededIngredient) {
        var _a;
        const skillDTO = SkillMapper_1.default.toSkillDTO(Skill_1.Skill.findSkillById(recipe.skill));
        const glassDTO = GlassMapper_1.default.toGlassDTO(Glass_1.Glass.findGlassById(recipe.glass));
        return {
            id: recipe._id.valueOf().toString(),
            name: recipe.name,
            enName: recipe.enName,
            base: BaseMapper_1.default.toBaseDTO(base),
            proof: recipe.proof,
            proofIcon: recipe.proofIcon,
            skill: skillDTO,
            glass: glassDTO,
            ingredients: this.mapRecipeIngredientDTO(embededIngredient),
            steps: recipe.steps,
            defaultRecipe: (_a = recipe.defaultRecipe) === null || _a === void 0 ? void 0 : _a.valueOf().toString()
        };
    }
    static toRecipeDetailDTO(recipe, base, recipeVersions, embededIngredient) {
        const skillDTO = SkillMapper_1.default.toSkillDTO(Skill_1.Skill.findSkillById(recipe.skill));
        const glassDTO = GlassMapper_1.default.toGlassDTO(Glass_1.Glass.findGlassById(recipe.glass));
        return {
            id: recipe._id.valueOf().toString(),
            name: recipe.name,
            enName: recipe.enName,
            version: this.getRecipeNames(recipeVersions),
            base: BaseMapper_1.default.toBaseDTO(base),
            proof: recipe.proof,
            proofIcon: recipe.proofIcon,
            skill: skillDTO,
            glass: glassDTO,
            ingredients: this.mapRecipeIngredientDTO(embededIngredient),
            steps: recipe.steps,
            isScrap: false
        };
    }
    static getRecipeNames(recipeVersions) {
        return (recipeVersions === null || recipeVersions === void 0 ? void 0 : recipeVersions.map(value => value.version)) || [];
    }
    static mapRecipeIngredientDTO(embededIngredient) {
        return embededIngredient.map(value => ({
            id: value.ingredient._id.valueOf().toString(),
            name: value.ingredient.name,
            enName: value.ingredient.enName,
            proof: value.ingredient.proof,
            category: value.ingredient.category,
            quantity: this.makeQuantity(value.quantity, value.unit)
        }));
    }
    static makeQuantity(quantity, unit) {
        if (quantity === 0) {
            return unit;
        }
        return `${quantity}${unit}`;
    }
}
exports.default = RecipeMapper;
;
//# sourceMappingURL=RecipeMapper.js.map