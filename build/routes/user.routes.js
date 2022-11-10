"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_1 = __importDefault(require("../controllers/users.controllers"));
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
class UserRoute {
    path = '/users';
    router = (0, express_1.Router)();
    userController = new users_controllers_1.default();
    constructor() {
        this.initUsersRoutes();
    }
    initUsersRoutes() {
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
        this.router.get(`${this.path}/:id`, this.userController.findUserByIdCtrl);
        this.router.post(`${this.path}`, this.userController.createUserCtrl);
        this.router.put(`${this.path}/:id`, this.userController.updateUserCtrl);
        this.router.delete(`${this.path}/:id`, this.userController.deleteUserCtrl);
    }
}
exports.default = UserRoute;
//# sourceMappingURL=user.routes.js.map