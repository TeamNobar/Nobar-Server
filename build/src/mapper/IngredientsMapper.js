"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientsMapper = void 0;
class IngredientsMapper {
    // RecipeDAO에서 찾은 Ingredients
    static toIngredientDetailDTO(ingredients) {
        const ingredientsDetailData = ingredients.map((ingredient) => {
            let quantityData = ingredient.unit;
            if (ingredient.quantity !== 0) {
                quantityData = ingredient.quantity + quantityData;
            }
            const ingredientDetailData = {
                id: ingredient.ingredient._id,
                name: ingredient.ingredient.name,
                enName: ingredient.ingredient.enName,
                proof: ingredient.ingredient.proof,
                category: ingredient.ingredient.category,
                quantity: quantityData
            };
            return ingredientDetailData;
        });
        return ingredientsDetailData;
    }
    static toIngredientDTO(ingredients) {
        // IngredientDAO에서 찾은 Ingredients
        const ingredientsData = ingredients.map((ingredient) => ({
            id: ingredient._id,
            name: ingredient.name,
            enName: ingredient.enName,
            proof: ingredient.proof,
            category: ingredient.category,
        }));
        return ingredientsData;
    }
}
exports.IngredientsMapper = IngredientsMapper;
//# sourceMappingURL=IngredientsMapper.js.map