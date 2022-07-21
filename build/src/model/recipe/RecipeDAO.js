"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const RecipeSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    enName: {
        type: String,
        required: true,
    },
    defaultRecipe: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        default: null,
        ref: "Recipe"
    },
    version: {
        type: String,
    },
    base: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "Base"
    },
    proof: {
        type: Number,
        required: true,
    },
    proofIcon: {
        type: String,
        required: true
    },
    skill: {
        type: Number,
        required: true
    },
    glass: {
        type: Number,
        required: true
    },
    ingredients: [
        {
            ingredient: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                requried: true,
                ref: "Ingredient"
            },
            quantity: {
                type: Number,
                requried: true
            },
            unit: {
                type: String,
                requred: true
            }
        }
    ],
    steps: {
        type: [String],
        required: true
    }
});
exports.default = mongoose_1.default.model("Recipe", RecipeSchema);
//# sourceMappingURL=RecipeDAO.js.map