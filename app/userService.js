"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseService_1 = require("../app/BaseService");
'use strict';
var app;
(function (app) {
    var Services;
    (function (Services) {
        class UserService extends BaseService_1.BaseService {
            constructor() {
                super();
                this.addUser = (event, context, callback) => {
                    this.create("User", event);
                    const response = {
                        statusCode: 200,
                        body: JSON.stringify({
                            input: event,
                        }),
                    };
                    callback(null, response);
                };
            }
        }
        Services.UserService = UserService;
    })(Services = app.Services || (app.Services = {}));
})(app = exports.app || (exports.app = {}));
//# sourceMappingURL=userService.js.map