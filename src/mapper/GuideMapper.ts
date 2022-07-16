import { Guide } from "../model/guide/Guide";
import { GuideDTO } from "../dto/guide/GuideDTO"

export class GuideMapper {
  public static toGuideDTO (guideId: string, guide: Guide): GuideDTO {
    return {
      id: guideId,
      title: guide.title,
      subtitle: guide.subtitle,
      content: guide.content,
      images: guide.images,
      thumbnail: guide.thumbnail,
    }
  }
}