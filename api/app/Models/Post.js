'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
    static get dates () {
        const el = super.dates.concat(['created_at', 'updated_at'])
       
        return el
        
      }


      static castDates (field, value) {
        if (field === 'created_at') {
          return  value.format('M/DD/YYYY')
        }
        return super.formatDates(field, value)
      }
    user(){
        return this.belongsTo('App/Models/User')
    }
    likes(){
      return this.hasMany('App/Models/Like')
    }
}

module.exports = Post
