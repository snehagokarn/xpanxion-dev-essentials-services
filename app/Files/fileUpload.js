"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const S3 = require("aws-sdk/clients/s3");
'use strict';
const uploadFile = (event, context, callback) => {
    let file = event;
    console.log(event);
    const bucket = new S3({
        accessKeyId: 'AKIAILOMKAAP54H3HUDA',
        secretAccessKey: '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',
        region: 'us-east-1'
    });
    const params = {
        Bucket: 'bucketforsneha',
        Key: "UploadedFile" + Math.random().toString() + file.extension,
        Body: event.body,
        ContentType: file.extension
    };
    bucket.upload(params, (err, data) => {
        if (err) {
            console.log('There was an error uploading your file: ', err);
            return {
                statusCode: err.name,
                body: err.message,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
                },
            };
        }
        var response = {
            statusCode: "200",
            body: JSON.stringify(data),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
            },
        };
        console.log('Successfully uploaded file.', data);
        callback(null, response);
        return true;
    });
};
exports.uploadFile = uploadFile;
//# sourceMappingURL=fileUpload.js.map