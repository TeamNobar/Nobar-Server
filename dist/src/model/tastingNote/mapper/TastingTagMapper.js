"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TastingTagMapper {
    static toTagDTO(tag, isSelected) {
        return {
            id: tag.id,
            content: tag.content,
            isSelected: isSelected
        };
    }
}
exports.default = TastingTagMapper;
;
//# sourceMappingURL=TastingTagMapper.js.map