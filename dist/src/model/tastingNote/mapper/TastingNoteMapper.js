"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debugLogger_1 = require("../../../loaders/debugLogger");
const TastingNoteTag_1 = require("../TastingNoteTag");
const TastingTagMapper_1 = __importDefault(require("./TastingTagMapper"));
class TastingNoteMapper {
    static mappingTastingTags(tags) {
        return TastingNoteTag_1.TastingNoteTag.getAllTags()
            .map((value) => {
            const isSelected = tags.includes(value.id);
            return TastingTagMapper_1.default.toTagDTO(value, isSelected);
        });
    }
    static toNoteDTO(note, recipeDTO) {
        (0, debugLogger_1.debugLogger)(note);
        return {
            id: note._id.valueOf().toString(),
            rate: note.rate,
            title: recipeDTO.name,
            recipe: recipeDTO,
            tag: this.mappingTastingTags(note.tastingTags),
            tasteContent: note.tasteContent,
            experienceContent: note.experienceContent,
            createdAt: note.createdAt
        };
    }
}
exports.default = TastingNoteMapper;
;
//# sourceMappingURL=TastingNoteMapper.js.map