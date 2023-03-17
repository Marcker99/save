"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleWare = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
//parser
exports.middleWare = (0, body_parser_1.default)({});
