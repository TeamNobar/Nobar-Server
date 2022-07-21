import { RecipeDTO }     from "../recipe/RecipeDTO";
import TastingNoteTagDTO from "./TastingNoteTagDTO";

export default interface TastingNoteDTO {
  id: string,
  rate: number,
  title: string,
  recipe: RecipeDTO,
  tag: TastingNoteTagDTO[],
  tasteContent: string,
  experienceContent: string,
  createdAt: string;
}