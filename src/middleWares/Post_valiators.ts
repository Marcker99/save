import {body} from "express-validator";
import {blogDB} from "../DataLayer-bd-local/BLOGrepo";
export const checkTitle = body('title')
    .notEmpty()
    .withMessage({
        massage: "incorrect title ",
        field: "title"
    })
    .isString()
    .withMessage({
        massage: "incorrect title ",
        field: "title"
    })
    .isLength({ min: 1, max: 30 })
    .withMessage({
        massage: "incorrect title ",
        field: "title"
    })
export const checkShortDescription = body('shortDescription')
    .notEmpty()
    .withMessage({
        massage: "incorrect short description",
        field: "shortDescription"
    })
    .isString()
    .withMessage({
        massage: "incorrect short description",
        field: "shortDescription"
    })
    .isLength({ min: 1, max: 100})
    .withMessage({
        massage: "incorrect short description",
        field: "shortDescription"
    })
export const checkContent = body('content')
    .notEmpty()
    .withMessage({
        massage: "incorrect content",
        field: "content"
    })
    .isString()
    .withMessage({
        massage: "incorrect content",
        field: "content"
    })
    .isLength({ min: 1, max: 1000 })
    .withMessage({
        massage: "incorrect content",
        field: "content"
    })



export const checkBlogId = body('blogId')
    .notEmpty()
    .withMessage({
        massage: "incorrect blog Id",
        field: "blogId"
    })
    .isString()
    .withMessage({
        massage: "incorrect blog Id",
        field: "blogId"
    })
    .custom(async (value, { req }) => {
        const blogIdValue = blogDB.find((b) => b.id === value);
        if (!blogIdValue) {
            throw new Error();
        }
        return true;
    }).withMessage({
        message: "Blog does not exist",
        field: "blogId"
    })









