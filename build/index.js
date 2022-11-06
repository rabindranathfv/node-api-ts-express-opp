"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const base_routes_1 = __importDefault(require("./routes/base.routes"));
const post_routes_1 = __importDefault(require("./routes/post.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const ticket_routes_1 = __importDefault(require("./routes/ticket.routes"));
const app = new app_1.default([new base_routes_1.default(), new user_routes_1.default(), new post_routes_1.default(), new ticket_routes_1.default()]);
app.listen();
//# sourceMappingURL=index.js.map