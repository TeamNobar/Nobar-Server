import Recipe from "../model/recipe/RecipeDAO";
import Base from "../model/base/BaseDAO";

export class SearchRecipesService {
 
  public async findRecipesByBase ( base: string ) {

    const foundBase = await Base.findOne({ name: base });

    if (foundBase === null) {
      return null;
    }

    // default === null 인 친구들을 조건으로
    const foundRecipes = await Recipe.find({ base: foundBase._id });

    if (foundRecipes === null ){
      return null
    }

    // 이후에 mapper 추가해서 api 명세 규격대로 반환

    return foundRecipes.map(foundRecipe => {
      return foundRecipe.name
    });
  }
}


