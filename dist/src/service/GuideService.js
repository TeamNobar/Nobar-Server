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
exports.GuideService = void 0;
const GuideDAO_1 = __importDefault(require("../model/guide/GuideDAO"));
const GuideMapper_1 = require("../mapper/GuideMapper");
const NobarError_1 = __importDefault(require("../error/NobarError"));
const NobarErrorCode_1 = require("../error/NobarErrorCode");
const NobarErrorMessage_1 = __importDefault(require("../error/NobarErrorMessage"));
class GuideService {
    findGuide(guideId) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundGuide = yield GuideDAO_1.default.findById(guideId);
            if (!foundGuide) {
                throw new NobarError_1.default(NobarErrorCode_1.NobarErrorCode.BAD_REQUEST, NobarErrorMessage_1.default.NOT_FOUND_GUIDE);
            }
            const data = GuideMapper_1.GuideMapper.toGuideDTO(foundGuide);
            return data;
        });
    }
    findAllGuide() {
        return __awaiter(this, void 0, void 0, function* () {
            const guideList = yield GuideDAO_1.default.find({}).exec();
            if (!guideList) {
                return [];
            }
            return guideList.map(value => GuideMapper_1.GuideMapper.toGuideDTO(value));
        });
    }
}
exports.GuideService = GuideService;
//# sourceMappingURL=GuideService.js.map