'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DairasSchema extends Schema {
  up () {
    this.create('dairas', (table) => {
      table.increments()  
      table.string('code').nullable()
      table.string('name_en').nullable()
      table.string('name_fr').nullable()
      table.string('name_ar').nullable()
      table.integer('wilaya_id').unsigned().references('id').inTable('wilayas').onDelete('set null')
      table.timestamps()
    })
  }

  down () {
    this.drop('dairas')
  }
}

module.exports = DairasSchema
