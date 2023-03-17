"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkBlogId = exports.checkContent = exports.checkShortDescription = exports.checkTitle = void 0;
const express_validator_1 = require("express-validator");
const BLOGrepo_1 = require("../DataLayer-bd-local/BLOGrepo");
exports.checkTitle = (0, express_validator_1.body)('title')
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
});
exports.checkShortDescription = (0, express_validator_1.body)('shortDescription')
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
    .isLength({ min: 1, max: 100 })
    .withMessage({
    massage: "incorrect short description",
    field: "shortDescription"
});
exports.checkContent = (0, express_validator_1.body)('content')
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
});
exports.checkBlogId = (0, express_validator_1.body)('blogId')
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
    .custom((value, { req }) => __awaiter(void 0, void 0, void 0, function* () {
    const blogIdValue = BLOGrepo_1.blogDB.find((b) => b.id === value);
    if (!blogIdValue) {
        throw new Error();
    }
    return true;
})).withMessage({
    message: "Blog does not exist",
    field: "blogId"
});
