import { Router } from 'express';
import { PurchaseProductController } from '../purchase/controllers/purchase-product.controller';
import { BaseRouter } from '../shared/route/base.route';
import { PurchaseProductDTO } from '../purchase/dto/purchase-product.dto';
import { ValidateMiddlewareDTO } from '../middlewares/validate-dto.middleware';

class PurchaseProductRouter extends BaseRouter<PurchaseProductController, ValidateMiddlewareDTO> {
  public path = '/purchase-products';
  public router = Router();
  public purchaseProductController = new PurchaseProductController();

  constructor() {
    super(PurchaseProductController, ValidateMiddlewareDTO);
    this.initPurchaseProductRouters();
  }

  public initPurchaseProductRouters() {
    this.router.get(`${this.path}`, (req, res) => this.purchaseProductController.getPurchaseProducts(req, res));

    this.router.get(`${this.path}/:id`, (req, res) => this.purchaseProductController.getPurchaseProductById(req, res));

    this.router.post(
      `${this.path}`,
      (req, res, next) => [this.middleware.validator(req, res, next, PurchaseProductDTO)],
      (req, res) => this.purchaseProductController.createPurchaseProduct(req, res),
    );

    this.router.put(`${this.path}/:id`, (req, res) => this.purchaseProductController.updatePurchaseProduct(req, res));

    this.router.delete(`${this.path}/:id`, (req, res) => this.purchaseProductController.deletePurchaseProduct(req, res));
  }
}

export default PurchaseProductRouter;
