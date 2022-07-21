"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const nobarRecipeDAO = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    recipe: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true
    }
});
exports.default = mongoose_1.default.model("NoBarRecipe", nobarRecipeDAO);
//# sourceMappingURL=NobarRecipeDAO.js.map