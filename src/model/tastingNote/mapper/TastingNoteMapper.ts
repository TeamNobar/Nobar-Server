import { RecipeDTO }      from "../../../dto/recipe/RecipeDTO";
import TastingNoteDTO     from "../../../dto/tastingnote/TastingNoteDTO";
import TastingNoteTagDTO  from "../../../dto/tastingnote/TastingNoteTagDTO";
import { debugLogger }    from "../../../loaders/debugLogger";
import TastingNoteEntity  from "../entity/TastingNoteEntity";
import { TastingNoteTag } from "../TastingNoteTag";
import TastingTagMapper   from "./TastingTagMapper";

export default class TastingNoteMapper {

  private static mappingTastingTags(tags: number[]): TastingNoteTagDTO[] {
    debugLogger(tags);
    return TastingNoteTag.getAllTags()
      .map(
        (value: TastingNoteTag): TastingNoteTagDTO => {
          debugLogger(value);
          const isSelected: boolean = tags.includes(value.id);
          return TastingTagMapper.toTagDTO(value, isSelected);
        }
      );
  }

  static toNoteDTO(note: TastingNoteEntity, recipeDTO: RecipeDTO) {
    debugLogger("노트 태그");
    debugLogger(note.tastingTags);
    return <TastingNoteDTO>{
      id: note._id.valueOf().toString(),
      rate: note.rate,
      title: recipeDTO.name,
      recipe: recipeDTO,
      tag: this.mappingTastingTags(note.tastingTags),
      tasteContent: note.tasteContent,
      experienceContent: note.experienceContent,
      createdAt: note.createdAt
    }
  }
};