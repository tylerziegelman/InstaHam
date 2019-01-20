'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
// table.string('username', 80).notNullable().unique()
// table.string('email', 254).notNullable().unique()
// table.string('password', 60).notNullable()
// table.integer('post_id')
Factory.blueprint('App/Models/User', (data,faker) => {
  return {
    username: faker.username(),
    email: faker.email(),
    password: faker.password()
  }
})

// table.string('image_url').notNullable()
//       table.string('description', 254)
//       table.integer('user_id')

Factory.blueprint('App/Models/Post', (data,faker) => {
    return {
        image_url: data.image_url,
        description: data.description,
        user_id: data.user_id
    }
  })

  Factory.blueprint('App/Models/Like', (data,faker) => {
    return {
        post_id: data.post_id,
        user_id: data.user_id,
        type: data.type
        
    }
  })