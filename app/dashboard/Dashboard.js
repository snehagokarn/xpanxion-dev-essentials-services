"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseService_1 = require("../BaseService");
'use strict';
const getDashBoard = (event, context, callback) => {
    BaseService_1.BaseService.scan("UserScores", (response) => {
        callback(null, response);
    });
};
exports.getDashBoard = getDashBoard;
//# sourceMappingURL=Dashboard.js.map