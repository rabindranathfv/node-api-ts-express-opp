"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = __importDefault(require("./../services/users.service"));
class UserController {
    userService = new users_service_1.default();
    constructor() { }
    getAllUsers = (_req, res) => {
        const usersRes = this.userService.getAllUsers();
        res.send(usersRes);
    };
}
exports.default = UserController;
//# sourceMappingURL=users.controllers.js.map