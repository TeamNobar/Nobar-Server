"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const recommendSchema = new mongoose_1.default.Schema({
    recipeId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true
    }
});
exports.default = mongoose_1.default.model("Recommend", recommendSchema);
//# sourceMappingURL=RecommendDAO.js.map