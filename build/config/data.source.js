"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = exports.DB_PASSWORD = exports.DB_USER = exports.DB_NAME = exports.DB_PORT = exports.DB_HOST = exports.PORT = void 0;
const path_1 = require("path");
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
(0, dotenv_1.config)({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });
_a = process.env, exports.PORT = _a.PORT, exports.DB_HOST = _a.DB_HOST, exports.DB_PORT = _a.DB_PORT, exports.DB_NAME = _a.DB_NAME, exports.DB_USER = _a.DB_USER, exports.DB_PASSWORD = _a.DB_PASSWORD;
const configDbConnection = {
    type: 'mysql',
    host: exports.DB_HOST,
    port: Number(exports.DB_PORT),
    username: exports.DB_USER,
    password: exports.DB_PASSWORD,
    database: exports.DB_NAME,
    synchronize: false,
    migrationsRun: true,
    logging: false,
    entities: [(0, path_1.join)(__dirname, '../**/*.entity{.ts,.js}')],
    migrations: [(0, path_1.join)(__dirname, '../**/*.migration{.ts,.js}')],
    subscribers: [(0, path_1.join)(__dirname, '../**/*.subscriber{.ts,.js}')],
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
};
exports.AppDataSource = new typeorm_1.DataSource(configDbConnection);
//# sourceMappingURL=data.source.js.map