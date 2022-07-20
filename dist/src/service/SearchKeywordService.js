"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchKeywordService = void 0;
const IngredientDAO_1 = __importDefault(require("../model/ingredient/IngredientDAO"));
const RecommendDAO_1 = __importDefault(require("../model/recommend/RecommendDAO"));
const RecipeDAO_1 = __importDefault(require("../model/recipe/RecipeDAO"));
const BaseDAO_1 = __importDefault(require("../model/base/BaseDAO"));
const RecipeMapper_1 = require("../mapper/RecipeMapper");
const IngredientsMapper_1 = require("../mapper/IngredientsMapper");
class SearchKeywordService {
    getSearchKeywords() {
        return __awaiter(this, void 0, void 0, function* () {
            // 추천 검색어로 뜬 레시피 가져오기 - 일단 기본 레시피만 뜨도록
            const recommendRecipes = yield RecommendDAO_1.default.find({})
                .populate("recipeId", "_id name", RecipeDAO_1.default);
            const recommendsData = yield Promise.all(recommendRecipes.map((recommendRecipe) => {
                const recommendData = {
                    recipeId: recommendRecipe.recipeId._id,
                    name: recommendRecipe.recipeId.name
                };
                return recommendData;
            }));
            // 자동완성으로 쓸 레시피 이름 전부 가져오기
            const recipes = yield RecipeDAO_1.default.find({})
                .populate({ path: "base", model: BaseDAO_1.default })
                .populate({ path: "ingredients.ingredient", model: IngredientDAO_1.default });
            const recipesData = recipes.map((recipe) => {
                const recipeData = RecipeMapper_1.RecipeMapper.toRecipeDTO(recipe, recipe.base, recipe.ingredients);
                return recipeData;
            });
            // 자동완성으로 쓸 재료 이름 전부 가져오기
            const ingredients = yield IngredientDAO_1.default.find({});
            const ingredientsData = IngredientsMapper_1.IngredientsMapper.toIngredientDTO(ingredients);
            // data 결합해서 최종적으로 반환
            return {
                recommends: recommendsData,
                recipes: recipesData,
                ingredients: ingredientsData
            };
        });
    }
}
exports.SearchKeywordService = SearchKeywordService;
//# sourceMappingURL=SearchKeywordService.js.map