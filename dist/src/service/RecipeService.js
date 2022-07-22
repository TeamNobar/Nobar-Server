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
const NobarError_1 = __importDefault(require("../error/NobarError"));
const NobarErrorCode_1 = require("../error/NobarErrorCode");
const NobarErrorMessage_1 = __importDefault(require("../error/NobarErrorMessage"));
const Logger_1 = __importDefault(require("../loaders/Logger"));
const RecipeMapper_1 = __importDefault(require("../model/recipe/mapper/RecipeMapper"));
class RecipeService {
    constructor(recipeDAO, baseDAO, ingredientDAO) {
        this.recipeDAO = recipeDAO;
        this.baseDAO = baseDAO;
        this.ingredientDAO = ingredientDAO;
    }
    getRecipes(recipeIds) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(recipeIds.map((value) => __awaiter(this, void 0, void 0, function* () { return yield this.getOneRecipe(value); })));
        });
    }
    getAllRecipes() {
        return __awaiter(this, void 0, void 0, function* () {
            const recipes = yield this.findAllRecipe();
            const recipeIds = recipes.map(value => value._id.valueOf().toString());
            return yield this.getRecipes(recipeIds);
        });
    }
    getOneRecipe(recipeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipe = yield this.findRecipeById(recipeId);
            const base = yield this.findBaseById(recipe.base.valueOf().toString());
            const embededIngredient = yield this.embedAllIngredient(recipe.ingredients);
            return RecipeMapper_1.default.toRecipeDTO(recipe, base, embededIngredient);
        });
    }
    getRecipeDetail(recipeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // DI 하고 싶어서 분리하고 싶은데 내부에서 DAO 그대로 하면 무슨 소용
                /*const recipe: RecipeEntity | null = await this.recipeDAO.findById(recipeId)
                  .populate({path: "base", model: BaseDAO})
                  .populate({path: "ingredients.ingredient", model: IngredientDAO});*/
                const recipe = yield this.findRecipeById(recipeId);
                const base = yield this.findBaseById(recipe.base.valueOf().toString());
                const recipeVersions = yield this.findRecipeVersionNames(recipeId);
                const embededIngredient = yield this.embedAllIngredient(recipe.ingredients);
                const recipeDetailDTO = RecipeMapper_1.default.toRecipeDetailDTO(recipe, base, recipeVersions, embededIngredient);
                return recipeDetailDTO;
            }
            catch (error) {
                Logger_1.default.error(error);
                throw error;
            }
        });
    }
    findAllRecipe() {
        return __awaiter(this, void 0, void 0, function* () {
            const recipes = yield this.recipeDAO.find({ defaultRecipe: null });
            if (!recipes) {
                return [];
            }
            return recipes;
        });
    }
    findRecipeById(recipeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipe = yield this.recipeDAO.findById(recipeId);
            if (!recipe) {
                throw new NobarError_1.default(NobarErrorCode_1.NobarErrorCode.BAD_REQUEST, NobarErrorMessage_1.default.NOT_FOUND_RECIPE);
            }
            return recipe;
        });
    }
    findBaseById(baseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield this.baseDAO.findById(baseId);
            if (!base) {
                throw new NobarError_1.default(NobarErrorCode_1.NobarErrorCode.BAD_REQUEST, NobarErrorMessage_1.default.NOT_FOUND_BASE);
            }
            return base;
        });
    }
    findRecipeVersionNames(defaultRecipeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.recipeDAO.find({ defaultRecipe: defaultRecipeId });
        });
    }
    embedAllIngredient(ingredients) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(ingredients.map((value) => __awaiter(this, void 0, void 0, function* () { return yield this.embedIngredient(value); })));
        });
    }
    embedIngredient(recipeIngredient) {
        return __awaiter(this, void 0, void 0, function* () {
            const ingredient = yield this.findIngredientById(recipeIngredient.ingredient.valueOf().toString());
            return {
                ingredient: ingredient,
                quantity: recipeIngredient.quantity,
                unit: recipeIngredient.unit
            };
        });
    }
    findIngredientById(ingredientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const ingredient = yield this.ingredientDAO.findById(ingredientId);
            if (!ingredient) {
                throw new NobarError_1.default(NobarErrorCode_1.NobarErrorCode.BAD_REQUEST, NobarErrorMessage_1.default.NOT_FOUND_BASE);
            }
            return ingredient;
        });
    }
}
exports.default = RecipeService;
//# sourceMappingURL=RecipeService.js.map