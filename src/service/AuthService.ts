import { Model }  from "mongoose";
import UserEntity from "../model/user/entity/UserEntity";
import User       from "../model/user/User";
import userDAO    from "../model/user/UserDAO";

export default class AuthService {
  constructor(
    private readonly userDAO: Model<User & Document>
  ) {
  }

  public async createUser(userNickName: string) {
    const user: UserEntity | null = this.userDAO.findOne({nickname: userNickName});
    if (!user) {

    }
  }
};