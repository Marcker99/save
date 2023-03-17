"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearRout = void 0;
const express_1 = require("express");
const POSTrepo_1 = require("../DataLayer-bd-local/POSTrepo");
const BLOGrepo_1 = require("../DataLayer-bd-local/BLOGrepo");
exports.clearRout = (0, express_1.Router)({});
exports.clearRout.delete('/all-data', (req, res) => {
    BLOGrepo_1.blogDataRepositories.clearAll();
    POSTrepo_1.postDataRepositories.clearAll();
    res.sendStatus(204);
});
