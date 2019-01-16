'use strict'
const User=use('App/Models/User')

class UserController {


    async createUser ({request,auth,response}){
        const {username, email, password} = request.post()
        const user = await User.create({username, email, password})
        const token = await auth.generate(user)
        console.log(user)
        
        response.json({
          message: `${user.username} was added to the database`,
          data: token
        })
      }

    async login({request,auth,response}) {
      try {
        const token = await auth.attempt(
          request.input('email'),
          request.input('password')
        )
          console.log("login works")
        return response.json({
          status: 'success!',
          data: token
        })
      }catch(error){
        console.log("login failed")
        response.status(400).json({
          status: 'error',
          message: 'Invalid Credentials'
        })
      }
    }

}





module.exports = UserController
