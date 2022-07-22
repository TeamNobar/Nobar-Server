import mongoose, { Document, Model } from "mongoose";
import { RecipeDTO }                 from "../dto/recipe/RecipeDTO";
import CreateTastingNoteParam        from "../dto/tastingnote/CreateTastingNoteParam";
import TastingNoteDTO                from "../dto/tastingnote/TastingNoteDTO";
import TastingNoteTagDTO             from "../dto/tastingnote/TastingNoteTagDTO";
import NobarError                    from "../error/NobarError";
import { NobarErrorCode }            from "../error/NobarErrorCode";
import NobarErrorMessage             from "../error/NobarErrorMessage";
import { debugLogger }               from "../loaders/debugLogger";
import { Base }                      from "../model/base/Base";
import BaseEntity                    from "../model/base/entity/BaseEntity";
import { Ingredient }                from "../model/ingredient/Ingredient";
import IngredientEntity              from "../model/ingredient/IngredientEntity";
import RecipeEntity                  from "../model/recipe/entity/RecipeEntity";
import RecipeIngredientEmbed         from "../model/recipe/mapper/RecipeIngredientEmbed";
import RecipeMapper                  from "../model/recipe/mapper/RecipeMapper";
import { Recipe }                    from "../model/recipe/Recipe";
import RecipeIngredient              from "../model/recipe/RecipeIngredient";
import TastingNoteEntity             from "../model/tastingNote/entity/TastingNoteEntity";
import TastingNoteMapper             from "../model/tastingNote/mapper/TastingNoteMapper";
import TastingTagMapper              from "../model/tastingNote/mapper/TastingTagMapper";
import TastingNote                   from "../model/tastingNote/TastingNote";
import { TastingNoteTag }            from "../model/tastingNote/TastingNoteTag";
import User                          from "../model/user/User";

export default class TastingNoteService {
  constructor(
    private readonly userDAO: Model<User & Document>,
    private readonly tastingNoteDAO: Model<TastingNote & Document>,
    private readonly recipeDAO: Model<Recipe & Document>,
    private readonly baseDAO: Model<Base & Document>,
    private readonly ingredientDAO: Model<Ingredient & Document>
  ) {
  }

  public getAllTag(): TastingNoteTagDTO[] {
    return TastingNoteTag.getAllTags().map(
      (value) => TastingTagMapper.toTagDTO(value, false)
    );
  }

  public async getTastingNotes(tastingNoteIds: string[]): Promise<TastingNoteDTO[]> {
    return Promise.all(
      tastingNoteIds.map(async value => await this.getTastingNote(value))
    );
  }

  public async getTastingNote(tastingNoteId: string): Promise<TastingNoteDTO> {
    const tastingNote: TastingNoteEntity = await this.findTastingNote(tastingNoteId);
    const recipe: RecipeEntity = await this.findRecipeById(tastingNote.recipe.valueOf().toString());
    const base: BaseEntity = await this.findBaseById(recipe.base.valueOf().toString());
    const embededIngredient: RecipeIngredientEmbed[] = await this.embedAllIngredient(recipe.ingredients);
    const recipeDTO: RecipeDTO = RecipeMapper.toRecipeDTO(recipe, base, embededIngredient);
    return TastingNoteMapper.toNoteDTO(tastingNote, recipeDTO)
  }

  public async postTastingNote(userId: string, tastingNote: CreateTastingNoteParam): Promise<TastingNoteDTO> {
    const note: TastingNoteEntity = await this.saveTastingNote(tastingNote);
    await this.saveUserTastingNote(userId, note._id);
    return await this.getTastingNote(note._id.valueOf().toString());
  }

  private async saveUserTastingNote(userId: string, tastingNoteId: mongoose.Schema.Types.ObjectId) {
    await this.userDAO.findByIdAndUpdate(userId, {$push: {tastingNotes: tastingNoteId}})
      .exec()
  }

  private async saveTastingNote(noteParam: CreateTastingNoteParam): Promise<TastingNoteEntity> {
    const recipe: RecipeEntity = await this.findRecipeById(noteParam.recipeId);
    const note: TastingNote = {
      rate: noteParam.rate,
      recipe: recipe._id,
      tastingTags: this.mappingTagForSave(noteParam.tagList),
      tasteContent: noteParam.tasteContent,
      experienceContent: noteParam.experienceContent,
      createdAt: noteParam.createdAt
    }
    debugLogger(note);
    debugLogger(this.tastingNoteDAO);
    const a = await this.tastingNoteDAO.create(note);
    debugLogger(a);
    return a
  }

  private mappingTagForSave(tagList: TastingNoteTagDTO[]): number[] {
    const tastingTag: number[] = [];
    tagList.forEach(value => {
      if (value.isSelected) {
        tastingTag.push(value.id);
      }
    })
    return tastingTag;
  }

  private async findTastingNote(tastingNoteId: string): Promise<TastingNoteEntity> {
    const tastingNote: TastingNoteEntity | null = await this.tastingNoteDAO.findById(tastingNoteId);
    if (!tastingNote) {
      throw new NobarError(NobarErrorCode.BAD_REQUEST, NobarErrorMessage.NOT_FOUND_TASTING_NOTE);
    }
    return tastingNote
  }

  private async findRecipeById(recipeId: string): Promise<RecipeEntity> {
    const recipe: RecipeEntity | null = await this.recipeDAO.findById(recipeId);
    if (!recipe) {
      throw new NobarError(NobarErrorCode.BAD_REQUEST, NobarErrorMessage.NOT_FOUND_RECIPE);
    }
    return recipe;
  }

  private async findBaseById(baseId: string): Promise<BaseEntity> {
    const base: BaseEntity | null = await this.baseDAO.findById(baseId);
    if (!base) {
      throw new NobarError(NobarErrorCode.BAD_REQUEST, NobarErrorMessage.NOT_FOUND_BASE);
    }
    return base;
  }

  private async embedAllIngredient(ingredients: RecipeIngredient[]): Promise<RecipeIngredientEmbed[]> {
    return Promise.all(
      ingredients.map(async value => await this.embedIngredient(value))
    )
  }

  private async embedIngredient(recipeIngredient: RecipeIngredient) {
    const ingredient: IngredientEntity = await this.findIngredientById(recipeIngredient.ingredient.valueOf().toString());
    return <RecipeIngredientEmbed>{
      ingredient: ingredient,
      quantity: recipeIngredient.quantity,
      unit: recipeIngredient.unit
    }
  }

  private async findIngredientById(ingredientId: string): Promise<IngredientEntity> {
    const ingredient: IngredientEntity | null = await this.ingredientDAO.findById(ingredientId);
    if (!ingredient) {
      throw new NobarError(NobarErrorCode.BAD_REQUEST, NobarErrorMessage.NOT_FOUND_BASE);
    }
    return ingredient;
  }
};