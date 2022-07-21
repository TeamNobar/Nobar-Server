import { Document, Model } from "mongoose";
import CreateUserParam     from "../dto/user/CreateUserParam";
import UserEntity          from "../model/user/entity/UserEntity";
import User                from "../model/user/User";

export default class AuthService {
  constructor(
    private readonly userDAO: Model<User & Document>
  ) {
  }

  public async authUser(userParam: CreateUserParam): Promise<string> {
    const user: UserEntity | null = await this.findOneUser(userParam.nickname);
    if (!user) {
      const createdUser = await this.addUser(userParam);
      return createdUser._id.valueOf().toString()
    } else {
      return user._id.valueOf().toString()
    }
  }

  private async findOneUser(nickname: string) {
    return this.userDAO.findOne({nickname: nickname});
  }

  private async addUser(userParam: CreateUserParam): Promise<UserEntity & Document> {
    const user: User = {
      nickname: userParam.nickname,
      tastingNotes: [],
      laterRecipe: [],
      snsAuthToken: "",
      deviceToken: ""
    }
    return await this.userDAO.create(user);
  }
};