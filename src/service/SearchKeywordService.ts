import IngredientDAO from "../model/ingredient/IngredientDAO";
import RecommendDAO from "../model/recommend/RecommendDAO";
import RecipeDAO from "../model/recipe/RecipeDAO";
import BaseDAO from "../model/base/BaseDAO";
import { RecipeMapper } from "../mapper/RecipeMapper";


export class SearchKeywordService {
  public async getSearchKeywords() {

    // 추천 검색어로 뜬 레시피 가져오기 - 일단 { defaultRecipe: null } 조건은 뺌
    const recommendRecipes = await RecommendDAO.find({}).populate("recipeId", "_id name", RecipeDAO ); 

    const recommendData = await Promise.all(recommendRecipes.map((recommendRecipe: any) => {
      const data = {               
        recipeId: recommendRecipe.recipeId._id,
        name: recommendRecipe.recipeId.name
      };

      return data;
    }));
  
    // 자동완성으로 쓸 레시피 이름 전부 가져오기
    const recipeNames = await RecipeDAO.find({ defaultRecipe: null })
                                       .populate({ path: "base", model: BaseDAO })
                                       .populate({ path: "ingredients.ingredient", model: IngredientDAO });

    const recipeNamesData = recipeNames.map(recipeName => {
      return RecipeMapper.toRecipeDTO(recipeName, recipeName._id, recipeName.base, recipeName.ingredients);
    })

    // 자동완성으로 쓸 레시피 이름 전부 가져오기
    const ingredientNames = await IngredientDAO.find({});

    const ingredientNamesData = ingredientNames.map(ingredientName => (
      {
        id: ingredientName._id,
        name: ingredientName.name,
        enName: ingredientName.enName,
        proof: ingredientName.proof,
        category: ingredientName.category
      }
    ));

    // data 결합해서 최종적으로 반환
    const data = {
      recommends: recommendData,
      recipeNames: recipeNamesData,
      ingredientNames: ingredientNamesData
    };

    return data;

  }
}