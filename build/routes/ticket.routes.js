"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ticket_controller_1 = __importDefault(require("../controllers/ticket.controller"));
const ticketValidator_middleware_1 = require("../middlewares/ticketValidator.middleware");
// TODO: FIX THIS DOCUMENTATION
/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: user's id
 *        first_name:
 *          type: string
 *          description: user's name
 *        last_name:
 *          type: string
 *          description: user's lastname
 *        gender:
 *          type: string
 *          description: can be Male or Female
 *        email:
 *          type: string
 *          description: user's email
 */
/**
 * @swagger
 *  tags:
 *    name: Ticket
 *    description: Tickets Endpoints
 */
class TicketRoute {
    path = '/ticket';
    router = (0, express_1.Router)();
    ticketController = new ticket_controller_1.default();
    constructor() {
        this.initUsersRoutes();
    }
    initUsersRoutes() {
        this.router.get(`${this.path}`, this.ticketController.getAllTicketsCtrl);
        this.router.get(`${this.path}/:id`, this.ticketController.getTicketByIdCtrl);
        this.router.post(`${this.path}`, ticketValidator_middleware_1.ticketValidator, this.ticketController.createTicketCtrl);
        this.router.delete(`${this.path}/:id`, this.ticketController.deleteTicketByIdCtrl);
        this.router.put(`${this.path}/:id`, this.ticketController.updateTicketCtrl);
    }
}
exports.default = TicketRoute;
//# sourceMappingURL=ticket.routes.js.map