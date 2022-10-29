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
        /**
         * @swagger
         * /api/v1/alive:
         *  get:
         *    summary: check if API is running
         *    responses:
         *      200:
         *        description: check if API is running
         *        content:
         *          application/json:
         *            schema:
         *              type: object
         *              properties:
         *                ok:
         *                  type: boolean
         *                  description: explain if the responses goings well or not
         *                message:
         *                  type: string
         *                  description: explain message if register process was sucess or not
         */
        this.router.get(`${this.path}`, (_req, res) => {
            res.status(200).json({ ok: true, message: `I AM API AND I AM ALIVE` });
        });
    }
}
exports.default = BaseRoute;
//# sourceMappingURL=base.routes.js.map