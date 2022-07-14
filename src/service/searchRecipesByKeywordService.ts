import Recipe from "../model/recipe/RecipeDAO";

export class SearchRecipesByKeywordService {
  public async searchRecipesByKeyword (keyword: string) {
    const regex = (pattern: string) => new RegExp(`.*${pattern}.*`);

    const keywordRegex = regex(keyword);
    const foundRecipes = await Recipe.find({ name: { $regex: keywordRegex } });
  
    return foundRecipes.map(foundRecipe => foundRecipe.name);
  }
}
