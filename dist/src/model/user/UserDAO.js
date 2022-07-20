"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    nickname: {
        type: String,
        required: true
    },
    tastingNotes: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId
        }
    ],
    laterRecipe: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId
        }
    ],
    snsAuthToken: {
        type: String
    },
    deviceToken: {
        type: String
    }
});
exports.default = mongoose_1.default.model("User", userSchema);
//# sourceMappingURL=UserDAO.js.map