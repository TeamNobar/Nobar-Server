import { Document, Model } from "mongoose";
import CreateUserParam     from "../dto/user/CreateUserParam";
import UserEntity          from "../model/user/entity/UserEntity";
import User                from "../model/user/User";

export default class AuthService {
  constructor(
    private readonly userDAO: Model<User & Document>
  ) {
  }

  public async authUser(userParam: CreateUserParam): Promise<UserEntity> {
    const user: UserEntity | null = this.userDAO.findOne({nickname: userParam.nickname});
    if (!user) {
      return await this.addUser(userParam);
    } else {
      return user
    }
  }

  private async findOneUser(nickName: string) {
    return this.userDAO.find
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