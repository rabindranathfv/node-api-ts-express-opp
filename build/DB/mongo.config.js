"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDbConnection = exports.configConnection = void 0;
const mongoose_1 = require("mongoose");
const config_1 = require("../config/config");
const logger_1 = require("../utils/logger");
exports.configConnection = {
    url: config_1.DB_CNN ?? `mongodb://${config_1.DB_HOST}/${config_1.DB_PORT}/${config_1.DB_NAME}`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};
const mongoDbConnection = async () => {
    try {
        await (0, mongoose_1.connect)(exports.configConnection.url, exports.configConnection.options);
        logger_1.logger.info(`=================================`);
        logger_1.logger.info(`======= URL: ${exports.configConnection.url.substring(0, 10)} =======`);
        logger_1.logger.info(`=================================`);
    }
    catch (error) {
        console.log(error);
        throw new Error(`Error starting DB Connection with Mongo`);
    }
};
exports.mongoDbConnection = mongoDbConnection;
//# sourceMappingURL=mongo.config.js.map