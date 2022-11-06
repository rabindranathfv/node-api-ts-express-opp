import { Router } from 'express';
import UserController from '../controllers/users.controllers';
import { Routes } from '../interfaces/route.interface';

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

class UserRoute implements Routes {
  public path = '/users';
  public router = Router();
  public userController = new UserController();

  constructor() {
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
    this.router.get(`${this.path}`, this.userController.getAllUsers);

    this.router.post(`${this.path}`, this.userController.createUserCtrl);
  }
}

export default UserRoute;
