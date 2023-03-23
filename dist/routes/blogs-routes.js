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
exports.blogsRoutes = void 0;
const express_1 = require("express");
const DB_BLOGrepo_1 = require("../repositoriesDataLayer/DB_BLOGrepo");
const errors_Middleware_1 = require("../middleWares/errors_Middleware");
const auth_middleware_1 = require("../middleWares/auth.middleware");
const Blog_validator_1 = require("../middleWares/validators/Blog_validator");
exports.blogsRoutes = (0, express_1.Router)({});
//routes
exports.blogsRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield DB_BLOGrepo_1.blogDataRepositories.readAllBlog();
    res.send(answer);
}));
//post
exports.blogsRoutes.post('/', auth_middleware_1.authMiddleWare, Blog_validator_1.checkName, Blog_validator_1.checkDescription, Blog_validator_1.checkUrl, errors_Middleware_1.errorsMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newBlog = yield DB_BLOGrepo_1.blogDataRepositories.createNewBlog(req.body.name, req.body.description, req.body.websiteUrl);
    res.status(201).send(newBlog);
}));
//get by id
exports.blogsRoutes.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let answer = yield DB_BLOGrepo_1.blogDataRepositories.readBlogById(req.params.id.toString());
    if (!answer) {
        res.sendStatus(404);
    }
    res.send(answer);
}));
//put
exports.blogsRoutes.put('/:id', auth_middleware_1.authMiddleWare, Blog_validator_1.checkName, Blog_validator_1.checkDescription, Blog_validator_1.checkUrl, errors_Middleware_1.errorsMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield DB_BLOGrepo_1.blogDataRepositories.updateBlog(req.params.id, req.body.name, req.body.description, req.body.websiteUrl);
    if (answer) {
        res.send(204);
    }
    else {
        res.send(404);
    }
}));
//delete by id
exports.blogsRoutes.delete('/:id', auth_middleware_1.authMiddleWare, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield DB_BLOGrepo_1.blogDataRepositories.removeBlogById(req.params.id.toString()); //toString?
    answer ? res.send(204) : res.send(404);
}));
//
