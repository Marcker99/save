"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorsMiddleware = void 0;
const express_validator_1 = require("express-validator");
const errorsMiddleware = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const errArr = errors.array();
        const resError = errArr.map((error) => ({
            message: error.msg,
            field: error.param,
        }));
        //const resError = errArr[0].msg
        const errorsMessages = [];
        errorsMessages.push(resError);
        res.status(400).send({ errorsMessages });
    }
    else {
        next();
    }
};
exports.errorsMiddleware = errorsMiddleware;
