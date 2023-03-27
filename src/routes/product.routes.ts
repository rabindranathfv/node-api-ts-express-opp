import { Router } from 'express';
import { Routes } from '../interfaces/route.interface';
import { ProductController } from '../product/product.controller';

class ProductRoute implements Routes {
  public path = '/products';
  public router = Router();
  public productController = new ProductController();

  constructor() {
    this.initProductRoutes();
  }

  public initProductRoutes() {
    this.router.get(`${this.path}`, (req, res) => this.productController.getProducts(req, res));

    this.router.get(`${this.path}/:id`, (req, res) => this.productController.getProductById(req, res));

    this.router.post(`${this.path}`, (req, res) => this.productController.createProduct(req, res));

    this.router.put(`${this.path}/:id`, (req, res) => this.productController.updateProduct(req, res));

    this.router.delete(`${this.path}/:id`, (req, res) => this.productController.deleteProduct(req, res));
  }
}

export default ProductRoute;
