import RecipeDAO from "../model/recipe/RecipeDAO";
import BaseDAO from "../model/base/BaseDAO";
import IngredientDAO from "../model/ingredient/IngredientDAO";
import { RecipeMapper } from "../mapper/RecipeMapper";
import NobarError            from "../error/NobarError";
import { NobarErrorCode }    from "../error/NobarErrorCode";
import NobarErrorMessage     from "../error/NobarErrorMessage";

export class SearchRecipesByBaseService {
 
  public async findRecipesByBase ( base: string ) {

    const foundBase = await BaseDAO.findOne({ name: base });

    if (!foundBase) {
      throw new NobarError(NobarErrorCode.BAD_REQUEST, NobarErrorMessage.NOT_FOUND_BASE);
    }

    const foundRecipes = await RecipeDAO.find({ base: foundBase._id })
                                        .populate({ path: "base", model: BaseDAO })
                                        .populate({ path: "ingredients.ingredient", model: IngredientDAO });

    const recipesData = foundRecipes.map((foundRecipe: any) => {
      const recipeData = RecipeMapper.toRecipeDTO(foundRecipe, foundRecipe.base, foundRecipe.ingredients);
      return recipeData;
    });

    return {
      recipes: recipesData
    };
  }
}


