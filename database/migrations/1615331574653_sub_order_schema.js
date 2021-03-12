'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubOrderSchema extends Schema {
  up () {
    this.create('sub_orders', (table) => {
      table.increments()  
      table.integer('qty').nullable() 
      table.double('totla_ht').nullable()
      table.double('totla_ttc').nullable()  
      table.integer('order_id').unsigned().references('id').inTable('orders').onDelete('set null')
      table.integer('product_id').nullable().unsigned().references('id').inTable('products').onDelete('set null')
      table.timestamps()
    })
  }

  down () {
    this.drop('sub_orders')
  }
}

module.exports = SubOrderSchema
