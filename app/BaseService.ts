import {DynamoDB} from 'aws-sdk';
    export class BaseService
    {
        create<T>(tableName:string,item: T){
            let docClient = new DynamoDB.DocumentClient();
            var params = {
                TableName:tableName,
                Item:item
            };
            
            console.log("Adding a new item...");
            docClient.put(params, function(err, data) {
                if (err) {
                    console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    console.log("Added item:", JSON.stringify(data, null, 2));
                }
            });

        }

    }