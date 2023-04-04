import 'reflect-metadata';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import displayRoutes from 'express-routemap';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { NODE_ENV, PORT, LOG_FORMAT, API_VERSION, ConfigServer } from './config/config';

import { logger, stream } from './utils/logger';
import errorMiddleware from './middlewares/error.middleware';
import corsConfig from './config/corsConfig';

import { Routes } from './interfaces/route.interface';
import { swaggerOptions } from './config/swaggerConfig';

// import { mongoDbConnection } from './db/mongo.config';
import { DataSource } from 'typeorm';

class App extends ConfigServer {
  public app: express.Application;
  public env: string;
  public port: number;

  constructor(routes: Routes[]) {
    super();
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = Number(PORT) || 3000;

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

  public async connectToDatabase(): Promise<DataSource | void> {
    // mongoDbConnection();
    return this.initConnect
      .then(() => {
        console.log('Connect Success');
      })
      .catch((err) => {
        console.error(err.message);
      });
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
    const configSwagger = swaggerJsdoc(swaggerOptions);
    this.app.use(`/api/${API_VERSION}/docs`, swaggerUi.serve, swaggerUi.setup(configSwagger));
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
