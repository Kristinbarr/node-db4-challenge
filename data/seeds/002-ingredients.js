exports.seed = function(knex) {
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'flour' },
        { name: 'butter' },
        { name: 'sugar' },
        { name: 'egg' },
        { name: 'baking soda' },
        { name: 'onion' },
        { name: 'celery' },
        { name: 'carrots' },
        { name: 'ground beef' },
        { name: 'all-spice seasoning' },
        { name: 'milk' },
        { name: 'tomato' },
        { name: 'bread' },
        { name: 'mozzarella' },
        { name: 'provalone' },
        { name: 'cheddar' },
        { name: 'avocado' }
      ])
    })
}
