import { join } from 'path';
import { ConnectionOptions, createConnection } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } from '../config/config';
import { logger } from '../utils/logger';

export const dbConnection: ConnectionOptions = {
  type: 'mysql',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  logging: false,
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, '../**/*.migration{.ts,.js}')],
  subscribers: [join(__dirname, '../**/*.subscriber{.ts,.js}')],
  namingStrategy: new SnakeNamingStrategy(),
};

export const mySqlDBConnection = async () => {
  try {
    await createConnection(dbConnection);
    logger.info(`=================================`);
    logger.info(`======= URL: ${dbConnection.port} =======`);
    logger.info(`=================================`);
  } catch (error) {
    console.log(error);
    throw new Error(`Error starting DB Connection with Mongo`);
  }
};
