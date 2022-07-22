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
var TastingNoteTag_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TastingNoteTag = void 0;
const ts_jenum_1 = require("ts-jenum");
let TastingNoteTag = TastingNoteTag_1 = class TastingNoteTag extends (0, ts_jenum_1.EnumType)() {
    constructor(id, content, icon) {
        super();
        this.id = id;
        this.content = content;
        this.icon = icon;
    }
    static getAllTags() {
        return this.values();
    }
};
TastingNoteTag.Tag1 = new TastingNoteTag_1(0, "식도가활활", "");
TastingNoteTag.Tag2 = new TastingNoteTag_1(1, "술맛이응애", "");
TastingNoteTag.Tag3 = new TastingNoteTag_1(2, "향기가향긋", "");
TastingNoteTag.Tag4 = new TastingNoteTag_1(3, "과일의상큼", "");
TastingNoteTag.Tag5 = new TastingNoteTag_1(4, "혀끝이달달", "");
TastingNoteTag.Tag6 = new TastingNoteTag_1(5, "탄산이톡톡", "");
TastingNoteTag.Tag7 = new TastingNoteTag_1(6, "크림의질감", "");
TastingNoteTag.Tag8 = new TastingNoteTag_1(7, "뒷맛이깔끔", "");
TastingNoteTag.Tag9 = new TastingNoteTag_1(8, "허브의쌉쌀", "");
TastingNoteTag = TastingNoteTag_1 = __decorate([
    (0, ts_jenum_1.Enum)("id"),
    __metadata("design:paramtypes", [Number, String, String])
], TastingNoteTag);
exports.TastingNoteTag = TastingNoteTag;
//# sourceMappingURL=TastingNoteTag.js.map