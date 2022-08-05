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
exports.SearchService = void 0;
const BaseMapper_1 = require("../mapper/BaseMapper");
const RecipeMapper_1 = require("../mapper/RecipeMapper");
const NobarError_1 = __importDefault(require("../error/NobarError"));
const NobarErrorCode_1 = require("../error/NobarErrorCode");
const NobarErrorMessage_1 = __importDefault(require("../error/NobarErrorMessage"));
const IngredientsMapper_1 = require("../mapper/IngredientsMapper");
class SearchService {
    constructor(baseDAO, recipeDAO, recommendDAO, ingredientDAO) {
        this.baseDAO = baseDAO;
        this.recipeDAO = recipeDAO;
        this.recommendDAO = recommendDAO;
        this.ingredientDAO = ingredientDAO;
    }
    /**
     *  @route GET /search/tag
     *  @desc 검색 태그(베이스 술 종류) 전부 조회
     *  @access public
     */
    getSearchTags() {
        return __awaiter(this, void 0, void 0, function* () {
            const foundTags = yield this.baseDAO.find({});
            const base = BaseMapper_1.BaseMapper.toBaseDTO(foundTags);
            return {
                base: base
            };
        });
    }
    /**
     *  @route GET /search/keyword?keyword=
     *  @desc 검색어로 레시피 조회
     *  @access public
     */
    searchRecipesByKeyword(keyword) {
        return __awaiter(this, void 0, void 0, function* () {
            const regex = (pattern) => new RegExp(`.*${pattern}.*`);
            const keywordRegex = regex(keyword);
            const foundRecipes = yield this.recipeDAO.find({ name: { $regex: keywordRegex } })
                .populate({ path: "base", model: this.baseDAO })
                .populate({ path: "ingredients.ingredient", model: this.ingredientDAO });
            const recipesData = foundRecipes.map((foundRecipe) => {
                const recipeData = RecipeMapper_1.RecipeMapper.toRecipeDTO(foundRecipe, foundRecipe.base, foundRecipe.ingredients);
                return recipeData;
            });
            return {
                recipes: recipesData
            };
        });
    }
    /**
     *  @route GET /search/base?base=
     *  @desc 베이스 술로 레시피 조회
     *  @access public
     */
    findRecipesByBase(base) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundBase = yield this.baseDAO.findOne({ name: base });
            if (!foundBase) {
                throw new NobarError_1.default(NobarErrorCode_1.NobarErrorCode.BAD_REQUEST, NobarErrorMessage_1.default.NOT_FOUND_BASE);
            }
            const foundRecipes = yield this.recipeDAO.find({ base: foundBase._id })
                .populate({ path: "base", model: this.baseDAO })
                .populate({ path: "ingredients.ingredient", model: this.ingredientDAO });
            const recipesData = foundRecipes.map((foundRecipe) => {
                const recipeData = RecipeMapper_1.RecipeMapper.toRecipeDTO(foundRecipe, foundRecipe.base, foundRecipe.ingredients);
                return recipeData;
            });
            return {
                recipes: recipesData
            };
        });
    }
    /**
     *  @route GET /search
     *  @desc 기본 검색뷰에 필요한 데이터(추천레시피, 자동완성레시피, 자동완성재료) 조회
     *  @access public
     */
    getSearchKeywords() {
        return __awaiter(this, void 0, void 0, function* () {
            // 추천 검색어로 뜬 레시피 가져오기 - 일단 기본 레시피만 뜨도록
            const recommendRecipes = yield this.recommendDAO.find({})
                .populate("recipeId", "_id name", this.recipeDAO);
            const recommendsData = yield Promise.all(recommendRecipes.map((recommendRecipe) => {
                const recommendData = {
                    recipeId: recommendRecipe.recipeId._id,
                    name: recommendRecipe.recipeId.name
                };
                return recommendData;
            }));
            // 자동완성으로 쓸 레시피 이름 전부 가져오기
            const recipes = yield this.recipeDAO.find({})
                .populate({ path: "base", model: this.baseDAO })
                .populate({ path: "ingredients.ingredient", model: this.ingredientDAO });
            const recipesData = recipes.map((recipe) => {
                const recipeData = RecipeMapper_1.RecipeMapper.toRecipeDTO(recipe, recipe.base, recipe.ingredients);
                return recipeData;
            });
            // 자동완성으로 쓸 재료 이름 전부 가져오기
            const ingredients = yield this.ingredientDAO.find({});
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
exports.SearchService = SearchService;
//# sourceMappingURL=SearchService.js.map