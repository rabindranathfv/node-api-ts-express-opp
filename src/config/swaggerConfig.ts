import { SwaggerOptions } from 'swagger-ui-express';
import { PORT } from './config';

export const swaggerOptions: SwaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Endpoints Docs',
      version: '1.0.0',
      description: 'API NODE JS ON TYPESCRIPT WITH SWAGGER',
    },
  },
  servier: [
    {
      url: `http://localhost:${PORT}`,
    },
  ],
  apis: ['./src/routes/*.routes.ts'],
};
