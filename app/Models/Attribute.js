'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Attribute extends Model { //specifications
    specifications() {
        return this.belongsTo('App/Models/Specification')
    }
}

module.exports = Attribute
