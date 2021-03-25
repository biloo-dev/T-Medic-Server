'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Address extends Model {
    wilaya () {
        return this.belongsTo('App/Models/Wilaya','wilaya_id','id')
    }
    daira () {
        return this.belongsTo('App/Models/Daira','daira_id','id')
    }
    commune () {
        return this.belongsTo('App/Models/Commune','commune_id','id')
    }
}

module.exports = Address
