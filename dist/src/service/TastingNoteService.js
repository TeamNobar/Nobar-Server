"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NobarError_1 = __importDefault(require("../error/NobarError"));
const NobarErrorCode_1 = require("../error/NobarErrorCode");
const NobarErrorMessage_1 = __importDefault(require("../error/NobarErrorMessage"));
const RecipeMapper_1 = __importDefault(require("../model/recipe/mapper/RecipeMapper"));
const TastingNoteMapper_1 = __importDefault(require("../model/tastingNote/mapper/TastingNoteMapper"));
const TastingTagMapper_1 = __importDefault(require("../model/tastingNote/mapper/TastingTagMapper"));
const TastingNoteTag_1 = require("../model/tastingNote/TastingNoteTag");
class TastingNoteService {
    constructor(userDAO, tastingNoteDAO, recipeDAO, baseDAO, ingredientDAO) {
        this.userDAO = userDAO;
        this.tastingNoteDAO = tastingNoteDAO;
        this.recipeDAO = recipeDAO;
        this.baseDAO = baseDAO;
        this.ingredientDAO = ingredientDAO;
    }
    getAllTag() {
        return TastingNoteTag_1.TastingNoteTag.getAllTags().map((value) => TastingTagMapper_1.default.toTagDTO(value, false));
    }
    getTastingNotes(tastingNoteIds) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(tastingNoteIds.map((value) => __awaiter(this, void 0, void 0, function* () { return yield this.getTastingNote(value); })));
        });
    }
    getTastingNote(tastingNoteId) {
        return __awaiter(this, void 0, void 0, function* () {
            const tastingNote = yield this.findTastingNote(tastingNoteId);
            const recipe = yield this.findRecipeById(tastingNote.recipe.valueOf().toString());
            const base = yield this.findBaseById(recipe.base.valueOf().toString());
            const embededIngredient = yield this.embedAllIngredient(recipe.ingredients);
            const recipeDTO = RecipeMapper_1.default.toRecipeDTO(recipe, base, embededIngredient);
            return TastingNoteMapper_1.default.toNoteDTO(tastingNote, recipeDTO);
        });
    }
    postTastingNote(userId, tastingNote) {
        return __awaiter(this, void 0, void 0, function* () {
            const note = yield this.saveTastingNote(tastingNote);
            yield this.saveUserTastingNote(userId, note._id);
            return yield this.getTastingNote(note._id.valueOf().toString());
        });
    }
    saveUserTastingNote(userId, tastingNoteId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userDAO.findByIdAndUpdate(userId, { $push: { tastingNotes: tastingNoteId } })
                .exec();
        });
    }
    saveTastingNote(noteParam) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipe = yield this.findRecipeById(noteParam.recipeId);
            const note = {
                rate: noteParam.rate,
                recipe: recipe._id,
                tastingTags: this.mappingTagForSave(noteParam.tagList),
                tasteContent: noteParam.tasteContent,
                experienceContent: noteParam.experienceContent,
                createdAt: noteParam.createdAt
            };
            return yield this.tastingNoteDAO.create(note);
        });
    }
    mappingTagForSave(tagList) {
        const tastingTag = [];
        tagList.forEach(value => {
            if (value.isSelected) {
                tastingTag.push(value.id);
            }
        });
        return tastingTag;
    }
    findTastingNote(tastingNoteId) {
        return __awaiter(this, void 0, void 0, function* () {
            const tastingNote = yield this.tastingNoteDAO.findById(tastingNoteId);
            if (!tastingNote) {
                throw new NobarError_1.default(NobarErrorCode_1.NobarErrorCode.BAD_REQUEST, NobarErrorMessage_1.default.NOT_FOUND_TASTING_NOTE);
            }
            return tastingNote;
        });
    }
    findRecipeById(recipeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipe = yield this.recipeDAO.findById(recipeId);
            if (!recipe) {
                throw new NobarError_1.default(NobarErrorCode_1.NobarErrorCode.BAD_REQUEST, NobarErrorMessage_1.default.NOT_FOUND_RECIPE);
            }
            return recipe;
        });
    }
    findBaseById(baseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield this.baseDAO.findById(baseId);
            if (!base) {
                throw new NobarError_1.default(NobarErrorCode_1.NobarErrorCode.BAD_REQUEST, NobarErrorMessage_1.default.NOT_FOUND_BASE);
            }
            return base;
        });
    }
    embedAllIngredient(ingredients) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(ingredients.map((value) => __awaiter(this, void 0, void 0, function* () { return yield this.embedIngredient(value); })));
        });
    }
    embedIngredient(recipeIngredient) {
        return __awaiter(this, void 0, void 0, function* () {
            const ingredient = yield this.findIngredientById(recipeIngredient.ingredient.valueOf().toString());
            return {
                ingredient: ingredient,
                quantity: recipeIngredient.quantity,
                unit: recipeIngredient.unit
            };
        });
    }
    findIngredientById(ingredientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const ingredient = yield this.ingredientDAO.findById(ingredientId);
            if (!ingredient) {
                throw new NobarError_1.default(NobarErrorCode_1.NobarErrorCode.BAD_REQUEST, NobarErrorMessage_1.default.NOT_FOUND_BASE);
            }
            return ingredient;
        });
    }
}
exports.default = TastingNoteService;
;
//# sourceMappingURL=TastingNoteService.js.map