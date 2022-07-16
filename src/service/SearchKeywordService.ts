import IngredientDAO from "../model/ingredient/IngredientDAO";
import RecommendDAO from "../model/recommend/RecommendDAO";
import RecipeDAO from "../model/recipe/RecipeDAO";
import BaseDAO from "../model/base/BaseDAO";
import { RecipeMapper } from "../mapper/RecipeMapper";
import { IngredientMapper } from "../mapper/IngredientMapper";

export class SearchKeywordService {
  public async getSearchKeywords() {

    // 추천 검색어로 뜬 레시피 가져오기 - 일단 기본 레시피만 뜨도록
    const recommendRecipes = await RecommendDAO.find({ defaultRecipe: null })
                                               .populate("recipeId", "_id name", RecipeDAO ); 

    const recommendData = await Promise.all(recommendRecipes.map((recommendRecipe: any) => {
      const data = {               
        recipeId: recommendRecipe.recipeId._id,
        name: recommendRecipe.recipeId.name
      };

      return data;
    }));
  
    // 자동완성으로 쓸 레시피 이름 전부 가져오기
    const recipes = await RecipeDAO.find({ defaultRecipe: null })
                                    .populate({ path: "base", model: BaseDAO })
                                    .populate({ path: "ingredients.ingredient", model: IngredientDAO });

    const recipesData = recipes.map((recipe: any) => {
      const data = RecipeMapper.toRecipeDTO(recipe, recipe.base, recipe.ingredients);
      return data;
    })

    // 자동완성으로 쓸 레시피 이름 전부 가져오기
    const ingredients = await IngredientDAO.find({});
    const ingredientsData = IngredientMapper.toIngredientDTO(ingredients);


    // data 결합해서 최종적으로 반환
    const data = {
      recommends: recommendData,
      recipes: recipesData,
      ingredients: ingredientsData
    };

    console.log(data);

    return data;

  }
}