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
exports.GuideController = void 0;
const tsoa_1 = require("tsoa");
const GuideService_1 = require("../service/GuideService");
const StatusCode_1 = __importDefault(require("../utils/StatusCode"));
const errorMessage_1 = require("../utils/errorMessage");
let GuideController = class GuideController extends tsoa_1.Controller {
    findGuide(guideId) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield new GuideService_1.GuideService().findGuide(guideId);
            if (data === null) {
                this.setStatus(StatusCode_1.default.BAD_REQUEST);
                const notFoundGuide = {
                    status: StatusCode_1.default.BAD_REQUEST,
                    message: errorMessage_1.errorMessage.BAD_REQUEST
                };
                return notFoundGuide;
            }
            this.setStatus(StatusCode_1.default.OK);
            return data;
        });
    }
};
__decorate([
    (0, tsoa_1.Get)("{guideId}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GuideController.prototype, "findGuide", null);
GuideController = __decorate([
    (0, tsoa_1.Route)("guide")
], GuideController);
exports.GuideController = GuideController;
//# sourceMappingURL=GuideController.js.map