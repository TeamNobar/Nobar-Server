import {
  Controller, 
  Get,
  Route,
  Query,
} from "tsoa";
import { SearchRecipesByKeywordService } from "../service/SearchRecipesByKeywordService";
import StatusCode from "../utils/StatusCode";
import { errorMessage } from "../utils/errorMessage";

@Route("search")
export class SearchRecipesByKeywordController extends Controller {

  @Get("keyword")
  public async searchRecipesByKeyword (
    @Query() keyword: string
  ) {

    const recipes = await new SearchRecipesByKeywordService().searchRecipesByKeyword(keyword);

    if (recipes === null) {
      
      this.setStatus(StatusCode.BAD_REQUEST);

      const notFoundRecipes = {
        status: StatusCode.BAD_REQUEST,
        messsage : errorMessage.BAD_REQUEST
      };
    
      return notFoundRecipes;
    }

    this.setStatus(StatusCode.OK);
    return recipes;
  }
}
