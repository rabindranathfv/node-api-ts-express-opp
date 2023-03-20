import { Router } from 'express';
import CustomerController from '../customer/customer.controller';
import { Routes } from '../interfaces/route.interface';

class CustomerRoute implements Routes {
  public path = '/customers';
  public router = Router();
  public customerController = new CustomerController();

  constructor() {
    this.initCustomerRoutes();
  }

  public initCustomerRoutes() {
    this.router.get(`${this.path}`, this.customerController.getCustomers);

    this.router.get(`${this.path}/:id`, this.customerController.getCustomerById);

    this.router.post(`${this.path}`, this.customerController.createCustomer);

    this.router.put(`${this.path}/:id`, this.customerController.updateCustomer);

    this.router.delete(`${this.path}/:id`, this.customerController.deleteCustomer);
  }
}

export default CustomerRoute;
