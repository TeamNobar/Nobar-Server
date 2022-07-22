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
const jwtHandler_1 = __importDefault(require("../auth/jwtHandler"));
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
                return createdUser.token;
            }
            else {
                return user.token;
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
    findUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userDAO.findById(userId);
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
                deviceToken: "",
                token: ""
            };
            const createdUser = yield this.userDAO.create(user);
            const token = (0, jwtHandler_1.default)(createdUser._id.valueOf().toString());
            const hasTokenUser = yield this.userDAO.findByIdAndUpdate(createdUser._id, { token: token });
            if (!hasTokenUser) {
                throw Error("방금 만든 유저가 사라진 이슈;;");
            }
            return hasTokenUser;
        });
    }
}
exports.default = AuthService;
;
//# sourceMappingURL=AuthService.js.map