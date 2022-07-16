import Guide from "../model/guide/GuideDAO";
import { GuideDTO } from "../dto/guide/GuideDTO";
import { GuideMapper } from "../mapper/GuideMapper";

export class GuideService {
  public async findGuide( guideId: string ): Promise< GuideDTO | null> {

    const foundGuide = await Guide.findById(guideId);
    
    if  (foundGuide === null) {
      return null
    }

    const data = GuideMapper.toGuideDTO(foundGuide._id, foundGuide);
    
    return data;
  }
}
    
