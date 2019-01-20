'use strict'
const Like=use('App/Models/Like')
const User=use('App/Models/User')
const Post=use('App/Models/Post')
const Database=use('Database')
class LikeController {

    async createLike ({request, response,auth}) {
        const user = await auth.getUser()
        const {post_id,type} = request.post()
        const likeChecker = await Database.from('likes')
                        .where('user_id', user.id)
                        .where('post_id', post_id)
        
        
         if(likeChecker.length){
             response.json({
                 message: 'already liked by this user'
             })
         }else {
            const like = await Like.create({user_id:user.id,post_id,type:type})
            response.json({
                message:`Like was created`,
                data: like
            })
         }

        
    }
}

module.exports = LikeController
