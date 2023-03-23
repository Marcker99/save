"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.body_parser = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const blogs_routes_1 = require("./routes/blogs-routes");
const post_routes_1 = require("./routes/post-routes");
const clearDB_1 = require("./routes/clearDB");
const body_parser_1 = __importDefault(require("body-parser"));
exports.app = (0, express_1.default)();
exports.body_parser = (0, body_parser_1.default)({});
exports.app.use(exports.body_parser);
exports.app.use('/blogs', blogs_routes_1.blogsRoutes);
exports.app.use('/posts', post_routes_1.postRoutes);
//test/////////////////////////////////////////
exports.app.use('/testing', clearDB_1.clearRout);
