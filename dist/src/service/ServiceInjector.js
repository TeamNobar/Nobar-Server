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
const AuthService_1 = __importDefault(require("./AuthService"));
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
}
exports.default = ServiceInjector;
//# sourceMappingURL=ServiceInjector.js.map