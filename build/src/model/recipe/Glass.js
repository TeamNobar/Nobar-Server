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
var Glass_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Glass = void 0;
const ts_jenum_1 = require("ts-jenum");
let Glass = Glass_1 = class Glass extends (0, ts_jenum_1.EnumType)() {
    constructor(id, name, url) {
        super();
        this.id = id;
        this.name = name;
        this.url = url;
    }
    hasGlassName(name) {
        return this.name === name;
    }
    static findGlassById(id) {
        const glass = this.find(id);
        if (!glass) {
            return Glass_1.NotFound;
        }
        return glass;
    }
    static findGlassByName(name) {
        const glass = this.values().find((glass) => glass.hasGlassName(name));
        if (!glass) {
            return Glass_1.NotFound;
        }
        return glass;
    }
};
Glass.NotFound = new Glass_1(0, "", "");
Glass.Cocktail = new Glass_1(1, "칵테일", "");
Glass.Highball = new Glass_1(2, "하이볼", "");
Glass.OnTheRock = new Glass_1(3, "온더락", "");
Glass.Champagne = new Glass_1(4, "샴페인", "");
Glass.Liqueur = new Glass_1(5, "리큐어", "");
Glass.Margarita = new Glass_1(6, "마가리따", "");
Glass.Pilsner = new Glass_1(7, "필스너", "");
Glass.SaucerChampagne = new Glass_1(8, "소서샴페인", "");
Glass = Glass_1 = __decorate([
    (0, ts_jenum_1.Enum)("id"),
    __metadata("design:paramtypes", [Number, String, String])
], Glass);
exports.Glass = Glass;
//# sourceMappingURL=Glass.js.map