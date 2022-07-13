import Guide from "../model/guide/GuideDAO";
import { GuideDTO } from "../dto/guide/GuideDTO";

export class GuideService {
  public async findGuide( guideId: string ): Promise< GuideDTO | null> {

    const foundGuide = await Guide.findById(guideId);
    
    if  (foundGuide === null) {
      return null
    }
    
    return {
      id: foundGuide._id as unknown as string,
      title: foundGuide.title,
      subtitle: foundGuide.subtitle,
      content: foundGuide.content,
      images: foundGuide.images,
      thumbnail: foundGuide.thumbnail,
    }

  }
}
    
