import { Guide } from "../model/guide/Guide";
import { GuideDTO } from "../dto/guide/GuideDTO";
import { GuideMapper } from "../mapper/GuideMapper";
import NobarError from "../error/NobarError";
import NobarErrorMessage from "../error/NobarErrorMessage";
import { NobarErrorCode } from "../error/NobarErrorCode";
import mongoose, { Model } from "mongoose";

export class GuideService { 
  constructor (
    private readonly guideDAO: Model<Guide & mongoose.Document>
  ) { 
  }
  public async findGuide( guideId: string ): Promise<GuideDTO> {

    const foundGuide = await this.guideDAO.findById(guideId);
    
    if (!foundGuide) {
      throw new NobarError(NobarErrorCode.BAD_REQUEST, NobarErrorMessage.NOT_FOUND_GUIDE);
    }

    const data = GuideMapper.toGuideDTO(foundGuide);
    
    return data;
  }

  public async findAllGuide(): Promise<GuideDTO[]> {
    const guideList = await this.guideDAO.find({}).exec();
    if (!guideList) {
      return []
    }
    return guideList.map(value => GuideMapper.toGuideDTO(value));
  }
}
    
