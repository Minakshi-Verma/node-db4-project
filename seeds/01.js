exports.seed = async function(knex) {
  
  const ingredients =[
    {name: 'all-purpose flour'},
    {name: 'egg'},
    {name: 'salt'},
    {name: 'baking powder'},
    {name: 'butter'},
    {name: 'dried fruits'},
    {name: 'granulated sugar'},
    {name: 'honey'},
    {name: 'brown sugar'},
    {name: 'yeast'},
    {name: 'chocolate chips'},
    {name: 'almonds'}    
    
  ]
  
    // truncate deletes ALL existing entries and reset the id back to 1
    await knex('Ingredients').truncate();
  
    return knex('Ingredients').insert(ingredients);   
  };