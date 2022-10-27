import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import displayRoutes from 'express-routemap';

import { NODE_ENV, PORT, LOG_FORMAT, API_VERSION } from './config/config';

import { logger, stream } from './utils/logger';
import errorMiddleware from './middlewares/error.middleware';
import corsConfig from './config/corsConfig';

import { Routes } from './interfaces/route.interface';

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 3000;

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeSwagger();
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      displayRoutes(this.app);
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  private connectToDatabase() {
    // start DB instance Here
  }

  private initializeMiddlewares() {
    this.app.use(morgan(LOG_FORMAT ?? '../logs', { stream }));
    this.app.use(cors(corsConfig));
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use(`/api/${API_VERSION}/`, route.router);
    });
  }

  private initializeSwagger() {
    // TODO: Add swagger settings
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
