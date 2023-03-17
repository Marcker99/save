"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleWare = void 0;
const startPass = Buffer.from('admin:qwerty').toString('base64');
const authPass = `Basic ${startPass}`;
console.log(authPass);
//Buffer.from(authHeader.split(' ')[1], 'base64').toString()
const authMiddleWare = (req, res, next) => {
    if (!req.headers.authorization || req.headers.authorization !== authPass) {
        res.send(401);
    }
    next();
};
exports.authMiddleWare = authMiddleWare;
