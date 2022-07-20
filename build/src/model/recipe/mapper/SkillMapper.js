"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SkillMapper {
    static toSkillDTO(skill) {
        return {
            name: skill.name,
            url: skill.url
        };
    }
}
exports.default = SkillMapper;
;
//# sourceMappingURL=SkillMapper.js.map