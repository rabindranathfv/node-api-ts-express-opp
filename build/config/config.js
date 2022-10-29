"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_NAME = exports.DB_PORT = exports.DB_HOST = exports.DB_CNN = exports.EXTERNAL_API = exports.ORIGIN = exports.LOG_DIR = exports.LOG_FORMAT = exports.PORT = exports.NODE_ENV = exports.API_VERSION = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });
_a = process.env, exports.API_VERSION = _a.API_VERSION, exports.NODE_ENV = _a.NODE_ENV, exports.PORT = _a.PORT, exports.LOG_FORMAT = _a.LOG_FORMAT, exports.LOG_DIR = _a.LOG_DIR, exports.ORIGIN = _a.ORIGIN, exports.EXTERNAL_API = _a.EXTERNAL_API, exports.DB_CNN = _a.DB_CNN, exports.DB_HOST = _a.DB_HOST, exports.DB_PORT = _a.DB_PORT, exports.DB_NAME = _a.DB_NAME;
//# sourceMappingURL=config.js.map