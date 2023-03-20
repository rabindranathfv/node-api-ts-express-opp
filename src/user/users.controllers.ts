import { Request, Response } from 'express';
import UserService from './users.service';

class UserController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private readonly userService: UserService = new UserService()) {}

  public getAllUsers = async (_req: Request, res: Response) => {
    const usersRes = await this.userService.getAllUsers();
    res.json(usersRes);
  };

  public createUserCtrl = async (req: Request, res: Response) => {
    const usersRes = await this.userService.createUser(req.body);
    res.json(usersRes);
  };

  public findUserByIdCtrl = async (req: Request, res: Response) => {
    const usersRes = await this.userService.findUserById(req.params.id);
    res.json(usersRes);
  };

  public updateUserCtrl = async (req: Request, res: Response) => {
    const usersRes = await this.userService.updateUser(req.params.id, req.body);
    res.json(usersRes);
  };

  public deleteUserCtrl = async (req: Request, res: Response) => {
    const usersRes = await this.userService.deleteUser(req.params.id);
    res.json(usersRes);
  };
}

export default UserController;
