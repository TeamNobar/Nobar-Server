import IngredientDAO from "../model/ingredient/IngredientDAO";
import RecommendDAO from "../model/recommend/RecommendDAO";
import RecipeDAO from "../model/recipe/RecipeDAO";
import BaseDAO from "../model/base/BaseDAO";
import { RecipeMapper } from "../mapper/RecipeMapper";
import { IngredientsMapper } from "../mapper/IngredientsMapper";

export class SearchKeywordService {
  public async getSearchKeywords() {

    // 추천 검색어로 뜬 레시피 가져오기 - 일단 기본 레시피만 뜨도록
    const recommendRecipes = await RecommendDAO.find({})
                                               .populate("recipeId", "_id name", RecipeDAO ); 

    const recommendsData = await Promise.all(recommendRecipes.map((recommendRecipe: any) => {
      const recommendData = {               
        recipeId: recommendRecipe.recipeId._id,
        name: recommendRecipe.recipeId.name
      };

      return recommendData;
    }));
  
    // 자동완성으로 쓸 레시피 이름 전부 가져오기
    const recipes = await RecipeDAO.find({})
                                    .populate({ path: "base", model: BaseDAO })
                                    .populate({ path: "ingredients.ingredient", model: IngredientDAO });

    const recipesData = recipes.map((recipe: any) => {
      const recipeData = RecipeMapper.toRecipeDTO(recipe, recipe.base, recipe.ingredients);
      return recipeData;
    })

    // 자동완성으로 쓸 재료 이름 전부 가져오기
    const ingredients = await IngredientDAO.find({});
    const ingredientsData = IngredientsMapper.toIngredientDTO(ingredients);

    // data 결합해서 최종적으로 반환
   return {
      recommends: recommendsData,
      recipes: recipesData,
      ingredients: ingredientsData
    };

  }
}