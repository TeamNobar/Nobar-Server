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
exports.SearchTagsService = void 0;
const BaseDAO_1 = __importDefault(require("../model/base/BaseDAO"));
const BaseMapper_1 = require("../mapper/BaseMapper");
const NobarError_1 = __importDefault(require("../error/NobarError"));
const NobarErrorCode_1 = require("../error/NobarErrorCode");
const NobarErrorMessage_1 = __importDefault(require("../error/NobarErrorMessage"));
class SearchTagsService {
    getSearchTags() {
        return __awaiter(this, void 0, void 0, function* () {
            const foundTags = yield BaseDAO_1.default.find({});
            if (!foundTags) {
                throw new NobarError_1.default(NobarErrorCode_1.NobarErrorCode.BAD_REQUEST, NobarErrorMessage_1.default.NOT_FOUND_SEARCH_TAGS);
            }
            const base = BaseMapper_1.BaseMapper.toBaseDTO(foundTags);
            return {
                base: base
            };
        });
    }
}
exports.SearchTagsService = SearchTagsService;
//# sourceMappingURL=SearchTagsService.js.map