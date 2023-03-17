"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const checkName = (0, express_validator_1.body)('name').notEmpty().isString()
    .isLength({ min: 1, max: 15 })
    .withMessage({
    massage: "incorrect name",
    field: "name"
});
const checkDescription = (0, express_validator_1.body)('description').notEmpty().isString()
    .isLength({ min: 1, max: 500 }).withMessage({
    massage: "incorrect description",
    field: "description"
});
const check = (0, express_validator_1.body)('websiteUrl').notEmpty().isString()
    .isLength({ min: 1, max: 100 })
    .matches(/^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/)
    .withMessage({
    massage: "incorrect websiteUrl",
    field: "websiteUrl"
});
