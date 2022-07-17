import {
  Controller, 
  Get,
  Route,
  Query,
} from "tsoa";
import { SearchRecipesByKeywordService } from "../service/SearchRecipesByKeywordService";
import StatusCode from "../utils/StatusCode";

@Route("search")
export class SearchRecipesByKeywordController extends Controller {

  @Get("keyword")
  public async searchRecipesByKeyword (
    @Query() keyword: string
  ) {

    if (keyword === "") {
      this.setStatus(StatusCode.OK);
      return {
        recipes: []
      };
    }

    const foundRecipes = await new SearchRecipesByKeywordService().searchRecipesByKeyword(keyword);

    this.setStatus(StatusCode.OK);
    return foundRecipes;
  }
}
