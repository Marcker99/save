"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRoutes = void 0;
const express_1 = require("express");
const BLOGrepo_1 = require("../DataLayer-bd-local/BLOGrepo");
const errors_Middleware_1 = require("../middleWares/errors_Middleware");
const auth_middleware_1 = require("../middleWares/auth.middleware");
const Blog_validator_1 = require("../middleWares/Blog_validator");
exports.blogsRoutes = (0, express_1.Router)({});
//routes
exports.blogsRoutes.get('/', (req, res) => {
    res.send(BLOGrepo_1.blogDataRepositories.readAllBlog());
});
//post
exports.blogsRoutes.post('/', auth_middleware_1.authMiddleWare, Blog_validator_1.checkName, Blog_validator_1.checkDescription, Blog_validator_1.checkUrl, errors_Middleware_1.errorsMiddleware, (req, res) => {
    const newBlog = BLOGrepo_1.blogDataRepositories.createNewBlog(req.body.name, req.body.description, req.body.websiteUrl);
    res.status(201).send(newBlog);
});
//get by id
exports.blogsRoutes.get('/:id', (req, res) => {
    let answer = BLOGrepo_1.blogDataRepositories.readBlogById(req.params.id.toString());
    if (!answer) {
        res.sendStatus(404);
    }
    res.send(answer);
});
//put
exports.blogsRoutes.put('/:id', auth_middleware_1.authMiddleWare, Blog_validator_1.checkName, Blog_validator_1.checkDescription, Blog_validator_1.checkUrl, errors_Middleware_1.errorsMiddleware, (req, res) => {
    if (BLOGrepo_1.blogDataRepositories.updateBlog(req.params.id, req.body.name, req.body.description, req.body.websiteUrl)) {
        res.send(204);
    }
    else {
        res.send(404);
    }
});
//delete by id
exports.blogsRoutes.delete('/:id', auth_middleware_1.authMiddleWare, (req, res) => {
    BLOGrepo_1.blogDataRepositories.removeBlogById(req.params.id.toString()) ? res.send(204) : res.send(404);
});
//
