import { Router } from 'express';
import { Routes } from '../interfaces/route.interface';

class BaseRoute implements Routes {
  public path = '/alive';
  public router = Router();

  constructor() {
    this.initBaseRoutes();
  }

  public initBaseRoutes() {
    this.router.get(`${this.path}`, () => {
      console.log('I AM API AND I AM ALIVE***');
    });
  }
}

export default BaseRoute;
