import { Controller, Get, Route } from "tsoa";
import ServiceInjector            from "../service/ServiceInjector";
import StatusCode                 from "../utils/StatusCode";

@Route("note")
export class TastingNoteController extends Controller {
  private readonly tastingNoteService = ServiceInjector.tastingNote

  @Get("tag")
  public async getAllTags() {
    this.setStatus(StatusCode.OK);
    return this.tastingNoteService.getAllTag();
  }
}