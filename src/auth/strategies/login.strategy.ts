import { UserEntity } from '../../user/entities/user.entity';
import { PassportUse } from '../../utils/passport.use';
import { AuthService } from '../services/auth.service';
import { Strategy as LocalStrategy, VerifyFunction } from 'passport-local';

const authService: AuthService = new AuthService();

export class LoginStrategy {
  /**
   * validate
   */
  public async validate(username: string, password: string, done: any): Promise<UserEntity> {
    const user = await authService.validateUser(username, password);
    console.log('🚀 ~ file: login.strategy.ts:14 ~ LoginStrategy ~ validate ~ user:', user);

    if (!user) {
      return done(null, false, { message: `invalid username or password` });
    }

    return done(null, user);
  }

  get use() {
    return PassportUse<LocalStrategy, Object, VerifyFunction>(
      'login',
      LocalStrategy,
      { usernameField: 'email', passwordField: 'password' },
      this.validate,
    );
  }
}
