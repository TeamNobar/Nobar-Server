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
exports.SearchRecipesService = void 0;
const RecipeDAO_1 = __importDefault(require("../model/recipe/RecipeDAO"));
const BaseDAO_1 = __importDefault(require("../model/base/BaseDAO"));
class SearchRecipesService {
    findRecipesByBase(base) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundBase = yield BaseDAO_1.default.findOne({ name: base });
            if (foundBase === null) {
                return null;
            }
            // default === null 인 친구들을 조건으로
            const foundRecipes = yield RecipeDAO_1.default.find({ base: foundBase._id });
            if (foundRecipes === null) {
                return null;
            }
            // 이후에 mapper 추가해서 api 명세 규격대로 반환
            console.log("foundRecipes ", foundRecipes);
            return foundRecipes.map(foundRecipe => {
                return foundRecipe.name;
            });
        });
    }
}
exports.SearchRecipesService = SearchRecipesService;
//# sourceMappingURL=SearchRecipesService.js.map