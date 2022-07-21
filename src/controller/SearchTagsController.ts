import {
  Route,
  Get,
  Controller,
} from "tsoa";
import { SearchTagsService } from "../service/SearchTagsService";

@Route("search")
export class SearchTagsController extends Controller {
  
  @Get("tag") 
  public async getSearchTags() {
    return await new SearchTagsService().getSearchTags();
  }
}