"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mySqlDBConnection = void 0;
const logger_1 = require("../utils/logger");
const data_source_1 = require("../config/data.source");
const config_1 = require("../config/config");
const mySqlDBConnection = async () => {
    try {
        logger_1.logger.info(`=================================`);
        logger_1.logger.info(`======= URL: ${config_1.DB_PORT} =======`);
        logger_1.logger.info(`=================================`);
        return await data_source_1.AppDataSource.initialize();
    }
    catch (error) {
        console.log(error);
        throw new Error(`Error starting DB Connection with Mongo`);
    }
};
exports.mySqlDBConnection = mySqlDBConnection;
//# sourceMappingURL=mysql.config.js.map