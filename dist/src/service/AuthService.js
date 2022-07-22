"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NobarError_1 = __importDefault(require("../error/NobarError"));
const NobarErrorCode_1 = require("../error/NobarErrorCode");
const NobarErrorMessage_1 = __importDefault(require("../error/NobarErrorMessage"));
const UserMapper_1 = __importDefault(require("../model/user/mapper/UserMapper"));
class AuthService {
    constructor(userDAO) {
        this.userDAO = userDAO;
    }
    authUser(userParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findOneUser(userParam.nickname);
            if (!user) {
                const createdUser = yield this.addUser(userParam);
                return createdUser._id.valueOf().toString();
            }
            else {
                return user._id.valueOf().toString();
            }
        });
    }
    getUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findOneUser(userId);
            if (!user) {
                throw new NobarError_1.default(NobarErrorCode_1.NobarErrorCode.BAD_REQUEST, NobarErrorMessage_1.default.NOT_FOUND_USER);
            }
            return UserMapper_1.default.toUserDTO(user);
        });
    }
    findOneUser(nickname) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userDAO.findOne({ nickname: nickname });
        });
    }
    addUser(userParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = {
                nickname: userParam.nickname,
                tastingNotes: [],
                laterRecipe: [],
                snsAuthToken: "",
                deviceToken: ""
            };
            return yield this.userDAO.create(user);
        });
    }
}
exports.default = AuthService;
;
//# sourceMappingURL=AuthService.js.map