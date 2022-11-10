import { HttpException } from '../exceptions/httpExceptions';

import { UserEntity } from '../entities/user.entity';
import { BaseService } from '../config/base.service';
import { UserDTO } from '../config/dto/user.dto';

class UserService extends BaseService<UserEntity> {
  constructor() {
    super(UserEntity);
  }

  public async getAllUsers(): Promise<UserEntity[]> {
    const users = await (await this.execRepository).find();
    // console.log('🚀 ~ file: users.service.ts ~ line 14 ~ UserService ~ getAllUsers ~ users', users);
    return users;
  }

  public async findUserById(userId: string): Promise<UserEntity | null> {
    const findUser = (await this.execRepository).findOneBy({ id: userId });
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  public async createUser(userData: UserDTO): Promise<UserEntity | null> {
    const newUser = (await this.execRepository).create(userData);
    return (await this.execRepository).save(newUser);
  }

  public async updateUser(userId: string, userData: UserDTO): Promise<UserEntity | null> {
    const findUser = (await this.execRepository).findOne({ where: { id: userId } });
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    (await this.execRepository).update(userId, { ...userData });

    const updateUser = (await this.execRepository).findOne({ where: { id: userId } });
    return updateUser;
  }

  public async deleteUser(userId: string): Promise<UserEntity | null> {
    const findUser = (await this.execRepository).findOne({ where: { id: userId } });
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    (await this.execRepository).delete({ id: userId });
    return findUser;
  }
}

export default UserService;
