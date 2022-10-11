"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class BaseRoute {
    path = '/alive';
    router = (0, express_1.Router)();
    constructor() {
        this.initBaseRoutes();
    }
    initBaseRoutes() {
        this.router.get(`${this.path}`, () => {
            console.log('I AM API AND I AM ALIVE***');
        });
    }
}
exports.default = BaseRoute;
