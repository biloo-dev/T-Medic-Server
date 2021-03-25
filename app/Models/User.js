'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()
 
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }
 
  addresse () {
    return this.hasMany('App/Models/Address','id','user_id')
  }
  orders () {
    return this.hasMany('App/Models/Order','id','user_id')
  }
  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
