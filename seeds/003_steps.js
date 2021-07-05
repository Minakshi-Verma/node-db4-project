
exports.seed = async function(knex) {
  
  const steps =[
   {ste_number:"1", step:"Preheat oven to 350", rec_id:"1"},
   {ste_number:"2", step:"Sift flour, salt and baking soda together, set aside and mix the melted butter and sugars together until thoroughly mixed.", rec_id:"1"},
   {ste_number:"3", step:"Add egg yolk and vanilla and mix until creamy. Stir in dry ingredients and mix just until blended.", rec_id:"1"},
   {ste_number:"4", step:"Stir in some finely chopped nuts", rec_id:"1"},
   {ste_number:"5", step:"Drop dough by 1/4 cupfuls onto nonstick baking sheet, about 3 inches apart.Bake 13-16 minutes.", rec_id:"1"},
   {ste_number:"6", step:"Let cool on cookie sheet for at least 5 minutes before removing to rack to finish cooling.", rec_id:"1"}
   
    
  ]
  
    // truncate deletes ALL existing entries and reset the id back to 1
    await knex('steps').truncate();
  
    return knex('steps').insert(steps);   
  };
