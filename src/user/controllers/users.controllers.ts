import { Request, Response } from 'express';
import { HttpResponse } from '../../shared/response/http.response';
import UserService from '../service/users.service';
import { UpdateResult, DeleteResult } from 'typeorm';

class UserController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private readonly userService: UserService = new UserService(), private readonly httpResponse: HttpResponse = new HttpResponse()) {}

  public getAllUsers = async (_req: Request, res: Response) => {
    try {
      const usersRes = await this.userService.getAllUsers();
      return this.httpResponse.OK(res, usersRes);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  };

  public createUserCtrl = async (req: Request, res: Response) => {
    try {
      const usersRes = await this.userService.createUser(req.body);
      return this.httpResponse.OK(res, usersRes);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  };

  public findUserByIdCtrl = async (req: Request, res: Response) => {
    try {
      const usersRes = await this.userService.findUserById(req.params.id);
      if (!usersRes) {
        return this.httpResponse.NotFound(res, 'user does not exist');
      }
      return this.httpResponse.OK(res, usersRes);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  };

  public findUserByIdWithRelCtrl = async (req: Request, res: Response) => {
    try {
      const usersRes = await this.userService.findUserByIdwithRelation(req.params.id);
      if (!usersRes) {
        return this.httpResponse.NotFound(res, 'user does not exist');
      }
      return this.httpResponse.OK(res, usersRes);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  };

  public updateUserCtrl = async (req: Request, res: Response) => {
    try {
      const usersRes: UpdateResult = await this.userService.updateUser(req.params.id, req.body);
      if (!usersRes.affected) {
        return this.httpResponse.NotFound(res, 'can not update successfully');
      }
      return this.httpResponse.OK(res, usersRes);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  };

  public deleteUserCtrl = async (req: Request, res: Response) => {
    try {
      const usersRes: DeleteResult = await this.userService.deleteUser(req.params.id);
      if (!usersRes.affected) {
        return this.httpResponse.NotFound(res, 'can not delete successfully');
      }
      return this.httpResponse.OK(res, usersRes);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  };
}

export default UserController;
