import { join } from 'path';
import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const { PORT, DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const configDbConnection: DataSourceOptions = {
  type: 'mysql',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true, // it will be false
  migrationsRun: false,
  logging: false,
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, '../**/*.migration{.ts,.js}')],
  subscribers: [join(__dirname, '../**/*.subscriber{.ts,.js}')],
  namingStrategy: new SnakeNamingStrategy(),
};

export const AppDataSource: DataSource = new DataSource(configDbConnection);
