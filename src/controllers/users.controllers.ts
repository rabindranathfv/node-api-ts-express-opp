import { Request, Response } from 'express';
import UserService from './../services/users.service';

class UserController {
  public userService = new UserService();

  constructor() {}

  public getAllUsers = (_req: Request, res: Response) => {
    const usersRes = this.userService.getAllUsers();
    res.send(usersRes);
  }
}

export default UserController;