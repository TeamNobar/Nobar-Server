import BaseDAO from "../model/base/BaseDAO";
import { BaseMapper } from "../mapper/BaseMapper";
import RecipeDAO from "../model/recipe/RecipeDAO";
import { RecipeMapper } from "../mapper/RecipeMapper";
import IngredientDAO from "../model/ingredient/IngredientDAO";
import NobarError            from "../error/NobarError";
import { NobarErrorCode }    from "../error/NobarErrorCode";
import NobarErrorMessage     from "../error/NobarErrorMessage";
import RecommendDAO from "../model/recommend/RecommendDAO";
import { IngredientsMapper } from "../mapper/IngredientsMapper";

export class SearchService {


  /**
   *  @route GET /search/tag
   *  @desc 검색 태그(베이스 술 종류) 전부 조회
   *  @access public
   */
  public async getSearchTags () {
    const foundTags = await BaseDAO.find({});
  
    const base = BaseMapper.toBaseDTO(foundTags);
    return {
      base: base
    };
  }


  /**
   *  @route GET /search/keyword?keyword=
   *  @desc 검색어로 레시피 조회
   *  @access public
   */
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
  

  /**
   *  @route GET /search/base?base=
   *  @desc 베이스 술로 레시피 조회
   *  @access public
   */
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

  /**
   *  @route GET /search
   *  @desc 기본 검색뷰에 필요한 데이터(추천레시피, 자동완성레시피, 자동완성재료) 조회
   *  @access public
   */
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