import App from './app';
import BaseRoute from './routes/base.routes';
import CategoryRoute from './routes/category.routes';
import CustomerRoute from './routes/customer.routes';
import ProductRoute from './routes/product.routes';
import PurchaseProductRouter from './routes/purchase-product.routes';
import PurchaseRoute from './routes/purchase.routes';
import UserRoute from './routes/user.routes';

const app = new App([
  new BaseRoute(),
  new UserRoute(),
  new CustomerRoute(),
  new CategoryRoute(),
  new ProductRoute(),
  new PurchaseRoute(),
  new PurchaseProductRouter(),
]);

app.listen();
