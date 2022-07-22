import { Document, Model } from "mongoose";
import getToken            from "../auth/jwtHandler";
import CreateUserParam     from "../dto/user/CreateUserParam";
import UserDTO             from "../dto/user/UserDTO";
import NobarError          from "../error/NobarError";
import { NobarErrorCode }  from "../error/NobarErrorCode";
import NobarErrorMessage   from "../error/NobarErrorMessage";
import UserEntity          from "../model/user/entity/UserEntity";
import UserMapper          from "../model/user/mapper/UserMapper";
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
      return createdUser.token
    } else {
      return user.token
    }
  }

  public async getUser(userId: string): Promise<UserDTO> {
    const user: UserEntity | null = await this.findOneUser(userId);
    if (!user) {
      throw new NobarError(NobarErrorCode.BAD_REQUEST, NobarErrorMessage.NOT_FOUND_USER);
    }
    return UserMapper.toUserDTO(user);
  }

  public async findUser(userId: string) {
    const user: UserEntity | null = await this.userDAO.findById(userId);
    if (!user) {
      throw new NobarError(NobarErrorCode.BAD_REQUEST, NobarErrorMessage.NOT_FOUND_USER);
    }
    return UserMapper.toUserDTO(user);
  }

  private async findOneUser(nickname: string) {
    return this.userDAO.findOne({nickname: nickname});
  }

  private async addUser(userParam: CreateUserParam): Promise<UserEntity> {
    const user: User = {
      nickname: userParam.nickname,
      tastingNotes: [],
      laterRecipe: [],
      snsAuthToken: "",
      deviceToken: "",
      token: ""
    }
    const createdUser: UserEntity = await this.userDAO.create(user);
    const token = getToken(createdUser._id.valueOf().toString());
    const hasTokenUser: UserEntity | null = await this.userDAO.findByIdAndUpdate(createdUser._id, {token: token});
    if (!hasTokenUser) {
      throw Error("방금 만든 유저가 사라진 이슈;;");
    }
    return hasTokenUser
  }
};