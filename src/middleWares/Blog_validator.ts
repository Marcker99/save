import {body} from "express-validator";

export const checkName = body('name')
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
    })
export const checkDescription = body('description')
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
    })
export const checkUrl = body('websiteUrl')
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
    })



