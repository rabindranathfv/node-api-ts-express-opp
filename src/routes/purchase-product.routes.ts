import { Router } from 'express';
import { Routes } from '../interfaces/route.interface';
import { PurchaseProductController } from '../purchase/purchase-product.controller';

class PurchaseProductRouter implements Routes {
  public path = '/purchaseProducts';
  public router = Router();
  public purchaseProductController = new PurchaseProductController();

  constructor() {
    this.initPurchaseProductRouters();
  }

  public initPurchaseProductRouters() {
    this.router.get(`${this.path}`, (req, res) => this.purchaseProductController.getPurchaseProducts(req, res));

    this.router.get(`${this.path}/:id`, (req, res) => this.purchaseProductController.getPurchaseProductById(req, res));

    this.router.post(`${this.path}`, (req, res) => this.purchaseProductController.createPurchaseProduct(req, res));

    this.router.put(`${this.path}/:id`, (req, res) => this.purchaseProductController.updatePurchaseProduct(req, res));

    this.router.delete(`${this.path}/:id`, (req, res) => this.purchaseProductController.deletePurchaseProduct(req, res));
  }
}

export default PurchaseProductRouter;
