import { DataSource } from 'typeorm';
import { logger } from '../utils/logger';
import { AppDataSource } from '../config/data.source';
import { DB_PORT } from '../config/config';

export const mySqlDBConnection = async (): Promise<DataSource> => {
  try {
    logger.info(`=================================`);
    logger.info(`======= URL: ${DB_PORT} =======`);
    logger.info(`=================================`);
    return await AppDataSource.initialize();
  } catch (error) {
    console.log(error);
    throw new Error(`Error starting DB Connection with Mongo`);
  }
};
