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
        Key: file.name+ file.extension,
        Body: event.body,
        ContentType: file.extension
      };

      bucket.upload(params,(err:Error,data:S3.ManagedUpload.SendData)=>{ 
        if (err) {
            console.log('There was an error uploading your file: ', err);
            return false;
          }
     
          console.log('Successfully uploaded file.', data);
          callback(null,data)
          return true;
      });
   }
   export{uploadFile}