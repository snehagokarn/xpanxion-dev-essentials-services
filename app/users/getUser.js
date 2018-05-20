"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseService_1 = require("../BaseService");
'use strict';
const getUserByEmail = (email, context, callback) => {
    let request = { "Email": email };
    BaseService_1.BaseService.read("Users", request, (response) => {
        callback(null, response);
    });
};
exports.getUserByEmail = getUserByEmail;
const getUserById = (id, context, callback) => {
    let request = { "Id": id };
    BaseService_1.BaseService.read("Users", request, (response) => {
        callback(null, response);
    });
};
exports.getUserById = getUserById;
//# sourceMappingURL=getUser.js.map