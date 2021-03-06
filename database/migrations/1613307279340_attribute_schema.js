'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AttributeSchema extends Schema {
  up () {
    this.create('attributes', (table) => {
      table.increments()
      table.string('slug', 250).notNullable()
      table.string('name_fr', 250).notNullable()
      table.string('name_ar', 250).notNullable()
      table.string('group', 250).nullable()
      table.boolean('featured ').defaultTo(0)
      table.integer('specification_id').unsigned().references('id').inTable('specifications').onDelete('set null')
      table.timestamps()

    })
  }

  down () {
    this.drop('attributes')
  }
}

module.exports = AttributeSchema
