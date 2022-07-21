"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseMapper {
    static toBaseDTO(baseEntity) {
        return {
            id: baseEntity._id.valueOf().toString(),
            name: baseEntity.name,
            url: baseEntity.url
        };
    }
}
exports.default = BaseMapper;
//# sourceMappingURL=BaseMapper.js.map