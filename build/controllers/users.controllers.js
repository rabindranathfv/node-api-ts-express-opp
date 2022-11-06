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
    createUserCtrl = async (req, res) => {
        console.log('BODY==========', req.body);
        const usersRes = await this.userService.createUser(req.body);
        console.log('🚀 ~ file: users.controllers.ts ~ line 17 ~ UserController ~ usersRes', usersRes);
        res.send(usersRes);
    };
}
exports.default = UserController;
//# sourceMappingURL=users.controllers.js.map