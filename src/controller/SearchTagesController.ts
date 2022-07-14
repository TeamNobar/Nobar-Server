import {
  Route,
  Get,
  Controller,
} from "tsoa";
import { SearchTagsService } from "../service/SearchTagsService";
import StatusCode from "../utils/StatusCode";
import { errorMessages } from "../utils/errorMessage";

@Route("search")
export class SearchTagsController extends Controller {
  
  @Get("") 
  public async SearchTagsController() {
    const foundTags = await new SearchTagsService().getSearchTags;

    if (foundTags === null) {
      this.setStatus(400)
    
      const notFoundTags = {
        status: StatusCode.BAD_REQUEST,
        messsage : errorMessage.BAD_REQUEST
      }

      return notFoundTags;

    }
  }
}