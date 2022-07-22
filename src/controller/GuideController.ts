import {
  Controller,
  Get,
  Path,
  Route,
  Security,
} from "tsoa";
import { GuideService } from "../service/GuideService";

@Route("guide")
export class GuideController extends Controller {

 @Get("{guideId}")
 @Security("jwt", ["admin"])
 public async findGuide( @Path() guideId: string ) {

    const data = await new GuideService().findGuide(guideId);

    return data;

  } 
}