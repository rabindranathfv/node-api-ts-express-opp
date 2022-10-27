"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/**
 * @swagger
 *
 */
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
         *    summary: endpoint base
         *    response:
         *      200:
         *        description: endpoint base
         *        content:
         *          application/json:
         *            schema:
         *              type: object
         *              properties:
         *                ok:
         *                  type: boolean
         *                  description: describe if response was good or not
         *                message:
         *                  type: string
         *                  description: description message based on endpoint
         */
        this.router.get(`${this.path}`, (_req, res) => {
            res.status(200).json({ ok: true, message: `I AM API AND I AM ALIVE` });
        });
    }
}
exports.default = BaseRoute;
//# sourceMappingURL=base.routes.js.map