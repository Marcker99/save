"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUrl = exports.checkDescription = exports.checkName = void 0;
const express_validator_1 = require("express-validator");
exports.checkName = (0, express_validator_1.body)('name')
    .exists()
    .withMessage({
    massage: "incorrect name",
    field: "name"
})
    .bail()
    .isString()
    .withMessage({
    massage: "incorrect name",
    field: "name"
})
    .bail()
    .isLength({ min: 1, max: 15 })
    .withMessage({
    massage: "incorrect name",
    field: "name"
});
exports.checkDescription = (0, express_validator_1.body)('description')
    .exists()
    .withMessage({
    massage: "incorrect description",
    field: "description"
})
    .bail()
    .isString()
    .withMessage({
    massage: "incorrect description",
    field: "description"
})
    .bail()
    .isLength({ min: 1, max: 500 })
    .withMessage({
    massage: "incorrect description",
    field: "description"
});
exports.checkUrl = (0, express_validator_1.body)('websiteUrl')
    .exists()
    .withMessage({
    massage: "incorrect websiteUrl",
    field: "websiteUrl"
})
    .bail()
    .isString()
    .withMessage({
    massage: "incorrect websiteUrl",
    field: "websiteUrl"
})
    .bail()
    .isLength({ min: 1, max: 100 })
    .withMessage({
    massage: "incorrect websiteUrl",
    field: "websiteUrl"
})
    .bail()
    .matches(/^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/)
    .withMessage({
    massage: "incorrect websiteUrl",
    field: "websiteUrl"
});
