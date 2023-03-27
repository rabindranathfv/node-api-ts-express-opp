import { Router } from 'express';
import { Routes } from '../interfaces/route.interface';
import { PurchaseController } from '../purchase/purchase.controller';

class PurchaseRoute implements Routes {
  public path = '/purchase';
  public router = Router();
  public purchaseController = new PurchaseController();

  constructor() {
    this.initPurchaseRoutes();
  }

  public initPurchaseRoutes() {
    this.router.get(`${this.path}`, (req, res) => this.purchaseController.getPurchases(req, res));

    this.router.get(`${this.path}/:id`, (req, res) => this.purchaseController.getPurchaseById(req, res));

    this.router.post(`${this.path}`, (req, res) => this.purchaseController.createPurchase(req, res));

    this.router.put(`${this.path}/:id`, (req, res) => this.purchaseController.updatePurchase(req, res));

    this.router.delete(`${this.path}/:id`, (req, res) => this.purchaseController.deletePurchase(req, res));
  }
}

export default PurchaseRoute;
