'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorySchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string('type', 80).notNullable()
      table.string('slug', 80).nullable()
      table.string('name_fr', 254).notNullable()
      table.string('name_ar', 254).notNullable()
      table.string('image', 60).nullable()
      table.integer('items').nullable()
      table.integer('parent_id').unsigned().references('id').inTable('categories').onDelete('set null')
      table.integer('children_id').unsigned().references('id').inTable('categories').onDelete('set null')
      table.json('customFields', 60).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema
