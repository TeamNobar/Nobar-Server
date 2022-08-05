"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = __importDefault(require("../model/base/BaseDAO"));
const IngredientDAO_1 = __importDefault(require("../model/ingredient/IngredientDAO"));
const RecipeDAO_1 = __importDefault(require("../model/recipe/RecipeDAO"));
const RecipeDAO_2 = __importDefault(require("../model/recipe/RecipeDAO"));
const TastingNoteDAO_1 = __importDefault(require("../model/tastingNote/TastingNoteDAO"));
const UserDAO_1 = __importDefault(require("../model/user/UserDAO"));
const UserDAO_2 = __importDefault(require("../model/user/UserDAO"));
const GuideDAO_1 = __importDefault(require("../model/guide/GuideDAO"));
const RecommendDAO_1 = __importDefault(require("../model/recommend/RecommendDAO"));
const AuthService_1 = __importDefault(require("./AuthService"));
const GuideService_1 = require("./GuideService");
const SearchService_1 = require("./SearchService");
const RecipeService_1 = __importDefault(require("./RecipeService"));
const TastingNoteService_1 = __importDefault(require("./TastingNoteService"));
class ServiceInjector {
    static get recipe() {
        return new RecipeService_1.default(RecipeDAO_2.default, BaseDAO_1.default, IngredientDAO_1.default);
    }
    static get auth() {
        return new AuthService_1.default(UserDAO_2.default);
    }
    static get tastingNote() {
        return new TastingNoteService_1.default(UserDAO_1.default, TastingNoteDAO_1.default, RecipeDAO_1.default, BaseDAO_1.default, IngredientDAO_1.default);
    }
    static get guide() {
        return new GuideService_1.GuideService(GuideDAO_1.default);
    }
    static get search() {
        return new SearchService_1.SearchService(BaseDAO_1.default, RecipeDAO_2.default, RecommendDAO_1.default, IngredientDAO_1.default);
    }
}
exports.default = ServiceInjector;
//# sourceMappingURL=ServiceInjector.js.map