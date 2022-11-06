import { Router } from 'express';
import { Routes } from '../interfaces/route.interface';
import TicketController from '../controllers/ticket.controller';

import { ticketValidator } from '../middlewares/ticketValidator.middleware';

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

class TicketRoute implements Routes {
  public path = '/ticket';
  public router = Router();
  public ticketController = new TicketController();

  constructor() {
    this.initUsersRoutes();
  }

  public initUsersRoutes() {
    this.router.get(`${this.path}`, this.ticketController.getAllTicketsCtrl);

    this.router.get(`${this.path}/:id`, this.ticketController.getTicketByIdCtrl);

    this.router.post(`${this.path}`, ticketValidator, this.ticketController.createTicketCtrl);

    this.router.delete(`${this.path}/:id`, this.ticketController.deleteTicketByIdCtrl);

    this.router.put(`${this.path}/:id`, this.ticketController.updateTicketCtrl);
  }
}

export default TicketRoute;
