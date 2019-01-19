'use strict'
const Post=use('App/Models/Post')
const User = use('App/Models/User')
const aws = require('aws-sdk')
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');
const Env = use('Env')
const Drive = use('Drive')


aws.config.update({
    region: 'us-west-2', // Put your aws region here
    // accessKeyId: process.env.AWSAccessKeyId,
    // secretAccessKey: process.env.AWSSecretKey
    accessKeyId: Env.get('AWSAccessKeyId'),
    secretAccessKey: Env.get('AWSSecretKey')
})

aws.config.setPromisesDependency(bluebird);

const s3 = new aws.S3();
const S3_BUCKET = process.env.bucket

// exports.sign_s3 = (req, res) => {
//     const s3 = new aws.S3();  // Create a new instance of S3
//     const fileName = req.body.fileName;
//     const fileType = req.body.fileType;

//     const s3Params = {
//         Bucket: S3_BUCKET,
//         Key: fileName,
//         Expires: 500,
//         ContentType: fileType,
//         ACL: 'public-read'
//     };

//     s3.getSignedUrl('putObject', s3Params, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.json({ success: false, error: err })
//         }

//         // Data payload of what we are sending back, the url of the signedRequest and a URL where we can access the content after its saved. 
//         const returnData = {
//             signedRequest: data,
//             url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
//         };
//         // Send it all back
//         res.json({ success: true, data: { returnData } });
//     });
// }

class PostController {
    // table.string('image_url').notNullable()
    // table.string('description', 254)
    // table.integer('user_id')

    uploadFile(buffer, name, type){
        const params = {
          ACL: 'public-read',
          Body: buffer,
          Bucket: Env.get(Bucket),
          ContentType: type.mime,
          Key: `${name}.${type.ext}`
        };
        return s3.upload(params).promise();
      };


   async uploadImage({request}) {
        request.multipart.file('profile_pic', {}, async (file) => {
            console.log(file)
            await Drive.disk('s3').put(file.clientName, file.stream)
          })
        
          await request.multipart.process()
          return 'fart'
    }
    

    async createPost({request,response}) {
        const {image_url, description, user_id } = request.post()
        const post = await Post.create({image_url, description, user_id })
       
        response.json({
            data: post
        })
    }

    async getAllPosts({request,response}){
        const post = await Post.all();
        const user = await User.all()
     
        response.json({
             post_data: post,
             user_data: user

        })
    }
}

module.exports = PostController
