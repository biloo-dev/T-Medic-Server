'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TvaSchema extends Schema {
  up () {
    this.create('tvas', (table) => {
      table.increments()
      table.string('description').unique().notNullable()
      table.integer('value').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tvas')
  }
}

module.exports = TvaSchema
