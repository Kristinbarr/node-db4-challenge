
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { recipe_id: 1, ingredient_id: 2, quantity: 0.5, unit: 'cup' },
        { recipe_id: 1, ingredient_id: 1, quantity: 2, unit: 'cups' },
        { recipe_id: 1, ingredient_id: 3, quantity: 1, unit: 'cup' },
        { recipe_id: 1, ingredient_id: 4, quantity: 2, unit: 'raw' },
        { recipe_id: 1, ingredient_id: 5, quantity: 2, unit: 'tsp' },
        { recipe_id: 2, ingredient_id: 2, quantity: 2, unit: 'tbs' },
        { recipe_id: 2, ingredient_id: 6, quantity: 1, unit: 'cup' },
        { recipe_id: 2, ingredient_id: 7, quantity: 0.5, unit: 'cup' },
        { recipe_id: 2, ingredient_id: 8, quantity: 0.5, unit: 'cup' },
        { recipe_id: 2, ingredient_id: 9, quantity: 1.5, unit: 'lbs' },
        { recipe_id: 2, ingredient_id: 10, quantity: 2, unit: 'tbl' },
        { recipe_id: 2, ingredient_id: 11, quantity: 1.5, unit: 'cups' },
        { recipe_id: 2, ingredient_id: 12, quantity: 28, unit: 'oz' },
        { recipe_id: 3, ingredient_id: 2, quantity: 2, unit: 'oz' },
        { recipe_id: 3, ingredient_id: 13, quantity: 2, unit: 'slices' },
        { recipe_id: 3, ingredient_id: 14, quantity: 2, unit: 'oz' },
        { recipe_id: 3, ingredient_id: 15, quantity: 2, unit: 'oz' },
        { recipe_id: 3, ingredient_id: 16, quantity: 2, unit: 'oz' },
        { recipe_id: 3, ingredient_id: 12, quantity: 2, unit: 'slices' },
        { recipe_id: 3, ingredient_id: 17, quantity: 0.5, unit: 'peeled' }
      ])
    });
};
