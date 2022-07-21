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
exports.SearchRecipesByBaseService = void 0;
const RecipeDAO_1 = __importDefault(require("../model/recipe/RecipeDAO"));
const BaseDAO_1 = __importDefault(require("../model/base/BaseDAO"));
const IngredientDAO_1 = __importDefault(require("../model/ingredient/IngredientDAO"));
const RecipeMapper_1 = require("../mapper/RecipeMapper");
const NobarError_1 = __importDefault(require("../error/NobarError"));
const NobarErrorCode_1 = require("../error/NobarErrorCode");
const NobarErrorMessage_1 = __importDefault(require("../error/NobarErrorMessage"));
class SearchRecipesByBaseService {
    findRecipesByBase(base) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundBase = yield BaseDAO_1.default.findOne({ name: base });
            if (!foundBase) {
                throw new NobarError_1.default(NobarErrorCode_1.NobarErrorCode.BAD_REQUEST, NobarErrorMessage_1.default.NOT_FOUND_BASE);
            }
            const foundRecipes = yield RecipeDAO_1.default.find({ base: foundBase._id })
                .populate({ path: "base", model: BaseDAO_1.default })
                .populate({ path: "ingredients.ingredient", model: IngredientDAO_1.default });
            const recipesData = foundRecipes.map((foundRecipe) => {
                const recipeData = RecipeMapper_1.RecipeMapper.toRecipeDTO(foundRecipe, foundRecipe.base, foundRecipe.ingredients);
                return recipeData;
            });
            return {
                recipes: recipesData
            };
        });
    }
}
exports.SearchRecipesByBaseService = SearchRecipesByBaseService;
//# sourceMappingURL=SearchRecipesByBaseService.js.map