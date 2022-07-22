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
    constructor(id, content, activeIcon, inActiveIcon) {
        super();
        this.id = id;
        this.content = content;
        this.activeIcon = activeIcon;
        this.inActiveIcon = inActiveIcon;
    }
    static getAllTags() {
        return this.values();
    }
};
TastingNoteTag.Tag1 = new TastingNoteTag_1(0, "식도가활활", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_burn.png", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_burn_inactive.png");
TastingNoteTag.Tag2 = new TastingNoteTag_1(1, "술맛이응애", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_baby.png", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_baby_inactive.png");
TastingNoteTag.Tag3 = new TastingNoteTag_1(2, "향기가향긋", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_scent.png", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_scent_inactive.png");
TastingNoteTag.Tag4 = new TastingNoteTag_1(3, "과일의상큼", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_fruit.png", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_fruit_inactive.png");
TastingNoteTag.Tag5 = new TastingNoteTag_1(4, "혀끝이달달", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_sweet.png", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_sweet_inactive.png");
TastingNoteTag.Tag6 = new TastingNoteTag_1(5, "탄산이톡톡", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_fizz.png", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_fizz_inactive.png");
TastingNoteTag.Tag7 = new TastingNoteTag_1(6, "크림의질감", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_cream.png", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_cream_inactive.png");
TastingNoteTag.Tag8 = new TastingNoteTag_1(7, "뒷맛이깔끔", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_lastone.png", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_lastone_inactive.png");
TastingNoteTag.Tag9 = new TastingNoteTag_1(8, "허브의쌉쌀", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_herb.png", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_herb_inactive.png");
TastingNoteTag = TastingNoteTag_1 = __decorate([
    (0, ts_jenum_1.Enum)("id"),
    __metadata("design:paramtypes", [Number, String, String, String])
], TastingNoteTag);
exports.TastingNoteTag = TastingNoteTag;
//# sourceMappingURL=TastingNoteTag.js.map