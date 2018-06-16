"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseService_1 = require("../BaseService");
'use strict';
const getUserByEmail = (email, context, callback) => {
    let request = 'Email = :pub_id';
    let exp = { ':pub_id': 'gsneha14@yahoo.com' };
    BaseService_1.BaseService.query("Users", request, exp, "userByEmail", (response) => {
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
const validate = (loginRequest, context, callback) => {
    let request = { "Email": loginRequest.email, "password": loginRequest.password };
    BaseService_1.BaseService.read("Users", request, (response) => {
        callback(null, response);
    });
};
exports.validate = validate;
//# sourceMappingURL=getUser.js.map