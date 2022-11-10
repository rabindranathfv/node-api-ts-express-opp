"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const config_1 = require("./config");
class BaseService extends config_1.ConfigServer {
    getEntity;
    execRepository;
    constructor(getEntity) {
        super();
        this.getEntity = getEntity;
        this.execRepository = this.initRepository(getEntity);
    }
    async initRepository(e) {
        const getConn = await this.initConnect;
        return getConn.getRepository(e);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map