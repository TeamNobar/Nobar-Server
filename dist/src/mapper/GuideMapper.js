"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuideMapper = void 0;
class GuideMapper {
    static toGuideDTO(guide) {
        return {
            id: guide._id,
            title: guide.title,
            subtitle: guide.subtitle,
            content: guide.content,
            images: guide.images,
            thumbnail: guide.thumbnail,
        };
    }
}
exports.GuideMapper = GuideMapper;
//# sourceMappingURL=GuideMapper.js.map