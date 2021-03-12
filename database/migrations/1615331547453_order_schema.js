'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.boolean('isFactor').defaultTo(false) // 1 => command ; 2 => facteur 
      table.integer('status').nullable()
      table.string('code').unique().notNullable()
      table.boolean('paymentMode').defaultTo(false)
      table.boolean('with_delivery').nullable()
      table.double('totla_ht').nullable()
      table.double('totla_ttc').nullable()
      table.double('totla_tva').nullable()  
      table.boolean('credit').nullable()  
      table.integer('user_id').nullable().unsigned().references('id').inTable('users').onDelete('set null')
      table.integer('address_id').nullable().unsigned().references('id').inTable('addresses').onDelete('set null')
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
