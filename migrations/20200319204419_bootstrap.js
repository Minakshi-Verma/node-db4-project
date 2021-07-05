exports.up = function(knex) {
    return knex.schema

    //-----create "ingredients" table-----
    .createTable("ingredients", tbl=>{
        tbl.increments("ing_id");
        
        tbl
        .string("ing_name",255)
        .notNullable()
        .unique();

        tbl
        .float("quantity")
        .notNullable() 
    })
 
     //-----Create "recipes" table-------
    .createTable("recipes", tbl=>{
        tbl.increments("rec_id");

        tbl
        .string("rec_name",255)
        .notNullable()        
    })

     //-------Create "steps" table-------
     .createTable("steps", tbl=>{
        tbl.increments("ste_id");

        tbl
        .integer("ste_number")
        .notNullable()

        tbl
        .string("step",255)
        .notNullable()       
        
        //Foreign Key that references the rec_id in recipes
        tbl
        .integer("rec_id")
        .unsigned()
        .notNullable()
        .references("rec_id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE"); // CASCADE, RESTRICT, DO NOTHING, SET NULL        
    })

    //-----Create "shoppingList" table( with two foreign keys)----

    .createTable("shoppingList", tbl=>{
        tbl.increments();      

       //Foreign Key that references the ing_id in ingredients    
        tbl
        .integer("ing_id")
        .unsigned()
        .notNullable()
        .references("ing_id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE"); // CASCADE, RESTRICT, DO NOTHING, SET NULL

        //Foreign Key that references the rec_id in recipes
        tbl
        .integer("rec_id")
        .unsigned()
        .notNullable()
        .references("rec_id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE"); // CASCADE, RESTRICT, DO NOTHING, SET NULL       
    })
  
};

exports.down = function(knex) {

    return knex.schema
    .dropTableIfExists("shoppingList")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
  
};

