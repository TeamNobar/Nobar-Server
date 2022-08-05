import {
  Controller,
  Get,
  Path,
  Route,
  Security,
} from "tsoa";
import ServiceInjector from "../service/ServiceInjector";

@Route("guide")
export class GuideController extends Controller {

  private readonly guideService = ServiceInjector.guide;
   

  @Get("{guideId}")
  @Security("jwt", ["admin"])
  public async findGuide( @Path() guideId: string ) {

    const data = await this.guideService.findGuide(guideId);

    return data;

  } 
}