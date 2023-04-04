import { Router } from 'express';
import { Routes } from '../interfaces/route.interface';
import { CategoryController } from '../category/category.controller';
import { BaseRouter } from '../shared/route/base.route';
import { ValidateMiddlewareDTO } from '../middlewares/validate-dto.middleware';
import { CategoryDTO } from '../category/dto/category.dto';

class CategoryRoute extends BaseRouter<CategoryController, ValidateMiddlewareDTO> {
  public path = '/categories';
  public router = Router();
  public categoryController = new CategoryController();

  constructor() {
    super(CategoryController, ValidateMiddlewareDTO);
    this.initCategoryRoutes();
  }

  public initCategoryRoutes() {
    this.router.get(`${this.path}`, (req, res) => this.categoryController.getCategories(req, res));

    this.router.get(`${this.path}/:id`, (req, res) => this.categoryController.getCategoryById(req, res));

    this.router.post(
      `${this.path}`,
      (req, res, next) => [this.middleware.validator(req, res, next, CategoryDTO)],
      (req, res) => this.categoryController.createCategory(req, res),
    );

    this.router.put(`${this.path}/:id`, (req, res) => this.categoryController.updateCategory(req, res));

    this.router.delete(`${this.path}/:id`, (req, res) => this.categoryController.deleteCategory(req, res));
  }
}

export default CategoryRoute;
