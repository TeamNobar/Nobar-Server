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
var Skill_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skill = void 0;
const ts_jenum_1 = require("ts-jenum");
let Skill = Skill_1 = class Skill extends (0, ts_jenum_1.EnumType)() {
    constructor(id, name, url) {
        super();
        this.id = id;
        this.name = name;
        this.url = url;
    }
    hasSkillName(name) {
        return this.name === name;
    }
    static findSkillById(id) {
        const skill = this.find(id);
        if (!skill) {
            return Skill_1.NotFound;
        }
        return skill;
    }
    static findSkillByName(name) {
        const skill = this.values().find((skill) => skill.hasSkillName(name));
        if (!skill) {
            return Skill_1.NotFound;
        }
        return skill;
    }
};
Skill.NotFound = new Skill_1(0, "", "");
Skill.Shake = new Skill_1(1, "쉐이크", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/_icn_skill_shake.png");
Skill.Blend = new Skill_1(2, "블렌드", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/_icn_skill_blending.png");
Skill.Build = new Skill_1(3, "빌드", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/_icn_skill_build.png");
Skill.Stir = new Skill_1(4, "스터", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/_icn_skill_stir.png");
Skill.Fload = new Skill_1(5, "플로트", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/_icn_skill_float.png");
Skill = Skill_1 = __decorate([
    (0, ts_jenum_1.Enum)("id"),
    __metadata("design:paramtypes", [Number, String, String])
], Skill);
exports.Skill = Skill;
//# sourceMappingURL=Skill.js.map