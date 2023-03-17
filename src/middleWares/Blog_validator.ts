import {body} from "express-validator";

export const checkName = body('name')
    .notEmpty()
    .isString()
    .isLength({ min: 1, max: 15 })
    .withMessage({
        massage: "incorrect name",
        field: "name"
    })
export const checkDescription = body('description')
    .notEmpty()
    .isString()
    .isLength({ min: 1, max: 500 })
    .withMessage({
        massage: "incorrect description",
        field: "description"
    })
export const checkUrl = body('websiteUrl')
    .notEmpty()
    .isString()
    .isLength({ min: 1, max: 100 })
    .matches(/^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/)
    .withMessage({
        massage: "incorrect websiteUrl",
        field: "websiteUrl"
    })



