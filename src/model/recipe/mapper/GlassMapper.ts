import { SkillDTO } from "../../../dto/recipe/SkillDTO";
import { Glass }    from "../Glass";

export default class GlassMapper {
  static toGlassDTO(glass: Glass) {
    return <SkillDTO>{
      name: glass.name,
      url: glass.url
    }
  }
};