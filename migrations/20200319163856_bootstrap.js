
exports.up = function(knex) {
    return knex.schema

    //create Ingredients table
    .createTable("Ingredients", tbl=>{
        tbl.increments("ingredient_id");
        
        tbl
        .string("name",255)
        .notNullable()
        .unique();
    })
 
     //Create RecipeList table
    .createTable("RecipeList", tbl=>{
        tbl.increments("recipe_id");

        tbl
        .string("name",255)
        .notNullable() 
        
        tbl
        .string("instructions",255)
        .notNullable();        
        
    })

    //Create Recipe table( with two foreign keys)

    .createTable("Recipe", tbl=>{
        tbl.increments();

        tbl
        .float("quantity")
        .notNullable() 

    //Foreign Key that references the ingredient_id in Ingredients    
    
        tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("Ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE"); // CASCADE, RESTRICT, DO NOTHING, SET NULL

     //Foreign Key that references the recipe_id in RecipeList   

        tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("RecipeList")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE"); // CASCADE, RESTRICT, DO NOTHING, SET NULL       
    })
  
};

exports.down = function(knex) {

    return knex.schema
    .dropTableIfExists("Recipe")
    .dropTableIfExists("RecipeList")
    .dropTableIfExists("Ingredients")
  
};
