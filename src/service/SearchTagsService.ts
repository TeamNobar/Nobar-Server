import Base from "../model/base/BaseDAO";
import { BaseMapper } from "../mapper/BaseMapper";

export class SearchTagsService {
  public async getSearchTags () {
    const foundTags = await Base.find({});

    if (foundTags === null) {
      return null;
    }
  
    const base = BaseMapper.toBaseDTO(foundTags);
    return {
      base: base
    };
  }
}