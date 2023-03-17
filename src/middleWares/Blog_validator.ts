import {body} from "express-validator";

export const checkName = body('name')
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
    })

export const checkDescription = body('description')
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
    })
export const checkUrl = body('websiteUrl')
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
    })



