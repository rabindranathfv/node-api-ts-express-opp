import express from 'express';
import { Routes } from './interfaces/route.interface';

class App {

  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = 3000;
    this.env = 'development';

    this.initRoutes(routes);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`API is runing in PORT: ${this.port}`);
    })
  }

  public getServer() {
    return this.app;
  }

  public initRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use('/', route.router);
    })
  }
}

export default App;