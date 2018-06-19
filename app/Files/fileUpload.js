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
        Key: file.name + file.extension,
        Body: event.body,
        ContentType: file.extension
    };
    bucket.upload(params, (err, data) => {
        if (err) {
            console.log('There was an error uploading your file: ', err);
            return false;
        }
        console.log('Successfully uploaded file.', data);
        callback(null, data);
        return true;
    });
};
exports.uploadFile = uploadFile;
//# sourceMappingURL=fileUpload.js.map