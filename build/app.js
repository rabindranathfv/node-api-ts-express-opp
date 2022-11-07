"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const hpp_1 = __importDefault(require("hpp"));
const morgan_1 = __importDefault(require("morgan"));
const express_routemap_1 = __importDefault(require("express-routemap"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const config_1 = require("./config/config");
const logger_1 = require("./utils/logger");
const error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
const corsConfig_1 = __importDefault(require("./config/corsConfig"));
const swaggerConfig_1 = require("./config/swaggerConfig");
// import { mongoDbConnection } from './db/mongo.config';
const mysql_config_1 = require("./db/mysql.config");
class App {
    app;
    env;
    port;
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.env = config_1.NODE_ENV || 'development';
        this.port = config_1.PORT || 3000;
        this.connectToDatabase();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeSwagger();
        this.initializeErrorHandling();
    }
    listen() {
        this.app.listen(this.port, () => {
            (0, express_routemap_1.default)(this.app);
            logger_1.logger.info(`=================================`);
            logger_1.logger.info(`======= ENV: ${this.env} =======`);
            logger_1.logger.info(`🚀 App listening on the port ${this.port}`);
            logger_1.logger.info(`=================================`);
        });
    }
    getServer() {
        return this.app;
    }
    connectToDatabase() {
        // mongoDbConnection();
        (0, mysql_config_1.mySqlDBConnection)();
    }
    initializeMiddlewares() {
        this.app.use((0, morgan_1.default)(config_1.LOG_FORMAT ?? '../logs', { stream: logger_1.stream }));
        this.app.use((0, cors_1.default)(corsConfig_1.default));
        this.app.use((0, hpp_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cookie_parser_1.default)());
    }
    initializeRoutes(routes) {
        routes.forEach((route) => {
            this.app.use(`/api/${config_1.API_VERSION}/`, route.router);
        });
    }
    initializeSwagger() {
        const configSwagger = (0, swagger_jsdoc_1.default)(swaggerConfig_1.swaggerOptions);
        this.app.use(`/api/${config_1.API_VERSION}/docs`, swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(configSwagger));
    }
    initializeErrorHandling() {
        this.app.use(error_middleware_1.default);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map