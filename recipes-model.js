const knex = require('knex')
const db = require("../data/db-config")

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions
}

/*
  SELECT *
  FROM recipes
*/

function getRecipes() {
  return db('recipes');
}

/*
  SELECT *
  FROM recipes
  WHERE recipe_id = 2
*/

function getRecipeById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

/*
  SELECT name, qty
  FROM recipe_ingredients as r
  JOIN ingredients i ON r.recipe_id = i.id
  WHERE r.recipe_id = 2
*/

function getShoppingList(id){
  return db('recipe_ingredients as r')
    .join('ingredients as i', 'r.recipe_id', 'i.id')
    .select('name', 'qty')
    .where({'r.recipe_id': id})
}

/*
  SELECT r.recipe, s.stepNum, s."desc"
  FROM steps s
  JOIN recipes r ON s.recipe_id = r.id
  WHERE s.recipe_id = 1
*/

function getInstructions(id){
  return db('steps as s')
    .select('r.recipe', 's.stepNum', 's.desc')
    .join('recipes as r', 's.recipe_id', 'r.id')
    .where({'s.recipe_id': 1})
}
