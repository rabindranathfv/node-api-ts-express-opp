import { Request, Response } from 'express';
import { Ticket } from '../interfaces/ticket.interface';
import TicketService from '../services/ticket.service';

class TicketController {
  public ticketService = new TicketService();

  constructor() {}

  public getAllTicketsCtrl = async (_req: Request, res: Response) => {
    const ticketResp: Ticket[] = await this.ticketService.getAllTickets();
    res.json(ticketResp);
  };

  public getTicketByIdCtrl = async (req: Request, res: Response) => {
    const ticketId = req.params.id;
    const ticketResp: Ticket | null = await this.ticketService.getTicketById(ticketId);
    res.json(ticketResp);
  };

  public createTicketCtrl = async (req: Request, res: Response) => {
    const ticketResp = await this.ticketService.createTicket(req.body);
    res.json(ticketResp);
  };

  public deleteTicketByIdCtrl = async (req: Request, res: Response) => {
    const ticketId = req.params.id;
    const ticketResp: Ticket | null = await this.ticketService.deleteTicketById(ticketId);
    res.json(ticketResp);
  };

  public updateTicketCtrl = async (req: Request, res: Response) => {
    const ticketId = req.params.id;
    const ticketBody = req.body;
    const ticketResp: Ticket | null = await this.ticketService.updateTicket(ticketId, ticketBody);
    res.json(ticketResp);
  };
}

export default TicketController;
