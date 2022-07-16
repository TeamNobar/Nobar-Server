import IngredientDAO from "../model/ingredient/IngredientDAO";
import RecommendDAO from "../model/recomment/RecommendDAO";
import RecipeDAO from "../model/recipe/RecipeDAO";


export class SearchKeywordService {
  public async getSearchKeywords() {

    // 추천 검색어 레시피 가져오기
    const recommendRecipes = await RecommendDAO.find({}).populate("recipeId", "_id name", RecipeDAO ); 

    const rst = await Promise.all(recommendRecipes.map((recommendRecipe: any) => {
      const data = {               
        recipeId: recommendRecipe.recipeId._id,
        name: recommendRecipe.recipeId.name
      };

      return data;
    }));

    const recipeNames = await RecipeDAO.find({ defaultRecipe: null }).populate("ingredients.");
    Promise.all(recipeNames.map(recipeName => {
      recipeName
    }))

    // recipeNames map 돌면서 mapper 다 정렬
    recipeNames.map(recipeName => {
      // mapper 호출해서 반환
    })
    const ingredientNames = await IngredientDAO.find({});

    const data = {
      recommends: rst,
      recipeNames: recipeNames,
      ingredientNames: ingredientNames
    };

    return data;

  }
}