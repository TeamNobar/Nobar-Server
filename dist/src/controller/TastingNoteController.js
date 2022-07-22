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
exports.TastingNoteController = void 0;
const tsoa_1 = require("tsoa");
const ServiceInjector_1 = __importDefault(require("../service/ServiceInjector"));
const StatusCode_1 = __importDefault(require("../utils/StatusCode"));
let TastingNoteController = class TastingNoteController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.tastingNoteService = ServiceInjector_1.default.tastingNote;
    }
    getAllTags() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setStatus(StatusCode_1.default.OK);
            return this.tastingNoteService.getAllTag();
        });
    }
    getTastingNote(tastingNoteId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.setStatus(StatusCode_1.default.OK);
            return this.tastingNoteService.getTastingNote(tastingNoteId);
        });
    }
    postTastingNote(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield Promise.resolve(request.user);
            const userId = token.user.id;
            const tastingNoteParam = request.body;
            this.setStatus(StatusCode_1.default.CREATED);
            return this.tastingNoteService.postTastingNote(userId, tastingNoteParam);
        });
    }
};
__decorate([
    (0, tsoa_1.Get)("tag"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TastingNoteController.prototype, "getAllTags", null);
__decorate([
    (0, tsoa_1.Get)("{tastingNoteId}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TastingNoteController.prototype, "getTastingNote", null);
__decorate([
    (0, tsoa_1.Post)(""),
    (0, tsoa_1.Security)("jwt", ["admin"]),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TastingNoteController.prototype, "postTastingNote", null);
TastingNoteController = __decorate([
    (0, tsoa_1.Route)("note")
], TastingNoteController);
exports.TastingNoteController = TastingNoteController;
//# sourceMappingURL=TastingNoteController.js.map