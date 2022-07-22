import TastingNoteTagDTO from "./TastingNoteTagDTO";

export default interface CreateTastingNoteParam{
  recipeId: string,
  rate: number,
  tagList: TastingNoteTagDTO[],
  tasteContent: string,
  experienceContent: string,
  createdAt: string
}