"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TastingNoteTag_1 = require("../TastingNoteTag");
const TastingTagMapper_1 = __importDefault(require("./TastingTagMapper"));
class TastingNoteMapper {
    static toNoteDTO(note, recipeDTO) {
        return {
            id: note._id.valueOf().toString(),
            rate: note.rate,
            title: recipeDTO.name,
            recipe: recipeDTO,
            tag: this.mappingTastingTag(note.tastingTag),
            tasteContent: note.tasteContent,
            experienceContent: note.experienceContent,
            createdAt: note.createdAt
        };
    }
    static mappingTastingTag(tags) {
        return TastingNoteTag_1.TastingNoteTag.getAllTags()
            .map((value) => TastingTagMapper_1.default.toTagDTO(value, tags.includes(value.id)));
    }
}
exports.default = TastingNoteMapper;
;
//# sourceMappingURL=TastingNoteMapper.js.map