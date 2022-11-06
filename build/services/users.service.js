"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpExceptions_1 = require("../exceptions/httpExceptions");
const user_model_1 = __importDefault(require("../models/user.model"));
const users_1 = require("./../mock/users");
class UserService {
    users = user_model_1.default;
    constructor() { }
    getAllUsers() {
        return users_1.users;
    }
    async createUser(userData) {
        const { email } = userData;
        const findUser = await this.users.findOne({ email });
        if (findUser)
            throw new httpExceptions_1.HttpException(409, `This email ${email} already exists`);
        const createUserData = await this.users.create({ ...userData });
        return createUserData;
    }
}
exports.default = UserService;
//# sourceMappingURL=users.service.js.map