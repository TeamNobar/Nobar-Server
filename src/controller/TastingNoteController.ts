import { Controller, Get, Path, Post, Request, Route, Security } from "tsoa";
import { JwtPayloadDTO }                                         from "../dto/auth/JwtPayloadDTO";
import CreateTastingNoteParam                                    from "../dto/tastingnote/CreateTastingNoteParam";
import ServiceInjector                                           from "../service/ServiceInjector";
import StatusCode                                                from "../utils/StatusCode";

@Route("note")
export class TastingNoteController extends Controller {
  private readonly tastingNoteService = ServiceInjector.tastingNote

  @Get("tag")
  public async getAllTags() {
    this.setStatus(StatusCode.OK);
    return this.tastingNoteService.getAllTag();
  }

  @Get("{tastingNoteId}")
  public async getTastingNote(
    @Path() tastingNoteId: string,
  ) {
    this.setStatus(StatusCode.OK);
    return this.tastingNoteService.getTastingNote(tastingNoteId);
  }

  @Post("")
  @Security("jwt", ["admin"])
  public async postTastingNote(
    @Request() request: any
  ) {
    const token: JwtPayloadDTO = await Promise.resolve(request.user);
    const userId: string = token.user.id
    const tastingNoteParam: CreateTastingNoteParam = request.body;
    this.setStatus(StatusCode.CREATED);
    return this.tastingNoteService.postTastingNote(userId, tastingNoteParam);
  }
}