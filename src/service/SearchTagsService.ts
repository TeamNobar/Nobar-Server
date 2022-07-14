import Base from "../model/base/BaseDAO";

export class SearchTagsService {
  public async getSearchTags () {
    const foundTags = await Base.find({});

    if (foundTags === null) {
      return null;
    }
  
    return foundTags.map(tag => {
     return tag.url;
    });
  }
}