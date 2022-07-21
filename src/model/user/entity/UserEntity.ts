import mongoose from "mongoose";
import User     from "../User";

export default interface UserEntity extends User {
  _id: mongoose.Schema.Types.ObjectId;
}