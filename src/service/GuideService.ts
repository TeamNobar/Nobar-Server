import GuideDAO from "../model/guide/GuideDAO";
import { GuideDTO } from "../dto/guide/GuideDTO";
import { GuideMapper } from "../mapper/GuideMapper";

export class GuideService {
  public async findGuide( guideId: string ): Promise< GuideDTO | null> {

    const foundGuide = await GuideDAO.findById(guideId);
    
    if  (foundGuide === null) {
      return null
    }

    const data = GuideMapper.toGuideDTO(foundGuide);
    
    return data;
  }
}
    
