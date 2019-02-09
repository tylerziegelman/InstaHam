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
        
        console.log(likeChecker)
         if(likeChecker.length){
            response.status(400).json({
                status: 'error',
                message: 'Already Liked By User'
              })
         }else {
            const like = await Like.create({user_id:user.id,post_id,type:type})
            
            const post = await Post.query().with('user')
                            .withCount('likes').with('likes').fetch();

            response.json({
                message:`Like was created`,
                like_data: like,
                post_data: post
            })
         }

        
    }
}

module.exports = LikeController
