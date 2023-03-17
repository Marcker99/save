"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoutes = void 0;
//db-posts
const express_1 = require("express");
const auth_middleware_1 = require("../middleWares/auth.middleware");
const POSTrepo_1 = require("../DataLayer-bd-local/POSTrepo");
const Post_valiators_1 = require("../middleWares/Post_valiators");
const errors_Middleware_1 = require("../middleWares/errors_Middleware");
exports.postRoutes = (0, express_1.Router)({});
//routes
exports.postRoutes.get('/', (req, res) => {
    res.send(POSTrepo_1.postDataRepositories.readAllPost());
});
//post
exports.postRoutes.post('/', auth_middleware_1.authMiddleWare, Post_valiators_1.checkTitle, Post_valiators_1.checkShortDescription, Post_valiators_1.checkContent, Post_valiators_1.checkBlogId, errors_Middleware_1.errorsMiddleware, (req, res) => {
    const newPost = POSTrepo_1.postDataRepositories.createNewPost(req.body.title, req.body.shortDescription, req.body.content, req.body.blogId);
    res.status(201).send(newPost);
});
//get by id
exports.postRoutes.get('/:id', (req, res) => {
    let answer = POSTrepo_1.postDataRepositories.readPostById(req.params.id);
    if (!answer) {
        res.sendStatus(404);
    }
    res.send(answer);
});
//put
exports.postRoutes.put('/:id', auth_middleware_1.authMiddleWare, Post_valiators_1.checkTitle, Post_valiators_1.checkShortDescription, Post_valiators_1.checkContent, Post_valiators_1.checkBlogId, errors_Middleware_1.errorsMiddleware, (req, res) => {
    if (POSTrepo_1.postDataRepositories.updatePost(req.params.id, req.body.title, req.body.shortDescription, req.body.content, req.body.blogId)) {
        res.send(204);
    }
    else {
        res.send(404);
    }
});
//delete by id
exports.postRoutes.delete('/:id', auth_middleware_1.authMiddleWare, (req, res) => {
    POSTrepo_1.postDataRepositories.removePostById(req.params.id) ? res.send(204) : res.send(404);
});
