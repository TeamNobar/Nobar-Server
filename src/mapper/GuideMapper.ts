import { Guide } from "../model/guide/Guide";
import { GuideDTO } from "../dto/guide/GuideDTO"
import mongoose from "mongoose";

interface GuideForMapper extends Guide {
  _id: mongoose.Schema.Types.ObjectId,
  title: string,
  subtitle: string,
  content: string,
  images: string[],
  thumbnail: string,
}

export class GuideMapper {
  public static toGuideDTO (guide: GuideForMapper): GuideDTO {
    return {
      id: guide._id as unknown as string,
      title: guide.title,
      subtitle: guide.subtitle,
      content: guide.content,
      images: guide.images,
      thumbnail: guide.thumbnail,
    }
  }
}