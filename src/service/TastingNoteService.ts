import { Document, Model } from "mongoose";
import TastingTagMapper    from "../model/tastingNote/mapper/TastingTagMapper";
import TastingNote         from "../model/tastingNote/TastingNote";
import { TastingNoteTag }  from "../model/tastingNote/TastingNoteTag";

export default class TastingNoteService {
  constructor(
    private readonly tastingNoteDAO: Model<TastingNote & Document>
  ) {
  }

};