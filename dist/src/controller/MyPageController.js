"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.MyPageController = void 0;
const tsoa_1 = require("tsoa");
const debugLogger_1 = require("../loaders/debugLogger");
const ServiceInjector_1 = __importDefault(require("../service/ServiceInjector"));
const StatusCode_1 = __importDefault(require("../utils/StatusCode"));
let MyPageController = class MyPageController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.authService = ServiceInjector_1.default.auth;
        this.recipeService = ServiceInjector_1.default.recipe;
        this.tastingNoteService = ServiceInjector_1.default.tastingNote;
    }
    getMypage(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield Promise.resolve(request.user);
            const userId = token.user.id;
            (0, debugLogger_1.debugLogger)(userId);
            const user = yield this.authService.findUser(userId);
            const laterRecipes = yield this.recipeService.getRecipes(user.laterRecipes);
            const tastingNotes = yield this.tastingNoteService.getTastingNotes(user.tastingNotes);
            this.setStatus(StatusCode_1.default.OK);
            return {
                nickname: user.nickname,
                laterRecipes: laterRecipes,
                tastingNotes: tastingNotes
            };
        });
    }
};
__decorate([
    (0, tsoa_1.Get)(""),
    (0, tsoa_1.Security)("jwt", ["admin"]),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "getMypage", null);
MyPageController = __decorate([
    (0, tsoa_1.Route)("mypage")
], MyPageController);
exports.MyPageController = MyPageController;
//# sourceMappingURL=MyPageController.js.map