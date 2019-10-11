exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', (tbl) => {
      tbl.increments()
      tbl.string('name', 255)
      .notNullable()
      tbl.text('directions')
      .notNullable()
    })
    .createTable('ingredients', (tbl) => {
      tbl.increments()
      tbl.string('name', 255)
      .notNullable()
    })
    .createTable('recipe_ingredients', (tbl) => {
      tbl.increments()
      tbl.float('quantity')
      tbl.string('unit')
      // we need FK that references the PK on users
      tbl
        .integer('recipe_id')
        .unsigned() // integer, no negative signs
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE') // checks if id exists elsewhere
        .onDelete('RESTRICT') // cannot delete bc other dependent tables
      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')

      tbl.unique(['recipe_id', 'ingredient_id'])
    })
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
}
