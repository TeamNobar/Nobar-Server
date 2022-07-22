"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserMapper {
    static toUserDTO(user) {
        return {
            id: user._id.valueOf().toString(),
            nickname: user.nickname,
            tastingNotes: this.changeTastingNotesId(user.tastingNotes),
            laterRecipes: this.changeLaterRecipesId(user.laterRecipe),
        };
    }
    static changeTastingNotesId(ids) {
        return ids.map(value => value.valueOf().toString());
    }
    static changeLaterRecipesId(ids) {
        return ids.map(value => value.valueOf().toString());
    }
}
exports.default = UserMapper;
;
//# sourceMappingURL=UserMapper.js.map