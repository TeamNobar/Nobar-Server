"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientMapper = void 0;
class IngredientMapper {
    // RecipeDAO에서 찾은 Ingredients
    static toIngredientDetailDTO(ingredients) {
        const ingredientsDetailData = ingredients.map((elem) => {
            let quantityData = elem.unit;
            if (elem.quantity !== 0) {
                quantityData = elem.quantity + quantityData;
            }
            const rst = {
                id: elem.ingredient._id,
                name: elem.ingredient.name,
                enName: elem.ingredient.enName,
                proof: elem.ingredient.proof,
                category: elem.ingredient.category,
                quantity: quantityData
            };
            return rst;
        });
        return ingredientsDetailData;
    }
    static toIngredientDTO(ingredients) {
        // IngredientDAO에서 찾은 Ingredients
        const ingredientsData = ingredients.map((elem) => ({
            id: elem._id,
            name: elem.name,
            enName: elem.enName,
            proof: elem.proof,
            category: elem.category,
        }));
        return ingredientsData;
    }
}
exports.IngredientMapper = IngredientMapper;
//# sourceMappingURL=IngredientMapper.js.map