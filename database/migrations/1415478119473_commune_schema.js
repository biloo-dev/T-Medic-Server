'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommuneSchema extends Schema {
  up () {
    this.create('communes', (table) => {
      table.increments() 
      table.string('code').nullable()
      table.string('name_fr').nullable()
      table.string('name_en').nullable()
      table.string('name_ar').nullable()   
      table.integer('daira_id').unsigned().references('id').inTable('dairas').onDelete('set null')

      table.timestamps()
    })
  }

  down () {
    this.drop('communes')
  }
}

module.exports = CommuneSchema
