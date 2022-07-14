import {
  Controller, 
  Get,
  Route,
  Query,
} from "tsoa";
import { SearchRecipesByKeywordService } from "../service/searchRecipesByKeywordService";
import StatusCode from "../utils/StatusCode";
import { errorMessage } from "../utils/errorMessage";

@Route("search")
export class SearchRecipesByKeywordController extends Controller {

  @Get("")
  public async searchRecipesByKeyword (
    @Query() keyword: string

  ) {

    const data = await new SearchRecipesByKeywordService().searchRecipesByKeyword(keyword);

    if (data === null) {
      
      this.setStatus(400)

      const notFoundRecipes = {
        status: StatusCode.BAD_REQUEST,
        messsage : errorMessage.BAD_REQUEST
      }
    
      return notFoundRecipes;
    }

    return data;
  }
}
