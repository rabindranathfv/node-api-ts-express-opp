import { Router } from 'express';
import UserController from '../controllers/users.controllers';
import { Routes } from '../interfaces/route.interface';

class UserRoute implements Routes {
  public path = '/users';
  public router = Router();
  public userController = new UserController();

  constructor() {
    this.initUsersRoutes();
  }

  public initUsersRoutes() {
    this.router.get(`${this.path}`, this.userController.getAllUsers);
  }
}

export default UserRoute;
