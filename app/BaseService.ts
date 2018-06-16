import {DynamoDB} from 'aws-sdk';

interface DynamoResponse{
    statusCode:string;
    body:any;
    headers:any;
}
export class BaseService
    {
        
        static create<T>(tableName:string,item: T,callback:any):void {
            let docClient = new DynamoDB.DocumentClient();

            var params = {
                TableName:tableName,
                Item:item
            };
            
            var response : DynamoResponse;
            console.log("Adding a new item...");
           docClient.put(params, function(err, data) {
                if (err) {
                    console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                    response = {
                        statusCode:err.code,
                        body:null,
                        headers:null,
                     }
                } else {
                    console.log("Added item:", JSON.stringify(data, null, 2));
                    response = {
                        statusCode:'200',
                        body:JSON.stringify(data),
                        headers:null  
                     }
                }

                callback(response);
                
            });

        }

        static read<T,A>(tableName:string,item: T, callback:any):void
          {
            let docClient = new DynamoDB.DocumentClient();
            var params:DynamoDB.DocumentClient.GetItemInput = {
                Key:item,
                TableName:tableName,
            };

            var response : DynamoResponse;
            
           docClient.get(params, (err, data:A) => {
                if (err) {
                    response = {
                       statusCode:err.code,
                       body:null,
                       headers:null 
                    }
                } else {
                    response = {
                        statusCode:'200',
                        body:JSON.stringify(data),
                        headers:null,
                     }
                }

                callback(response);
            });
        }

        static query<T,A>(tableName:string,filterExpression: string,
            expressionAttributeValues:any, 
            indexName:string,
            callback:any):void
          {
            let docClient = new DynamoDB.DocumentClient();
            var params:DynamoDB.DocumentClient.QueryInput = {
                TableName:tableName,
                IndexName:indexName,
                KeyConditionExpression: filterExpression,
                ExpressionAttributeValues:expressionAttributeValues  ,
            };

            var response : DynamoResponse;
            
           docClient.query(params, (err, data:A) => {
                if (err) {
                    response = {
                       statusCode:err.code,
                       body:null,
                       headers:null,
                    }
                } else {
                    response = {
                        statusCode:'200',
                        body:JSON.stringify(data),
                        headers:null,
                     }
                }

                callback(response);
            });
        }
    }