'use strict'
const User=use('App/Models/User')

class UserController {

    async createUser ({request,response}){
        const {username, email, password} = request.post()
        const user = await User.create({username, email, password})
        console.log(user)
        response.json({
          message: `${user.username} was added to the database`
        })
      }

}





module.exports = UserController
