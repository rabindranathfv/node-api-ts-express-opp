import { Request, Response } from 'express';
import UserService from './../services/users.service';

class UserController {
  public userService = new UserService();

  constructor() {}

  public getAllUsers = (_req: Request, res: Response) => {
    const usersRes = this.userService.getAllUsers();
    res.send(usersRes);
  };

  public createUserCtrl = async (req: Request, res: Response) => {
    console.log('BODY==========', req.body);
    const usersRes = await this.userService.createUser(req.body);
    console.log('🚀 ~ file: users.controllers.ts ~ line 17 ~ UserController ~ usersRes', usersRes);
    res.send(usersRes);
  };
}

export default UserController;
