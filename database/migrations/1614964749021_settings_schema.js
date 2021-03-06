'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SettingsSchema extends Schema {
  up () {
    this.create('settings', (table) => {
      table.increments()
      table.string('name_fr', 254).notNullable()
      table.string('name_ar', 254).notNullable()
      table.string('slug', 254).notNullable().unique()
      table.string('type', 254).defaultTo('text') 
      table.json('values', 254).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('settings')
  }
}

module.exports = SettingsSchema
