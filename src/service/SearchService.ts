import { BaseMapper } from "../mapper/BaseMapper";
import { RecipeMapper } from "../mapper/RecipeMapper";
import NobarError            from "../error/NobarError";
import { NobarErrorCode }    from "../error/NobarErrorCode";
import NobarErrorMessage     from "../error/NobarErrorMessage";
import { IngredientsMapper } from "../mapper/IngredientsMapper";
import mongoose, { Model } from "mongoose";
import { Base } from "../model/base/Base";
import { Recipe } from "../model/recipe/Recipe";
import { Recommend } from "../model/recommend/Recommend";
import { Ingredient } from "../model/ingredient/Ingredient";
import { BaseDTO } from "../dto/base/BaseDTO";
import { RecipeDTO } from "../dto/recipe/RecipeDTO";
import { SearchViewWordsDTO } from "../dto/search/SearchViewWordsDTO";

export class SearchService {
  constructor (
    private readonly baseDAO: Model<Base & mongoose.Document>,
    private readonly recipeDAO: Model<Recipe & mongoose.Document>, 
    private readonly recommendDAO: Model<Recommend & mongoose.Document>, 
    private readonly ingredientDAO: Model<Ingredient & mongoose.Document>, 
  ) {
  }

  /**
   *  @route GET /search/tag
   *  @desc 검색 태그(베이스 술 종류) 전부 조회
   *  @access public
   */
  public async getSearchTags (): Promise<BaseDTO[]> {
    const bases = await this.baseDAO.find({});
  
    const tags = BaseMapper.toBaseDTO(bases);
    return tags
  }


  /**
   *  @route GET /search/keyword?keyword=
   *  @desc 검색어로 레시피 조회
   *  @access public
   */
  public async searchRecipesByKeyword (keyword: string): Promise<RecipeDTO[]> {

    const regex = (pattern: string) => new RegExp(`.*${pattern}.*`);

    const keywordRegex = regex(keyword);
    
    const foundRecipes = await this.recipeDAO.find({ name: { $regex: keywordRegex } })
                                     .populate({ path: "base", model: this.baseDAO })
                                     .populate({ path: "ingredients.ingredient", model: this.ingredientDAO });

    const recipesData = foundRecipes.map((foundRecipe: any) => {
      const recipeData = RecipeMapper.toRecipeDTO(foundRecipe, foundRecipe.base, foundRecipe.ingredients);
      return recipeData;
    })
    
    return recipesData;
  }
  

  /**
   *  @route GET /search/base?base=
   *  @desc 베이스 술로 레시피 조회
   *  @access public
   */
  public async findRecipesByBase ( base: string ): Promise<RecipeDTO[]> {

    const foundBase = await this.baseDAO.findOne({ name: base });

    if (!foundBase) {
      throw new NobarError(NobarErrorCode.BAD_REQUEST, NobarErrorMessage.NOT_FOUND_BASE);
    }

    const foundRecipes = await this.recipeDAO.find({ base: foundBase._id })
                                        .populate({ path: "base", model: this.baseDAO })
                                        .populate({ path: "ingredients.ingredient", model: this.ingredientDAO });

    const recipesData = foundRecipes.map((foundRecipe: any) => {
      const recipeData = RecipeMapper.toRecipeDTO(foundRecipe, foundRecipe.base, foundRecipe.ingredients);
      return recipeData;
    });

    return recipesData;
  }

  /**
   *  @route GET /search
   *  @desc 기본 검색뷰에 필요한 데이터(추천레시피, 자동완성레시피, 자동완성재료) 조회
   *  @access public
   */
  public async getSearchViewWords(): Promise<SearchViewWordsDTO> {

    // 추천 검색어로 뜬 레시피 가져오기 - 일단 기본 레시피만 뜨도록
    const recommendRecipes = await this.recommendDAO.find({})
                                               .populate("recipeId", "_id name", this.recipeDAO ); 

    const recommendsData = await Promise.all(recommendRecipes.map((recommendRecipe: any) => {
      const recommendData = {               
        recipeId: recommendRecipe.recipeId._id,
        name: recommendRecipe.recipeId.name
      };

      return recommendData;
    }));
  
    // 자동완성으로 쓸 레시피 이름 전부 가져오기
    const recipes = await this.recipeDAO.find({})
                                    .populate({ path: "base", model: this.baseDAO })
                                    .populate({ path: "ingredients.ingredient", model: this.ingredientDAO });

    const recipesData = recipes.map((recipe: any) => {
      const recipeData = RecipeMapper.toRecipeDTO(recipe, recipe.base, recipe.ingredients);
      return recipeData;
    })

    // 자동완성으로 쓸 재료 이름 전부 가져오기
    const ingredients = await this.ingredientDAO.find({});
    const ingredientsData = IngredientsMapper.toIngredientDTO(ingredients);

    // data 결합해서 최종적으로 반환
   return {
      recommends: recommendsData,
      recipes: recipesData,
      ingredients: ingredientsData
   };

  }

}