"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        requiered: true,
    },
    email: {
        type: String,
        requiered: true,
        unique: true,
    },
    password: {
        type: String,
        requiered: true,
    },
});
UserSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});
const UserModel = (0, mongoose_1.model)('User', UserSchema);
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map