import { Router } from 'express';
import { AuthController } from '../auth/controller/auth.controller';
import { SharedMiddleware } from '../shared/mdw/shared.middleware';
import { BaseRouter } from '../shared/route/base.route';

export class AuthRoutes extends BaseRouter<AuthController, SharedMiddleware> {
  public router = Router();
  public authController = new AuthController();
  constructor() {
    super(AuthController, SharedMiddleware);
    this.initAuthRoutes();
  }

  public initAuthRoutes() {
    this.router.post(`/login`, this.middleware.passAuth('login'), (req, res) => this.authController.login(req, res));
  }
}

export default AuthRoutes;
