'use strict'

/*
|--------------------------------------------------------------------------
| PostSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Post = use('App/Models/Post')
// // table.string('image_url').notNullable()
//       table.string('description', 254)
//       table.integer('user_id')
class PostSeeder {
  async run () {
    await Post.create({image_url: 'https://i.redd.it/woyhcxuke6921.jpg', description: "yep, that's a boat", user_id: 1})
    await Post.create({image_url: 'https://memestatic.fjcdn.com/pictures/Joshlol+steals+the+ham_022987_6712558.jpg', description: "yep, that's a ham and this is just a test it is only a test to check widths", user_id: 2})
    await Post.create({image_url: 'https://i.redd.it/3vy1kc8ott711.jpg', description: "yep, that's a roast beef", user_id: 2})
    
  }
}

module.exports = PostSeeder
