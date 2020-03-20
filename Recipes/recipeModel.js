const db = require("../db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};


//----get all recipes----
function getRecipes(){
    return db("recipes");
  }
  

  //-----get shoppingList by id---

  function getShoppingList(id) {
    return db("recipes")
    .select('i.ing_name', 'i.quantity', 's.rec_id')
    .from('shoppingList as s')
    .join("ingredients as i", 'i.ing_id', '=', 's.ing_id') 
    .join("recipes as r", "r.rec.id", '=','s.rec_id')
    .where({rec_id:id})


    // .where({rec_id})
    // .first();
  }


  //----getInstructions by id-----
  function getInstructions(id) {
    return db("steps")
    .select('st.step', 'st.ste_number', 'st.rec_id')
    .from('steps as st')
    // .join("recipes as r", 'r.rec_id', '=', 'st.rec_id')    
    .where({rec_id:id});
  }