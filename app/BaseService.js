"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
class BaseService {
    create(tableName, item) {
        let docClient = new aws_sdk_1.DynamoDB.DocumentClient();
        var params = {
            TableName: tableName,
            Item: item
        };
        console.log("Adding a new item...");
        docClient.put(params, function (err, data) {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            }
            else {
                console.log("Added item:", JSON.stringify(data, null, 2));
            }
        });
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=BaseService.js.map