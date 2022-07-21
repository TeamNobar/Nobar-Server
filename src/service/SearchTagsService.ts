import BaseDAO from "../model/base/BaseDAO";
import { BaseMapper } from "../mapper/BaseMapper";

export class SearchTagsService {
  public async getSearchTags () {
    const foundTags = await BaseDAO.find({});
  
    const base = BaseMapper.toBaseDTO(foundTags);
    return {
      base: base
    };
  }
}