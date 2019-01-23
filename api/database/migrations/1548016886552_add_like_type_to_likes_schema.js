'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddLikeTypeToLikesSchema extends Schema {
  up () {
    this.alter('likes', (table) => {
      table.boolean('type')
    })
  }

  down () {
    this.alter('likes', (table) => {
      table.dropColumn('type')
    })
  }
}

module.exports = AddLikeTypeToLikesSchema
