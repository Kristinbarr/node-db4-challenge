
exports.seed = function(knex) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {
          name: 'Chocolate chip cookies',
          directions:
            'preheat oven to 350 degrees. Mix flour, sugar, butter, egg and baking soda. Scoop onto cookie sheet, bake for 15 minutes.'
        },
        {
          name: 'Bolognese sauce',
          directions:
            'Melt butter in a pot. Sweat onions, celery, carrots. Add ground beef and seasoning. add milk and reduce to a simmer. Add tomatoes and simmer for 4 hours.'
        },
        {
          name: 'Grilled cheese',
          directions:
            'Add butter to pan. Toast bread slices open faced with cheese on bread. When bread is golden, remove and add optional toppings like tomato or avocado.'
        }
      ])
    });
};
