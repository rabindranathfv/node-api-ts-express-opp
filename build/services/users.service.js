"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./../mock/users");
class UserService {
    constructor() { }
    getAllUsers() {
        console.log('llamando desde el UserServices*********');
        return users_1.users;
    }
}
exports.default = UserService;
//# sourceMappingURL=users.service.js.map