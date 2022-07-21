import { Enum, EnumType } from "ts-jenum";

@Enum("id")
export class TastingNoteTag extends EnumType<TastingNoteTag>() {
  static readonly Tag1 = new TastingNoteTag(0,"식도가활활");
  static readonly Tag2 = new TastingNoteTag(1,"술맛이응애");
  static readonly Tag3= new TastingNoteTag(2, "향기가향긋");
  static readonly Tag4 = new TastingNoteTag(3, "과일의상큼");
  static readonly Tag5 = new TastingNoteTag(4, "혀끝이달달");
  static readonly Tag6 = new TastingNoteTag(5, "탄산이톡톡");
  static readonly Tag7 = new TastingNoteTag(6, "크림의질감");
  static readonly Tag8 = new TastingNoteTag(7, "뒷맛이깔끔");
  static readonly Tag9 = new TastingNoteTag(8, "허브의쌉쌀");

  private constructor(
    readonly id: number,
    readonly content: string
  ) {
    super();
  }
}