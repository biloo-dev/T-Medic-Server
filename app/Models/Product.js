'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  static boot() {
    super.boot() 
    this.addTrait('@provider:Lucid/OptionalQueries')
  }
  categories() {
    return this.belongsTo('App/Models/Category', 'categorie_id' ,'id')
  }
  attributes() {
    return this.belongsToMany('App/Models/Attribute').withPivot(['values','featured'])
  }
  tags() {
    return this.belongsToMany('App/Models/Tag')
  }
  brand() {
    return this.belongsTo('App/Models/Brand')
  }
}

module.exports = Product
