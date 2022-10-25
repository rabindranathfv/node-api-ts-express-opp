"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hpp_1 = __importDefault(require("hpp"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const logger_1 = require("./utils/logger");
const express_routemap_1 = __importDefault(require("express-routemap"));
const cors_1 = __importDefault(require("cors"));
const corsConfig_1 = __importDefault(require("./config/corsConfig"));
const error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
const config_1 = require("./config/config");
class App {
    app;
    env;
    port;
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.port = config_1.PORT || 3000;
        this.env = config_1.NODE_ENV || 'development';
        this.initRoutes(routes);
        this.initiazeMiddlewares();
        this.initializeErrorHandling();
        this.connectToDataBase();
        this.initializeSwagger();
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
    initiazeMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, hpp_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cookie_parser_1.default)());
        this.app.use((0, morgan_1.default)(config_1.LOG_FORMAT ?? '../logs', { stream: logger_1.stream }));
        this.app.use((0, cors_1.default)(corsConfig_1.default));
    }
    getServer() {
        return this.app;
    }
    connectToDataBase() {
        // TODO: IMPORT DB CONNECTION
    }
    initRoutes(routes) {
        routes.forEach((route) => {
            this.app.use(`/api/${config_1.API_VERSION}`, route.router);
        });
    }
    initializeSwagger() {
        // TODO: Add swagger config
    }
    initializeErrorHandling() {
        this.app.use(error_middleware_1.default);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map