'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BrandSchema extends Schema {
  up () {
    this.create('brands', (table) => {
      table.increments()
      table.string('slug', 250).notNullable()
      table.string('name_fr', 250).notNullable()
      table.string('name_ar', 250).notNullable()
      table.string('image', 250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('brands')
  }
}

module.exports = BrandSchema
