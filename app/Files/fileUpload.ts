import { Handler, Context,Callback } from 'aws-lambda';
import * as S3 from 'aws-sdk/clients/s3';
'use strict';

const uploadFile : Handler = (event:any, context: Context, callback: Callback) => {
    console.log(event);
    const bucket = new S3();

      let eventBody = JSON.parse(event.body);

      let buffer = new Buffer(eventBody.file.replace(/^data:image\/\w+;base64,/, ""),'base64')
      const params = {
        Bucket: 'bucketforsneha',
        Key: eventBody.name,
        Body: buffer,
        ContentType: eventBody.extension,
        ACL:"public-read",
        ContentEncoding: 'base64'
      };

      bucket.upload(params,(err:Error,data:S3.ManagedUpload.SendData)=>{ 
        if (err) {
            console.log('There was an error uploading your file: ', err);
            return {
                statusCode:err.name ,
                body:err.message,
                headers:{
                "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
                "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
              },
             }
          }
          var response = {
            statusCode:"200" ,
            body:JSON.stringify(data),
            headers:{
                "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
                "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
              },  
             }
                     
          console.log('Successfully uploaded file.', data);
          callback(null,response)
          return true;
      });

      
    }
   export{uploadFile}