import TastingNoteTagDTO  from "../../../dto/tastingnote/TastingNoteTagDTO";
import { TastingNoteTag } from "../TastingNoteTag";

export default class TastingTagMapper {
  static toTagDTO(tag: TastingNoteTag, isSelected: boolean) {
    return <TastingNoteTagDTO> {
      id: tag.id,
      content: tag.content,
      activeIcon: tag.activeIcon,
      inActiveIcon: tag.inActiveIcon,
      isSelected: isSelected
    }
  }
};