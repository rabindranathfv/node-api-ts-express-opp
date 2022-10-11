"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    app;
    env;
    port;
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.port = 3000;
        this.env = 'development';
        this.initRoutes(routes);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`API is runing in PORT: ${this.port}`);
        });
    }
    getServer() {
        return this.app;
    }
    initRoutes(routes) {
        routes.forEach((route) => {
            this.app.use('/', route.router);
        });
    }
}
exports.default = App;
