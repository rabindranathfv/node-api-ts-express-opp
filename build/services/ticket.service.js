"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ticket_model_1 = __importDefault(require("../models/ticket.model"));
class TicketService {
    ticket = ticket_model_1.default;
    constructor() { }
    async getAllTickets() {
        const allTickets = await this.ticket.find();
        return allTickets;
    }
    async getTicketById(ticketId) {
        const ticketById = await this.ticket.findById({ _id: ticketId });
        return ticketById;
    }
    async createTicket(ticketData) {
        const newTicket = await this.ticket.create({ ...ticketData });
        return newTicket;
    }
    async deleteTicketById(ticketId) {
        const deletedTicket = await this.ticket.findByIdAndDelete({ _id: ticketId });
        return deletedTicket;
    }
    async updateTicket(ticketId, ticketData) {
        const ticketById = await this.ticket.findById({ _id: ticketId });
        if (!ticketById)
            return ticketById;
        const { nameEvent, description, typeEvent, owner, email, price } = ticketData;
        const updatedTicketBody = {
            ...(nameEvent && { nameEvent }),
            ...(description && { description }),
            ...(typeEvent && { typeEvent }),
            ...(price && price > 0 && { price }),
            ...(owner && { owner }),
            ...(email && { email }),
        };
        const updatedTicket = await this.ticket.findByIdAndUpdate({ _id: ticketId }, updatedTicketBody, { new: true });
        return updatedTicket;
    }
}
exports.default = TicketService;
//# sourceMappingURL=ticket.service.js.map