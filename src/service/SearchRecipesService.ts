import Recipe from "../model/recipe/RecipeDAO";
import Base from "../model/base/BaseDAO";

export class SearchRecipesService {
 
  public async findRecipesByBase ( base: string ) {

    const foundBase = await Base.findOne({ name: base });

    if (foundBase === null) {
      return null;
    }

    const foundRecipes = await Recipe.find({ base: foundBase._id });

    console.log(foundRecipes)

    if (foundRecipes === null ){
      return null
    }

    return foundRecipes;
  }
}