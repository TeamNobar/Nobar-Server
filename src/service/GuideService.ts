import GuideDAO from "../model/guide/GuideDAO";
import { GuideDTO } from "../dto/guide/GuideDTO";
import { GuideMapper } from "../mapper/GuideMapper";
import NobarError            from "../error/NobarError";
import { NobarErrorCode }    from "../error/NobarErrorCode";
import NobarErrorMessage     from "../error/NobarErrorMessage";

export class GuideService {
  public async findGuide( guideId: string ): Promise< GuideDTO | null> {

    const foundGuide = await GuideDAO.findById(guideId);
    
    if (!foundGuide) {
      throw new NobarError(NobarErrorCode.BAD_REQUEST, NobarErrorMessage.NOT_FOUND_GUIDE);
    }

    const data = GuideMapper.toGuideDTO(foundGuide);
    
    return data;
  }

  public async findAllGuide(): Promise<GuideDTO[]> {
    const guideList = await GuideDAO.find({}).exec();
    if (!guideList) {
      return []
    }
    return guideList.map(value => GuideMapper.toGuideDTO(value));
  }
}
    
