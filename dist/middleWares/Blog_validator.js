"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUrl = exports.checkDescription = exports.checkName = void 0;
const express_validator_1 = require("express-validator");
exports.checkName = (0, express_validator_1.body)('name')
    .notEmpty()
    .withMessage({
    massage: "incorrect name",
    field: "name"
})
    .isString()
    .withMessage({
    massage: "incorrect name",
    field: "name"
})
    .isLength({ min: 1, max: 15 })
    .withMessage({
    massage: "incorrect name",
    field: "name"
});
exports.checkDescription = (0, express_validator_1.body)('description')
    .notEmpty()
    .withMessage({
    massage: "incorrect description",
    field: "description"
})
    .isString()
    .withMessage({
    massage: "incorrect description",
    field: "description"
})
    .isLength({ min: 1, max: 500 })
    .withMessage({
    massage: "incorrect description",
    field: "description"
});
exports.checkUrl = (0, express_validator_1.body)('websiteUrl')
    .notEmpty()
    .withMessage({
    massage: "incorrect websiteUrl",
    field: "websiteUrl"
})
    .isString()
    .withMessage({
    massage: "incorrect websiteUrl",
    field: "websiteUrl"
})
    .isLength({ min: 1, max: 100 })
    .withMessage({
    massage: "incorrect websiteUrl",
    field: "websiteUrl"
})
    .matches(/^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/)
    .withMessage({
    massage: "incorrect websiteUrl",
    field: "websiteUrl"
});
