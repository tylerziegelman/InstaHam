'use strict'
const Post=use('App/Models/Post')
const User = use('App/Models/User')
const aws = require('aws-sdk')
const Drive = use('Drive')
const Like = use('App/Models/Like')
const Database = use('Database')
const s3 = new aws.S3();
const S3_BUCKET = process.env.bucket



class PostController {
    
   async uploadImage({request,response}) {
       try{
        request.multipart.file('ham_image', {}, async (file) => {
            
           //runs second
            await Drive.disk('s3').put(file.clientName, file.stream)
              const s3_image_url =  Drive.disk('s3').getUrl(file.clientName)
              response.send(s3_image_url)
          })
            //runs first
            await request.multipart.process()
        //  ` <img src="www.goog.com/" />`
         
        }catch(e) {
            console.log(e)
            return "broke"
        }
    }
    

    async createPost({request,auth,response}) {
        const user = await auth.getUser()
        
        const {image_url, description} = request.post()
        const post = await Post.create({image_url, description, user_id: user.id })
       
        response.json({
            data: post
        })
    }

    async getAllPosts({request,response}){
        const post = await Post.query().with('user')
                            .withCount('likes').with('likes').fetch();
        // const user = await User.all()
        
        response.json({
             post_data: post,
            //  user_data: user

        })

        // const users = await User
        // .query()
        // .with('posts')
        // .fetch()

    }
}

module.exports = PostController
