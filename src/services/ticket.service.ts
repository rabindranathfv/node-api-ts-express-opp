import { Ticket } from '../interfaces/ticket.interface';
import TicketModel from '../models/ticket.model';

class TicketService {
  public ticket = TicketModel;
  constructor() {}

  public async getAllTickets(): Promise<Ticket[]> {
    const allTickets: Ticket[] = await this.ticket.find();
    return allTickets;
  }

  public async getTicketById(ticketId: string): Promise<Ticket | null> {
    const ticketById: Ticket | null = await this.ticket.findById({ _id: ticketId });
    return ticketById;
  }

  public async createTicket(ticketData: any): Promise<Ticket> {
    const newTicket: Ticket | null = await this.ticket.create({ ...ticketData });
    return newTicket;
  }

  public async deleteTicketById(ticketId: string): Promise<Ticket | null> {
    const deletedTicket: Ticket | null = await this.ticket.findByIdAndDelete({ _id: ticketId });
    return deletedTicket;
  }

  public async updateTicket(ticketId: string, ticketData: any): Promise<Ticket | null> {
    const ticketById: Ticket | null = await this.ticket.findById({ _id: ticketId });
    if (!ticketById) return ticketById;

    const { nameEvent, description, typeEvent, owner, email, price } = ticketData;

    const updatedTicketBody: Partial<Ticket> = {
      ...(nameEvent && { nameEvent }),
      ...(description && { description }),
      ...(typeEvent && { typeEvent }),
      ...(price && price > 0 && { price }),
      ...(owner && { owner }),
      ...(email && { email }),
    };

    const updatedTicket: Ticket | null = await this.ticket.findByIdAndUpdate({ _id: ticketId }, updatedTicketBody, { new: true });
    return updatedTicket;
  }
}

export default TicketService;
