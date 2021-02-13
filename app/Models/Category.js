'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  parent(){
    return this.hasOne('App/Models/Category','id','parent_id')
  }
  children(){
    return this.hasMany('App/Models/Category', 'id', 'parent_id')
  }
}

module.exports = Category
