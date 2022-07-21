import mongoose   from "mongoose";
import UserDTO    from "../../../dto/user/UserDTO";
import UserEntity from "../entity/UserEntity";

export default class UserMapper {
  public static toUserDTO(user: UserEntity): UserDTO {
    return <UserDTO> {
      id: user._id.valueOf().toString(),
      nickname: user.nickname,
      tastingNotes: this.changeTastingNotesId(user.tastingNotes),
      laterRecipes: this.changeLaterRecipesId(user.laterRecipe),
    }
  }

  private static changeTastingNotesId(ids: mongoose.Schema.Types.ObjectId[]): string[] {
    return ids.map(value => value.valueOf().toString())
  }

  private static changeLaterRecipesId(ids: mongoose.Schema.Types.ObjectId[]): string[] {
    return ids.map(value => value.valueOf().toString())
  }
};