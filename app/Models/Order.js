'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
    static boot() {
        super.boot() 
        this.addTrait('@provider:Lucid/OptionalQueries')
    }
    subOrder () {
        return this.hasMany('App/Models/SubOrder','id','order_id')
    }
    address () {
        return this.hasOne('App/Models/Address','address_id','id')
    }
}

module.exports = Order
