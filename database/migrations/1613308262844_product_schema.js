'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('slug', 254).notNullable().unique()
      table.string('name', 254).notNullable().unique()
      table.string('description').nullable()
      table.text('description_long').nullable()
      table.string('images', 254).nullable()
      table.integer('price').nullable()
      table.boolean('featured').defaultTo(false)
      table.integer('compareAtPrice').nullable()
      table.boolean('newArrival').defaultTo(1)
      table.integer('brand_id').nullable().unsigned().references('id').inTable('brands').onDelete('set null')
      table.json('badges').defaultTo([]) 
      table.integer('categorie_id').nullable().unsigned().references('id').inTable('categories').onDelete('set null')
      table.integer('reviews').nullable()
      table.integer('rating').nullable()
      // table.integer('attribute_id').unsigned().references('id').inTable('attributes').onDelete('set null')
      table.string('availability', 60).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
