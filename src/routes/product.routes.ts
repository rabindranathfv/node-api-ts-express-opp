import { Router } from 'express';
import { ProductController } from '../product/product.controller';
import { BaseRouter } from '../shared/route/base.route';
import { ValidateMiddlewareDTO } from '../middlewares/validate-dto.middleware';
import { ProductDTO } from '../product/dto/product.dto';

class ProductRoute extends BaseRouter<ProductController, ValidateMiddlewareDTO> {
  public path = '/products';
  public router = Router();
  public productController = new ProductController();

  constructor() {
    super(ProductController, ValidateMiddlewareDTO);
    this.initProductRoutes();
  }

  public initProductRoutes() {
    this.router.get(`${this.path}`, (req, res) => this.productController.getProducts(req, res));

    this.router.get(`${this.path}/:id`, (req, res) => this.productController.getProductById(req, res));

    this.router.post(
      `${this.path}`,
      (req, res, next) => [this.middleware.validator(req, res, next, ProductDTO)],
      (req, res) => this.productController.createProduct(req, res),
    );

    this.router.put(`${this.path}/:id`, (req, res) => this.productController.updateProduct(req, res));

    this.router.delete(`${this.path}/:id`, (req, res) => this.productController.deleteProduct(req, res));
  }
}

export default ProductRoute;
