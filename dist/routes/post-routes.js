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
exports.postRoutes = void 0;
const express_1 = require("express");
const auth_middleware_1 = require("../middleWares/auth.middleware");
const DB_POSTrepo_1 = require("../repositoriesDataLayer/DB_POSTrepo");
const Post_valiators_1 = require("../middleWares/validators/Post_valiators");
const errors_Middleware_1 = require("../middleWares/errors_Middleware");
exports.postRoutes = (0, express_1.Router)({});
//routes
exports.postRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield DB_POSTrepo_1.postDataRepositories.readAllPost();
    res.send(answer);
}));
//post
exports.postRoutes.post('/', auth_middleware_1.authMiddleWare, Post_valiators_1.checkTitle, Post_valiators_1.checkShortDescription, Post_valiators_1.checkContent, Post_valiators_1.checkBlogId, errors_Middleware_1.errorsMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = yield DB_POSTrepo_1.postDataRepositories.createNewPost(req.body.title, req.body.shortDescription, req.body.content, req.body.blogId);
    res.status(201).send(newPost);
}));
//get by id
exports.postRoutes.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let answer = yield DB_POSTrepo_1.postDataRepositories.readPostById(req.params.id);
    if (!answer) {
        res.sendStatus(404);
    }
    res.send(answer);
}));
//put
exports.postRoutes.put('/:id', auth_middleware_1.authMiddleWare, Post_valiators_1.checkTitle, Post_valiators_1.checkShortDescription, Post_valiators_1.checkContent, Post_valiators_1.checkBlogId, errors_Middleware_1.errorsMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield DB_POSTrepo_1.postDataRepositories.updatePost(req.params.id, req.body.title, req.body.shortDescription, req.body.content, req.body.blogId);
    if (answer) {
        res.send(204);
    }
    else {
        res.send(404);
    }
}));
//delete by id
exports.postRoutes.delete('/:id', auth_middleware_1.authMiddleWare, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield DB_POSTrepo_1.postDataRepositories.removePostById(req.params.id);
    answer ? res.send(204) : res.send(404);
}));
//
