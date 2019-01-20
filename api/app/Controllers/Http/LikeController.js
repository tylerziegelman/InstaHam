'use strict'
const Like=use('App/Models/Like')
const User=use('App/Models/User')
const Post=use('App/Models/Post')

class LikeController {

    async createLike ({request, response,auth}) {
        const user = await auth.getUser()
        const {post_id} = request.post()
        const like = await Like.create({user_id:user.id,post_id})
        response.json({
            message:`Like was created`,
            data: like
        })
    }
}

module.exports = LikeController
