import Base from "../model/base/BaseDAO";

export class SearchService {
 
  public async findRecipesByBase ( base: string ){

    const foundRecipes = await Base.find({ name: base }, { recipes : 1 }).populate("recipes");

    if (foundRecipes === null ){
      return null
    }

    return foundRecipes;


  }
}