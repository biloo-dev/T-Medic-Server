'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AttributeProductSchema extends Schema {
  up () {
    this.create('attribute_product', (table) => {
      table.increments()
      
      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('set null')
      table.integer('attribute_id').unsigned().references('id').inTable('attributes').onDelete('set null')
      table.string('values').nullable()
      table.boolean('featured').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('attribute_product')
  }
}

module.exports = AttributeProductSchema
