import { Router } from 'express';
import UserController from '../user/controllers/users.controllers';
import { BaseRouter } from '../shared/route/base.route';
import { UserDTO } from '../user/dto/user.dto';
import { ValidateMiddlewareDTO } from '../middlewares/validate-dto.middleware';

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: user's id
 *        first_name:
 *          type: string
 *          description: user's name
 *        last_name:
 *          type: string
 *          description: user's lastname
 *        gender:
 *          type: string
 *          description: can be Male or Female
 *        email:
 *          type: string
 *          description: user's email
 */

/**
 * @swagger
 *  tags:
 *    name: User
 *    description: User Endpoints
 */

class UserRoute extends BaseRouter<UserController, ValidateMiddlewareDTO> {
  public path = '/users';
  public router = Router();
  public userController = new UserController();

  constructor() {
    super(UserController, ValidateMiddlewareDTO);
    this.initUsersRoutes();
  }

  public initUsersRoutes() {
    /**
     * @swagger
     * /api/v1/users:
     *  get:
     *    summary: returns all users
     *    tags: [User]
     *    responses:
     *      200:
     *        description: returns all users
     *        content:
     *          application/json:
     *            schema:
     *              type: array
     *              items:
     *                $ref: '#/components/schemas/User'
     *              description: array of users
     */
    this.router.get(`${this.path}`, (req, res) => this.userController.getAllUsers(req, res));

    this.router.get(`${this.path}/:id`, (req, res) => this.userController.findUserByIdCtrl(req, res));

    this.router.post(
      `${this.path}`,
      (req, res, next) => [this.middleware.validator(req, res, next, UserDTO)],
      (req, res) => this.userController.createUserCtrl(req, res),
    );

    this.router.put(`${this.path}/:id`, (req, res) => this.userController.updateUserCtrl(req, res));

    this.router.delete(`${this.path}/:id`, (req, res) => this.userController.deleteUserCtrl(req, res));
  }
}

export default UserRoute;
