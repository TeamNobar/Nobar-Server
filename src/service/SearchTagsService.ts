import Base from "../model/base/BaseDAO";

export class SearchTagsService {
  public async getSearchTags () {
    const foundTags = await Base.find({});

    console.log("tags", foundTags);

    if (foundTags === null) {
      return null;
    }
  
    return foundTags.map(tag => {
     return tag.name;
    });
  }
}