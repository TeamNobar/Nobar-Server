"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const tastingNoteSchema = new mongoose_1.default.Schema({
    rate: {
        type: Number,
        required: true
    },
    recipe: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "Recipe"
    },
    tastingTags: {
        type: [Number]
    },
    tasteContent: {
        type: String,
        defualt: ""
    },
    experienceContent: {
        type: String,
        default: ""
    },
    createdAt: {
        type: String,
        require: true
    }
});
exports.default = mongoose_1.default.model("TastingNote", tastingNoteSchema);
//# sourceMappingURL=TastingNoteDAO.js.map