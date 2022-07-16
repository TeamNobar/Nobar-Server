import {
  Get, 
  Route,
  Controller
} from "tsoa";
import { SearchKeywordService } from "../service/SearchKeywordService";
import StatusCode from "../utils/StatusCode";
import { errorMessage } from "../utils/errorMessage";

@Route("search")
export class SearchKeywordController extends Controller{
  @Get("")
  public async getSearchKeywords() {

    const keywords = await new SearchKeywordService().getSearchKeywords();

    if (keywords === null){

      this.setStatus(400);
    
      const notFoundKeywords = {
        status: StatusCode.BAD_REQUEST,
        messsage : errorMessage.BAD_REQUEST
      };

      return notFoundKeywords;
    }

    this.setStatus(200);
    return keywords;
  }
}