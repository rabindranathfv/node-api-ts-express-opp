"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerOptions = void 0;
const config_1 = require("./config");
exports.swaggerOptions = {
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
            url: `http://localhost:${config_1.PORT}`,
        },
    ],
    apis: ['./src/routes/*.routes.ts'],
};
//# sourceMappingURL=swaggerConfig.js.map