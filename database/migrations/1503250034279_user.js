'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('firstName_fr', 80).notNullable()
      table.string('firstName_en', 80).notNullable()
      table.string('firstName_ar', 80).notNullable()
      table.string('lastName_fr', 80).notNullable()
      table.string('lastName_en', 80).notNullable()
      table.string('lastName_ar', 80).notNullable()
      table.integer('sexe', 1).defaultTo(0) // 0 male 1 female 
      table.integer('type', 1).defaultTo(1) // 0 admin 1 costomer 2 ... 3....
      table.string('phone1', 10).nullable().unique()
      table.string('phone2', 10).nullable().unique()
      table.string('img', 240).defaultTo('/images/avatars/avatar-1.png')
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
