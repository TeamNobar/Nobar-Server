import { Enum, EnumType } from "ts-jenum";

@Enum("id")
export class TastingNoteTag extends EnumType<TastingNoteTag>() {
  static readonly Tag1 = new TastingNoteTag(0, "식도가활활", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_burn.png", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_burn_inactive.png");
  static readonly Tag2 = new TastingNoteTag(1, "술맛이응애", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_baby.png", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_baby_inactive.png");
  static readonly Tag3 = new TastingNoteTag(2, "향기가향긋", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_scent.png", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_scent_inactive.png");
  static readonly Tag4 = new TastingNoteTag(3, "과일의상큼", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_fruit.png", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_fruit_inactive.png");
  static readonly Tag5 = new TastingNoteTag(4, "혀끝이달달", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_sweet.png", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_sweet_inactive.png");
  static readonly Tag6 = new TastingNoteTag(5, "탄산이톡톡", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_fizz.png", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_fizz_inactive.png");
  static readonly Tag7 = new TastingNoteTag(6, "크림의질감", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_cream.png", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_cream_inactive.png");
  static readonly Tag8 = new TastingNoteTag(7, "뒷맛이깔끔", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_lastone.png", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_lastone_inactive.png");
  static readonly Tag9 = new TastingNoteTag(8, "허브의쌉쌀", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_herb.png", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_tastetag_herb_inactive.png");

  private constructor(
    readonly id: number,
    readonly content: string,
    readonly activeIcon: string,
    readonly inActiveIcon: string
  ) {
    super();
  }

  public static getAllTags() {
    return this.values()
  }
}