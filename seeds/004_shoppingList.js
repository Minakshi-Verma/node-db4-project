
exports.seed = async function(knex) {
  
  const shoppingList=[
   {ing_id:"1", rec_id:"1"},
   {ing_id:"1", rec_id:"2"},
   {ing_id:"2", rec_id:"1"},
   {ing_id:"2", rec_id:"2"},
   {ing_id:"3", rec_id:"1"},
   {ing_id:"4", rec_id:"1"},
   {ing_id:"5", rec_id:"2"},
   {ing_id:"6", rec_id:"1"},
   {ing_id:"9", rec_id:"1"},   
    
  ]
  
    // truncate deletes ALL existing entries and reset the id back to 1
    await knex('shoppingList').truncate();
  
    return knex('shoppingList').insert(shoppingList);   
  };

