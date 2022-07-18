import mongoose from "mongoose";
import { Base } from "../Base";

export default interface BaseEntity extends Base {
  _id: mongoose.Schema.Types.ObjectId;
}