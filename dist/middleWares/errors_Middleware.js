"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorsMiddleware = void 0;
const express_validator_1 = require("express-validator");
const errorsMiddleware = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const errArr = errors.array();
        const resError = errArr.map((error) => (Object.assign({}, error.msg)));
        //const resError = errArr[0].msg
        const errorsMessages = [...resError];
        res.status(400).json({ errorsMessages });
    }
    else {
        next();
    }
};
exports.errorsMiddleware = errorsMiddleware;
