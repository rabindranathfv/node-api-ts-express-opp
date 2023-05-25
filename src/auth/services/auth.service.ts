/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { JWT_SECRET } from '../../config/config';
import UserService from '../../user/service/users.service';
import * as jwt from 'jsonwebtoken';
import { UserEntity } from '../../user/entities/user.entity';
import { isValidPassword } from '../../utils/hash';
import { PayloadToken } from './interface/auth.interface';

export class AuthService {
  constructor(private readonly userService: UserService = new UserService(), private readonly jwtInstance = jwt) {}

  /**
   * validateUser
   */
  public async validateUser(username: string, password: string): Promise<UserEntity | null> {
    const userByEmail = await this.userService.findUserByEmail(username);
    console.log('🚀 ~ file: auth.service.ts:17 ~ AuthService ~ validateUser ~ userByEmail:', userByEmail);
    // const userByUserName = await this.userService.findUserByUsername(username);
    // console.log('🚀 ~ file: auth.service.ts:18 ~ AuthService ~ validateUser ~ userByUserName:', userByUserName);

    if (userByEmail && (await isValidPassword(password, userByEmail.password))) {
      return userByEmail;
    }

    return null;
  }

  /**
   * signature
   */
  public signature(payload: jwt.JwtPayload, secret: any) {
    return this.jwtInstance.sign(payload, secret);
  }

  /**
   * generateJwt
   */
  public async generateJwt(user: UserEntity): Promise<{ accessToken: string; user: UserEntity | null }> {
    const userCheck = await this.userService.findUserWithRol(user.id, user.role);

    const payload: PayloadToken = {
      role: userCheck!.role,
      sub: userCheck!.id,
    };

    if (userCheck) {
      user.password = 'Not permission';
    }

    return {
      accessToken: this.signature(payload, JWT_SECRET),
      user: userCheck,
    };
  }
}
