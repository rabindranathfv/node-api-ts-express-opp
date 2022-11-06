"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ticket_service_1 = __importDefault(require("../services/ticket.service"));
class TicketController {
    ticketService = new ticket_service_1.default();
    constructor() { }
    getAllTicketsCtrl = async (_req, res) => {
        const ticketResp = await this.ticketService.getAllTickets();
        res.json(ticketResp);
    };
    getTicketByIdCtrl = async (req, res) => {
        const ticketId = req.params.id;
        const ticketResp = await this.ticketService.getTicketById(ticketId);
        res.json(ticketResp);
    };
    createTicketCtrl = async (req, res) => {
        const ticketResp = await this.ticketService.createTicket(req.body);
        res.json(ticketResp);
    };
    deleteTicketByIdCtrl = async (req, res) => {
        const ticketId = req.params.id;
        const ticketResp = await this.ticketService.deleteTicketById(ticketId);
        res.json(ticketResp);
    };
    updateTicketCtrl = async (req, res) => {
        const ticketId = req.params.id;
        const ticketBody = req.body;
        const ticketResp = await this.ticketService.updateTicket(ticketId, ticketBody);
        res.json(ticketResp);
    };
}
exports.default = TicketController;
//# sourceMappingURL=ticket.controller.js.map