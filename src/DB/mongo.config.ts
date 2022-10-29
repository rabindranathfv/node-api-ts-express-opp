import { connect, ConnectOptions } from 'mongoose';
import { DB_CNN, DB_HOST, DB_PORT, DB_NAME } from '../config/config';
import { logger } from '../utils/logger';

export const configConnection = {
  url: DB_CNN ?? `mongodb://${DB_HOST}/${DB_PORT}/${DB_NAME}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

export const mongoDbConnection = async () => {
  try {
    await connect(configConnection.url, configConnection.options as ConnectOptions);
    logger.info(`=================================`);
    logger.info(`======= URL: ${configConnection.url.substring(0, 10)} =======`);
    logger.info(`=================================`);
  } catch (error) {
    console.log(error);
    throw new Error(`Error starting DB Connection with Mongo`);
  }
};
