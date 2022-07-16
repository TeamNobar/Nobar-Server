import IngredientDAO from "../model/ingredient/IngredientDAO";
// import RecommendDAO from "../model/recommend/RecommendDAO";
import RecipeDAO from "../model/recipe/RecipeDAO";
import BaseDAO from "../model/base/BaseDAO";
import { RecipeMapper } from "../mapper/RecipeMapper";

export class SearchKeywordService {
  public async getSearchKeywords() {

    // 추천 검색어 레시피 가져오기
    /*
    const recommendRecipes = await RecommendDAO.find({}).populate("recipeId", "_id name", RecipeDAO ); 

    const recommendData = await Promise.all(recommendRecipes.map((recommendRecipe: any) => {
      const data = {               
        recipeId: recommendRecipe.recipeId._id,
        name: recommendRecipe.recipeId.name
      };

      return data;
    }));
    */

    const recipeNames = await RecipeDAO.find({ defaultRecipe: null })
                                       .populate({ path: "base", model: BaseDAO })
                                       .populate({ path: "ingredients.ingredient", model: IngredientDAO });

    // console.log("recipeNames[0].ingredients ", recipeNames[0].ingredients);
    // console.log("recipeNames[0].ingredients[0].ingredient ", recipeNames[0].ingredients[0].ingredient);
    // console.log("recipeNames[0].ingredients[0].ingredient.name ", recipeNames[0].ingredients[0].ingredient.name);


    // recipeNames map 돌면서 mapper 처리 + quantity 필드 처리
    const recipeNamesData = recipeNames.map(recipeName => {
      return RecipeMapper.toRecipeDTO(recipeName, recipeName._id, recipeName.base, recipeName.ingredients);
    })

    console.log("recipeNamesData ", recipeNamesData);

    // const ingredientNames = await IngredientDAO.find({});

    // const data = {
    //   recommends: recommendData,
    //   recipeNames: recipeNames,
    //   ingredientNames: ingredientNames
    // };

    return recipeNamesData;

  }
}