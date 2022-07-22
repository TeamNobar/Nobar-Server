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
exports.SearchRecipesByKeywordController = void 0;
const tsoa_1 = require("tsoa");
const SearchRecipesByKeywordService_1 = require("../service/SearchRecipesByKeywordService");
const StatusCode_1 = __importDefault(require("../utils/StatusCode"));
let SearchRecipesByKeywordController = class SearchRecipesByKeywordController extends tsoa_1.Controller {
    searchRecipesByKeyword(keyword) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!keyword) {
                this.setStatus(StatusCode_1.default.OK);
                return {
                    recipes: []
                };
            }
            const foundRecipes = yield new SearchRecipesByKeywordService_1.SearchRecipesByKeywordService().searchRecipesByKeyword(keyword);
            this.setStatus(StatusCode_1.default.OK);
            return foundRecipes;
        });
    }
};
__decorate([
    (0, tsoa_1.Get)("keyword"),
    (0, tsoa_1.Security)("jwt", ["admin"]),
    __param(0, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SearchRecipesByKeywordController.prototype, "searchRecipesByKeyword", null);
SearchRecipesByKeywordController = __decorate([
    (0, tsoa_1.Route)("search")
], SearchRecipesByKeywordController);
exports.SearchRecipesByKeywordController = SearchRecipesByKeywordController;
//# sourceMappingURL=SearchRecipesByKeywordController.js.map