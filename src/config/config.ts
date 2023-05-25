import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { AppDataSource } from './data.source';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const {
  API_VERSION,
  NODE_ENV,
  PORT,
  LOG_FORMAT,
  LOG_DIR,
  ORIGIN,
  EXTERNAL_API,
  DB_CNN,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_PORT_MONGO,
  JWT_SECRET,
} = process.env;

export abstract class ConfigServer {
  get initConnect(): Promise<DataSource> {
    return AppDataSource.initialize();
  }
}
