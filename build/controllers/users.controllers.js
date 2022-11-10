"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = __importDefault(require("../services/users.service"));
class UserController {
    userService = new users_service_1.default();
    constructor() { }
    getAllUsers = (_req, res) => {
        const usersRes = this.userService.getAllUsers();
        res.json(usersRes);
    };
    createUserCtrl = async (req, res) => {
        const usersRes = await this.userService.createUser(req.body);
        res.json(usersRes);
    };
    findUserByIdCtrl = async (req, res) => {
        const usersRes = await this.userService.findUserById(req.params.id);
        res.json(usersRes);
    };
    updateUserCtrl = async (req, res) => {
        const usersRes = await this.userService.updateUser(req.params.id, req.body);
        res.json(usersRes);
    };
    deleteUserCtrl = async (req, res) => {
        const usersRes = await this.userService.deleteUser(req.params.id);
        res.json(usersRes);
    };
}
exports.default = UserController;
//# sourceMappingURL=users.controllers.js.map