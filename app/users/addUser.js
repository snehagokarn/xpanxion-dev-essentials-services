"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseService_1 = require("../BaseService");
'use strict';
const addUser = (event, context, callback) => {
    BaseService_1.BaseService.create("Users", event, (response) => {
        callback(null, response);
    });
};
exports.addUser = addUser;
const addScores = (event, context, callback) => {
    var eventBody = JSON.parse(event.body);
    BaseService_1.BaseService.create("UserScores", eventBody, (response) => {
        callback(null, response);
    });
};
exports.addScores = addScores;
//# sourceMappingURL=addUser.js.map