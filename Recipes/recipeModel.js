const db = require("../db-config.js");

module.exports = {
  getRecipes,
//   getShoppingList,
//   getInstructions,
};


//----get all recipes----
function getRecipes(){
    return db("recipes");
  }
  

  //-----get shoppingList by id---

//   function getShoppingList(rec_id) {
//     return db("recipes")
//     .where({rec_id})
//     .first();
//   }


//   //----getInstructions by id-----
//   function getInstructions(rec_id) {
//     return db("recipes");
//   }