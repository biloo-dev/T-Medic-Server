'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpecificationSchema extends Schema {
  up () {
    this.create('specifications', (table) => {
      table.increments()
      table.string('name_fr', 254).notNullable().unique()
      table.string('name_ar', 254).notNullable().unique()
      table.string('slug', 254).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('specifications')
  }
}

module.exports = SpecificationSchema
