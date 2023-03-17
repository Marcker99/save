"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorsMiddleware = void 0;
const express_validator_1 = require("express-validator");
const errorsMiddleware = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    const errorsMessages = [];
    if (!errors.isEmpty()) {
        const errArr = errors.array();
        for (let i = 0; i < errArr.length; i++) {
            const error = errArr[i];
            errorsMessages.push(Object.assign({}, error.msg));
        }
        ;
        res.status(400).json({ errorsMessages });
    }
    else {
        next();
    }
};
exports.errorsMiddleware = errorsMiddleware;
