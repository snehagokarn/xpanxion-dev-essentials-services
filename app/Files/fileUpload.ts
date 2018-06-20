import { Handler, Context,Callback } from 'aws-lambda';
import * as S3 from 'aws-sdk/clients/s3';
'use strict';

const uploadFile : Handler = (event:any, context: Context, callback: Callback) => {
    let file = event;
    console.log(event);
    const bucket = new S3(
        {
          accessKeyId: 'AKIAILOMKAAP54H3HUDA',
          secretAccessKey: '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',
          region: 'us-east-1'
        }
      );

      const params = {
        Bucket: 'bucketforsneha',
        Key: "UploadedFile"+ Math.random().toString() + file.extension,
        Body: event.body,
        ContentType: file.extension
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