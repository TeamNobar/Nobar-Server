import {
  Controller,
  Get,
  Path,
  Route,
} from "tsoa";
import { GuideService } from "../service/GuideService";
import StatusCode from "../utils/StatusCode";
import { errorMessage } from "../utils/errorMessage";

@Route("guide")
export class GuideRouter extends Controller {

 @Get("{guideId}")
 public async findGuide( @Path() guideId: string ) {

  const data = await new GuideService().findGuide(guideId);
  
  if (data === null) {
    
    this.setStatus(400);
    
    const notFoundGuide =  {
      status: StatusCode.BAD_REQUEST,
      message: errorMessage.BAD_REQUEST
    };

    return notFoundGuide;
  }

  this.setStatus(200);
  return data;

  } 
}