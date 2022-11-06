"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TicketSchema = new mongoose_1.Schema({
    nameEvent: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    typeEvent: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        requiered: true,
    },
});
TicketSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});
const TicketModel = (0, mongoose_1.model)('Ticket', TicketSchema);
exports.default = TicketModel;
//# sourceMappingURL=ticket.model.js.map