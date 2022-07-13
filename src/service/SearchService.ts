import Base from "../model/base/BaseDAO";
import Recipe from "../model/recipe/RecipeDAO";

export class SearchService {
 
  public async findRecipesByBase ( base: string ){

    const foundRecipes = await Base.find({ name: base }, { recipes : 1 })
  }
}