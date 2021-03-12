'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('addresses', (table) => {
      table.increments()
      table.string('default').defaultTo(1)  
      table.string('address_fr').nullable()
      table.string('address_en').nullable()
      table.string('address_ar').nullable()
      table.double('delivery_price').defaultTo(0)
      table.integer('wilaya_id').unsigned().references('id').inTable('wilayas').onDelete('set null')
      table.integer('commune_id').unsigned().references('id').inTable('communes').onDelete('set null')
      table.integer('daira_id').unsigned().references('id').inTable('dairas').onDelete('set null')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('set null')
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddressSchema
