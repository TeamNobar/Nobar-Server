import RecipeDAO from "../model/recipe/RecipeDAO";
import { RecipeMapper } from "../mapper/RecipeMapper";
import BaseDAO from "../model/base/BaseDAO";
import IngredientDAO from "../model/ingredient/IngredientDAO";

export class SearchRecipesByKeywordService {
  public async searchRecipesByKeyword (keyword: string) {

    const regex = (pattern: string) => new RegExp(`.*${pattern}.*`);

    const keywordRegex = regex(keyword);
    
    const foundRecipes = await RecipeDAO.find({ name: { $regex: keywordRegex } })
                                     .populate({ path: "base", model: BaseDAO })
                                     .populate({ path: "ingredients.ingredient", model: IngredientDAO });

    const recipesData = foundRecipes.map((foundRecipe: any) => {
      const recipeData = RecipeMapper.toRecipeDTO(foundRecipe, foundRecipe.base, foundRecipe.ingredients);
      return recipeData;
    })
    
    return {
      recipes: recipesData 
    };
  }
}
