import { Enum, EnumType } from "ts-jenum";

@Enum("id")
export class Skill extends EnumType<Skill>() {
  static readonly NotFound = new Skill(0, "", "");
  static readonly Shake = new Skill(1, "쉐이크", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/_icn_skill_shake.png");
  static readonly Blend = new Skill(2, "블렌드", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/_icn_skill_blending.png");
  static readonly Build = new Skill(3, "빌드", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/_icn_skill_build.png");
  static readonly Stir = new Skill(4, "스터", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/_icn_skill_stir.png");
  static readonly Fload = new Skill(5, "플로트", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/_icn_skill_float.png");

  private constructor(
    readonly id: number,
    readonly name: string,
    readonly url: string
  ) {
    super();
  }

  private hasSkillName(name: string): boolean {
    return this.name === name;
  }

  public static findSkillById(id: number): Skill {
    const skill = this.find(id)
    if (!skill) {
      return Skill.NotFound;
    }
    return skill;
  }

  static findSkillByName(name: string): Skill {
    const skill = this.values().find(
      (skill) => skill.hasSkillName(name)
    );
    if (!skill) {
      return Skill.NotFound;
    }
    return skill
  }
}