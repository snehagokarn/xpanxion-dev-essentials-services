"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
class BaseService {
    static create(tableName, item, callback) {
        let docClient = new aws_sdk_1.DynamoDB.DocumentClient();
        var params = {
            TableName: tableName,
            Item: item
        };
        var response;
        console.log("Adding a new item...");
        docClient.put(params, function (err, data) {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                response = {
                    statusCode: err.code,
                    body: null,
                    headers: BaseService.headers,
                };
            }
            else {
                console.log("Added item:", JSON.stringify(data, null, 2));
                response = {
                    statusCode: '200',
                    body: JSON.stringify(data),
                    headers: BaseService.headers,
                };
            }
            callback(response);
        });
    }
    static read(tableName, item, callback) {
        let docClient = new aws_sdk_1.DynamoDB.DocumentClient();
        var params = {
            Key: item,
            TableName: tableName,
        };
        var response;
        docClient.get(params, (err, data) => {
            if (err) {
                response = {
                    statusCode: err.code,
                    body: null,
                    headers: BaseService.headers
                };
            }
            else {
                response = {
                    statusCode: '200',
                    body: JSON.stringify(data),
                    headers: BaseService.headers,
                };
            }
            callback(response);
        });
    }
    static query(tableName, filterExpression, expressionAttributeValues, indexName, callback) {
        let docClient = new aws_sdk_1.DynamoDB.DocumentClient();
        var params = {
            TableName: tableName,
            IndexName: indexName,
            KeyConditionExpression: filterExpression,
            ExpressionAttributeValues: expressionAttributeValues,
        };
        var response;
        docClient.query(params, (err, data) => {
            if (err) {
                response = {
                    statusCode: err.code,
                    body: err.message,
                    headers: BaseService.headers,
                };
            }
            else {
                response = {
                    statusCode: '200',
                    body: JSON.stringify(data),
                    headers: BaseService.headers,
                };
            }
            callback(response);
        });
    }
}
BaseService.headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
};
exports.BaseService = BaseService;
//# sourceMappingURL=BaseService.js.map