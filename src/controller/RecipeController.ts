import { Controller, Get, Path, Route, Security } from "tsoa";
import RecipeService                              from "../service/RecipeService";
import ServiceInjector                  from "../service/ServiceInjector";

@Route("recipe")
export class RecipeController extends Controller {
  private readonly recipeDetailService: RecipeService = ServiceInjector.recipe

  @Get("{recipeId}")
  @Security("jwt", ["admin"])
  public async getRecipeDetail(
    @Path() recipeId: string
  ) {
    return await this.recipeDetailService.getRecipeDetail(recipeId);
  }

  @Get("")
  @Security("jwt", ["admin"])
  public async getAllRecipe() {
    return await this.recipeDetailService.getAllRecipes();
  }
}