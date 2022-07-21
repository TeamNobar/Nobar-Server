"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const getToken = (userId) => {
    const payload = {
        user: {
            id: userId
        },
    };
    return jsonwebtoken_1.default.sign(payload, config_1.default.jwtSecret, { expiresIn: "99y" });
};
exports.default = getToken;
//# sourceMappingURL=jwtHandler.js.map