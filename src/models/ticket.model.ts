import { Schema, model, Document } from 'mongoose';
import { Ticket } from '../interfaces/ticket.interface';

const TicketSchema = new Schema<Ticket>({
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

const TicketModel = model<Ticket & Document>('Ticket', TicketSchema);

export default TicketModel;
