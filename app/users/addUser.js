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
//# sourceMappingURL=addUser.js.map