"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_1 = __importDefault(require("../controllers/users.controllers"));
class UserRoute {
    path = '/users';
    router = (0, express_1.Router)();
    userController = new users_controllers_1.default();
    constructor() {
        this.initUsersRoutes();
    }
    initUsersRoutes() {
        this.router.get(`${this.path}`, this.userController.getAllUsers);
    }
}
exports.default = UserRoute;
//# sourceMappingURL=user.routes.js.map