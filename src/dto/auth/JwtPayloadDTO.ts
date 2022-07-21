import mongoose from "mongoose";

export interface JwtPayloadDTO {
  user: {
    id: mongoose.Schema.Types.ObjectId
  }
}