import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { HttpResponse } from '../../shared/response/http.response';
import { UserEntity } from '../../user/entities/user.entity';

export class AuthController extends AuthService {
  constructor(private readonly httpResponse: HttpResponse = new HttpResponse()) {
    super();
  }

  async login(req: Request, res: Response) {
    try {
      const userEncoded = req.user as UserEntity;
      const encode = await this.generateJwt(userEncoded);

      if (!encode) {
        return this.httpResponse.Unauthorized(res, 'Invalid permission');
      }

      res.header('Content-Type', 'application/json');
      res.cookie('accessToken', encode.accessToken, { maxAge: 6000 * 60 });
      res.write(JSON.stringify(encode));
      res.end();
    } catch (error) {
      console.log('🚀 ~ file: auth.controller.ts:13 ~ AuthController ~ login ~ error:', error);
      return this.httpResponse.Error(res, error);
    }
  }
}
