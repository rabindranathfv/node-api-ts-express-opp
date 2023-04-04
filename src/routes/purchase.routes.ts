import { Router } from 'express';
import { PurchaseController } from '../purchase/controllers/purchase.controller';
import { BaseRouter } from '../shared/route/base.route';
import { PurchaseDTO } from '../purchase/dto/purchase.dto';
import { ValidateMiddlewareDTO } from '../middlewares/validate-dto.middleware';

class PurchaseRoute extends BaseRouter<PurchaseController, ValidateMiddlewareDTO> {
  public path = '/purchase';
  public router = Router();
  public purchaseController = new PurchaseController();

  constructor() {
    super(PurchaseController, ValidateMiddlewareDTO);
    this.initPurchaseRoutes();
  }

  public initPurchaseRoutes() {
    this.router.get(`${this.path}`, (req, res) => this.purchaseController.getPurchases(req, res));

    this.router.get(`${this.path}/:id`, (req, res) => this.purchaseController.getPurchaseById(req, res));

    this.router.post(
      `${this.path}`,
      (req, res, next) => [this.middleware.validator(req, res, next, PurchaseDTO)],
      (req, res) => this.purchaseController.createPurchase(req, res),
    );

    this.router.put(`${this.path}/:id`, (req, res) => this.purchaseController.updatePurchase(req, res));

    this.router.delete(`${this.path}/:id`, (req, res) => this.purchaseController.deletePurchase(req, res));
  }
}

export default PurchaseRoute;
