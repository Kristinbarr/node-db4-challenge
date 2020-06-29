const express = require('express')
const db = require('./data/db-config.js')
const router = express.Router()



// GET /api/recipes/: all recipes (without details about ingredients or steps)
router.get('/recipes', (req, res) => {
  db('recipes')
  .then(recipes => {
    res.status(200).json(recipes)
  })
  .catch(error => {
    res.status(500).json(error)
  })
})

// GET /api/recipes/:id/shoppingList: a list of ingredients and quantites for a single recipe
// GET /api/recipes/:id/instructions: a correctly ordered list of how to prepare a single recipe
// GET /api/ingredients/:id/recipes: all recipes in the system that utilize a single ingredient


// remove recipe
router.delete('/recipes/:id', (req, res) => {
  db('recipes')
    .where({ id: req.params.id })
    .del()
    .then(count => {
      if (count > 0) {
        res.status(204).end()
      } else {
        res.status(404).json({ message: 'Record not found' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

// get all ingredients from the database
router.get('/ingredients', (req, res) => {
  db('ingredients')
    .then(ingredients => {
      res.status(200).json(ingredients)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

// add ingredient
router.post('/ingredients', (req, res) => {
  db('ingredients')
    .insert(req.body)
    .then(ids => {
      const id = ids[0]

      db('ingredients')
        .where({ id })
        .first()
        .then(ingredient => {
          res.status(201).json(ingredient)
        })
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

module.exports = router
