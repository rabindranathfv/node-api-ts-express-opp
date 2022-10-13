import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local`});

export const { API_VERSION, NODE_ENV, PORT } = process.env;