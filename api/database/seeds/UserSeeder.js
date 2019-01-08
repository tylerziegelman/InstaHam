'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
// table.string('username', 80).notNullable().unique()
// table.string('email', 254).notNullable().unique()
// table.string('password', 60).notNullable()
// table.integer('post_id')
const User = use('App/Models/User')
class UserSeeder {
  async run () {
    await User.create({username: 'xXxham_man420xXx', email: 'sendhams@hamworld.info', password: 'hamMan123'})
    await User.create({username: 'beef_queen3', email: 'sandwich@roast.beef', password: 'beefySalad'})
  
    

  }
}

module.exports = UserSeeder
