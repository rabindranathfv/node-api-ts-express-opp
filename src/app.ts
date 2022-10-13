import express from 'express';
import { PORT, NODE_ENV, API_VERSION } from './config/config';
import { Routes } from './interfaces/route.interface';
class App {

  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = PORT || 3000;
    this.env = NODE_ENV || 'development';

    this.initRoutes(routes);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`API is runing in PORT: ${this.port}`);
      console.log(`API is runing enviroment: ${this.env}`);
    })
  }

  public getServer() {
    return this.app;
  }

  public initRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use(`/api/${API_VERSION}`, route.router);
    })
  }
}

export default App;