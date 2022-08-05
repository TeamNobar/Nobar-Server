import {
  Route,
  Get,
  Controller,
  Security
} from "tsoa";
import { SearchTagsService } from "../service/SearchService";

@Route("search")
export class SearchTagsController extends Controller {
  
  @Get("tag") 
  @Security("jwt", ["admin"])
  public async getSearchTags() {
    return await new SearchTagsService().getSearchTags();
  }
}