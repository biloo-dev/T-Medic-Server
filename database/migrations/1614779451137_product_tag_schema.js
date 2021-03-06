'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductTagsSchema extends Schema {
  up () {
    this.create('product_tag', (table) => {
      table.increments() 
      table.integer('product_id').nullable().unsigned().references('id').inTable('products').onDelete('set null')
      table.integer('tag_id').nullable().unsigned().references('id').inTable('tags').onDelete('set null')
      table.timestamps()
    })
  }

  down () {
    this.drop('product_tag')
  }
}

module.exports = ProductTagsSchema
