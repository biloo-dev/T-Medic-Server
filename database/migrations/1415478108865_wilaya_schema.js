'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WilayaSchema extends Schema {
  up () {
    this.create('wilayas', (table) => {
      table.increments() 
      table.string('code').nullable()
      table.string('name_en').nullable()
      table.string('name_fr').nullable()
      table.string('name_ar').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('wilayas')
  }
}

module.exports = WilayaSchema
