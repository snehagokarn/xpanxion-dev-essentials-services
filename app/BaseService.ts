import {DynamoDB} from 'aws-sdk';

interface DynamoResponse{
    statusCode:string;
    success:boolean,
    data:any,
    error:any
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
                        error:err.message,
                        data:null,
                        success:false  
                     }
                } else {
                    console.log("Added item:", JSON.stringify(data, null, 2));
                    response = {
                        statusCode:'200',
                        error:null,
                        data:data,
                        success:true  
                     }
                }

                callback(response);
                
            });

        }

        static read<T,A>(tableName:string,item: T, callback:any):void
          {
            let docClient = new DynamoDB.DocumentClient();
            var params:DynamoDB.DocumentClient.GetItemInput = {
                TableName:tableName,
                Key:item
            };

            var response : DynamoResponse;
            
           docClient.get(params, (err, data:A) => {
                if (err) {
                    response = {
                       statusCode:err.code,
                       error:err.message,
                       data:null,
                       success:false  
                    }
                } else {
                    response = {
                        statusCode:'200',
                        error:null,
                        data:data,
                        success:true  
                     }
                }

                callback(response);
            });
        }
    }