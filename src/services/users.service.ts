import { HttpException } from '../exceptions/httpExceptions';
import { User } from '../interfaces/user.interface';
import UserModel from '../models/user.model';
import { users } from './../mock/users';

class UserService {
  public users = UserModel;
  constructor() {}

  public getAllUsers(): any[] {
    return users;
  }

  public async createUser(userData: any) {
    const { email } = userData;

    const findUser: User | null = await this.users.findOne({ email });
    if (findUser) throw new HttpException(409, `This email ${email} already exists`);

    const createUserData: User = await this.users.create({ ...userData });

    return createUserData;
  }
}

export default UserService;
