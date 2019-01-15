'use strict'
const Post=use('App/Models/Post')
const User = use('App/Models/User')
class PostController {
    // table.string('image_url').notNullable()
    // table.string('description', 254)
    // table.integer('user_id')


    

    async createPost({request,response,field, value}) {
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
