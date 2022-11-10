"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpExceptions_1 = require("../exceptions/httpExceptions");
const user_entity_1 = require("../entities/user.entity");
const base_service_1 = require("../config/base.service");
class UserService extends base_service_1.BaseService {
    constructor() {
        super(user_entity_1.UserEntity);
    }
    async getAllUsers() {
        return await (await this.execRepository).find();
    }
    async findUserById(userId) {
        const findUser = (await this.execRepository).findOneBy({ id: userId });
        if (!findUser)
            throw new httpExceptions_1.HttpException(409, "User doesn't exist");
        return findUser;
    }
    async createUser(userData) {
        const newUser = (await this.execRepository).create(userData);
        return (await this.execRepository).save(newUser);
    }
    async updateUser(userId, userData) {
        const findUser = (await this.execRepository).findOne({ where: { id: userId } });
        if (!findUser)
            throw new httpExceptions_1.HttpException(409, "User doesn't exist");
        (await this.execRepository).update(userId, { ...userData });
        const updateUser = (await this.execRepository).findOne({ where: { id: userId } });
        return updateUser;
    }
    async deleteUser(userId) {
        const findUser = (await this.execRepository).findOne({ where: { id: userId } });
        if (!findUser)
            throw new httpExceptions_1.HttpException(409, "User doesn't exist");
        (await this.execRepository).delete({ id: userId });
        return findUser;
    }
}
exports.default = UserService;
//# sourceMappingURL=users.service.js.map