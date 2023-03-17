"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUrl = exports.checkDescription = exports.checkName = void 0;
const express_validator_1 = require("express-validator");
exports.checkName = (0, express_validator_1.body)('name')
    .exists()
    .withMessage({
    message: "incorrect name",
    field: "name"
})
    .bail()
    .isString()
    .withMessage({
    message: "incorrect name",
    field: "name"
})
    .bail()
    .isLength({ min: 1, max: 15 })
    .withMessage({
    message: "incorrect name",
    field: "name"
});
exports.checkDescription = (0, express_validator_1.body)('description')
    .exists()
    .withMessage({
    message: "incorrect description",
    field: "description"
})
    .bail()
    .isString()
    .withMessage({
    message: "incorrect description",
    field: "description"
})
    .bail()
    .isLength({ min: 1, max: 500 })
    .withMessage({
    message: "incorrect description",
    field: "description"
});
exports.checkUrl = (0, express_validator_1.body)('websiteUrl')
    .exists()
    .withMessage({
    message: "incorrect websiteUrl",
    field: "websiteUrl"
})
    .bail()
    .isString()
    .withMessage({
    message: "incorrect websiteUrl",
    field: "websiteUrl"
})
    .bail()
    .isLength({ min: 1, max: 100 })
    .withMessage({
    message: "incorrect websiteUrl",
    field: "websiteUrl"
})
    .bail()
    .matches(/^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/)
    .withMessage({
    message: "incorrect websiteUrl",
    field: "websiteUrl"
});
