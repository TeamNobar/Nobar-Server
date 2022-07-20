"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const GuideSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.default.model("Guide", GuideSchema);
//# sourceMappingURL=GuideDAO.js.map