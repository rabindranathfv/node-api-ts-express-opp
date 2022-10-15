import express from 'express';
import hpp from 'hpp';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { logger, stream } from './utils/logger';
import displayRoutes from 'express-routemap';
import cors from 'cors';
import corsConfig from './config/corsConfig';
import errorMiddleware from './middlewares/error.middleware';

import { Routes } from './interfaces/route.interface';
import { PORT, NODE_ENV, API_VERSION, LOG_FORMAT } from './config/config';

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = PORT || 3000;
    this.env = NODE_ENV || 'development';

    this.initRoutes(routes);
    this.initiazeMiddlewares();
    this.initializeErrorHandling();
    this.connectToDataBase();
  }

  public listen() {
    this.app.listen(this.port, () => {
      displayRoutes(this.app);
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
    })
  }

  private initiazeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(cookieParser());
    this.app.use(morgan(LOG_FORMAT ?? '../logs', { stream }))
    this.app.use(cors(corsConfig))
  }

  public getServer() {
    return this.app;
  }

  public connectToDataBase() {
    // TODO: IMPORT DB CONNECTION
  }

  private initRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use(`/api/${API_VERSION}`, route.router);
    })
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;