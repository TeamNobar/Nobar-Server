"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RecipeDAO_1 = __importDefault(require("./model/recipe/RecipeDAO"));
const RecipeService_1 = __importDefault(require("./service/RecipeService"));
const service = new RecipeService_1.default(RecipeDAO_1.default);
service.findRecipeById("62ce8e9b21fb9a9a2c3a6ba6");
//# sourceMappingURL=test.js.map