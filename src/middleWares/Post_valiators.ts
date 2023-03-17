import {body} from "express-validator";
import {blogDB} from "../DataLayer-bd-local/BLOGrepo";
export const checkTitle = body('title')
    .notEmpty()
    .withMessage({
        message: "incorrect title ",
        field: "title"
    })
    .bail()
    .isString()
    .withMessage({
        message: "incorrect title ",
        field: "title"
    })
    .bail()
    .isLength({ min: 1, max: 30 })
    .withMessage({
        message: "incorrect title ",
        field: "title"
    })
export const checkShortDescription = body('shortDescription')
    .notEmpty()
    .withMessage({
        message: "incorrect short description",
        field: "shortDescription"
    })
    .bail()
    .isString()
    .withMessage({
        message: "incorrect short description",
        field: "shortDescription"
    })
    .bail()
    .isLength({ min: 1, max: 100})
    .withMessage({
        message: "incorrect short description",
        field: "shortDescription"
    })
export const checkContent = body('content')
    .notEmpty()
    .withMessage({
        message: "incorrect content",
        field: "content"
    })
    .bail()
    .isString()
    .withMessage({
        message: "incorrect content",
        field: "content"
    })
    .bail()
    .isLength({ min: 1, max: 1000 })
    .withMessage({
        message: "incorrect content",
        field: "content"
    })



export const checkBlogId = body('blogId')
    .notEmpty()
    .withMessage({
        message: "incorrect blog Id",
        field: "blogId"
    })
    .bail()
    .isString()
    .withMessage({
        message: "incorrect blog Id",
        field: "blogId"
    })
    .bail()
    .custom(async (value, { req }) => {
        const blogIdValue = blogDB.find((b) => b.id === value);
        if (!blogIdValue) {
            throw new Error();
        }
        return true;
    })
    .withMessage({
        message: "Blog does not exist",
        field: "blogId"
    })









