"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mySqlDBConnection = exports.dbConnection = void 0;
const path_1 = require("path");
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const config_1 = require("../config/config");
const logger_1 = require("../utils/logger");
exports.dbConnection = {
    type: 'mysql',
    host: config_1.DB_HOST,
    port: Number(config_1.DB_PORT),
    username: config_1.DB_USER,
    password: config_1.DB_PASSWORD,
    database: config_1.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [(0, path_1.join)(__dirname, '../**/*.entity{.ts,.js}')],
    migrations: [(0, path_1.join)(__dirname, '../**/*.migration{.ts,.js}')],
    subscribers: [(0, path_1.join)(__dirname, '../**/*.subscriber{.ts,.js}')],
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
};
const mySqlDBConnection = async () => {
    try {
        await (0, typeorm_1.createConnection)(exports.dbConnection);
        logger_1.logger.info(`=================================`);
        logger_1.logger.info(`======= URL: ${exports.dbConnection.port} =======`);
        logger_1.logger.info(`=================================`);
    }
    catch (error) {
        console.log(error);
        throw new Error(`Error starting DB Connection with Mongo`);
    }
};
exports.mySqlDBConnection = mySqlDBConnection;
//# sourceMappingURL=mysql.config.js.map