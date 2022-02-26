'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NewsLatterSchema extends Schema {
  up () {
    this.create('news_latters', (table) => {
      table.increments()
       table.double('email').unique().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('news_latters')
  }
}

module.exports = NewsLatterSchema

