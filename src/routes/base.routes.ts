import { Router, Request, Response } from 'express';
import { Routes } from '../interfaces/route.interface';

class BaseRoute implements Routes {
  public path = '/alive';
  public router = Router();

  constructor() {
    this.initBaseRoutes();
  }

  public initBaseRoutes() {
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
    this.router.get(`${this.path}`, (_req: Request, res: Response) => {
      res.status(200).json({ ok: true, message: `I AM API AND I AM ALIVE` });
    });
  }
}

export default BaseRoute;
