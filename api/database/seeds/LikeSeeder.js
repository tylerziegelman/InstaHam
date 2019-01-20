'use strict'

/*
|--------------------------------------------------------------------------
| LikeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Like = use('App/Models/Like')

class LikeSeeder {
  async run () {
    await Like.create({user_id: 1, post_id: 2, type:true})
    await Like.create({user_id: 2, post_id: 1, type:false})
    await Like.create({user_id: 1, post_id: 2, type:false})
    await Like.create({user_id: 2, post_id: 2, type:true})
    await Like.create({user_id: 1, post_id: 2, type:false})
  }
}

module.exports = LikeSeeder
