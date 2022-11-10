"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketValidator = void 0;
const ticketValidator = (req, res, next) => {
    console.log('=== EJECUTANDO MIDDLEWARE====');
    const bodyData = req.body;
    console.log(`BODY TICKET VALIDATOR:`, bodyData);
    if (!(Object.keys(bodyData).length > 0))
        return res.status(404).json({ message: `error in ticket body` });
    return next();
};
exports.ticketValidator = ticketValidator;
//# sourceMappingURL=ticketValidator.middleware.js.map