"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMapper = void 0;
class BaseMapper {
    static toBaseDTO(bases) {
        const BaseData = bases.map((base) => {
            const data = {
                id: base._id,
                name: base.name,
                url: base.url
            };
            return data;
        });
        return BaseData;
    }
}
exports.BaseMapper = BaseMapper;
//# sourceMappingURL=BaseMapper.js.map