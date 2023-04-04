import { HttpException } from '../../exceptions/httpExceptions';

import { UserEntity } from '../entities/user.entity';
import { BaseService } from '../../config/base.service';
import { UserDTO } from '../dto/user.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

class UserService extends BaseService<UserEntity> {
  constructor() {
    super(UserEntity);
  }

  public async getAllUsers(): Promise<UserEntity[]> {
    const users = await (await this.execRepository).find();
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

  public async updateUser(userId: string, userData: UserDTO): Promise<UpdateResult> {
    const findUser = (await this.execRepository).findOne({ where: { id: userId } });
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return (await this.execRepository).update(userId, { ...userData });
  }

  public async deleteUser(userId: string): Promise<DeleteResult> {
    const findUser = (await this.execRepository).findOne({ where: { id: userId } });
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return (await this.execRepository).delete({ id: userId });
  }
}

export default UserService;
