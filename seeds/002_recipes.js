
exports.seed = async function(knex) {
  
  const recipes =[
   {rec_name:"butter cookies"},
   {rec_name:"cake"},
   {rec_name:"shortbread cookies"},
   {rec_name:"brownies"},
   {rec_name:"cup cakes"},
   {rec_name:"cheese cake"},
   {rec_name:"brownie bars"},
   {rec_name:"velvet cheesecake"},
   {rec_name:"apple glazed pie"}
    
  ]
  
    // truncate deletes ALL existing entries and reset the id back to 1
    await knex('recipes').truncate();
  
    return knex('recipes').insert(recipes);   
  };

