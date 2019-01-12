'use strict'
const Post=use('App/Models/Post')

class PostController {
    // table.string('image_url').notNullable()
    // table.string('description', 254)
    // table.integer('user_id')
    async createPost({request,response}) {
        const {image_url, description, user_id } = request.post()
        const post = await Post.create({image_url, description, user_id })
        response.json({
            data: post
        })
    }
}

module.exports = PostController
