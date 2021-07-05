

exports.seed = async function(knex) {
  
  const ingredients =[
   {ing_name:"baking powder", quantity:"2.0"},
   {ing_name:"baking soda", quantity:"1.2"},
   {ing_name:"butter", quantity:"2.1"},
   {ing_name:"cornstarch", quantity:"5.0"},
   {ing_name:"eggs", quantity:"6.0"},
   {ing_name:"flour", quantity:"12.8"},
   {ing_name:"milk", quantity:"1.3"},
   {ing_name:"salt", quantity:"2.1"},
   {ing_name:"sugar", quantity:"5.4"}
    
  ]
  
    // truncate deletes ALL existing entries and reset the id back to 1
    await knex('ingredients').truncate();
  
    return knex('ingredients').insert(ingredients);   
  };
