'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AttributeSchema extends Schema {
  up () {
    this.create('attributes', (table) => {
      table.increments()
      table.string('slug', 250).notNullable()
      table.string('name', 250).notNullable()
      table.string('group', 250).nullable()
      table.boolean('featured ').defaultTo(0)
      table.timestamps()

    })
  }

  down () {
    this.drop('attributes')
  }
}

module.exports = AttributeSchema
