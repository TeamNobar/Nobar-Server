import jwt               from "jsonwebtoken";
import * as mongoose     from "mongoose";
import config            from "../config";
import { JwtPayloadDTO } from "../dto/auth/JwtPayloadDTO";

const getToken = (userId: string): string => {
  const payload: JwtPayloadDTO = {
    user: {
      id: userId
    },
  };

  return jwt.sign(
    payload,
    config.jwtSecret,
    {expiresIn : "99y"}
  )
}

export default getToken