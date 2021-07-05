const express = require('express');


const Rcp = require('./recipeModel');

const router = express.Router();

//---GET ALL RECIPE----------

router.get("/",(req,res)=>{
    Rcp.getRecipes()
    .then(recipes=>{
        res.status(200).json(recipes)
    })
    .catch(err=>{
        res.status(500).json({ message: "Failed to get recipes" })    
    })

})

//----GET shoppingList by id

router.get("/:id", (req,res)=>{
    const{id} = req.params
    Rcp.getShoppingList(id)
    .then(recipe=>{
        if(recipe){
         res.status(200).json(recipe)   
        }else{
            res.status(500).json({ message: "Failed to get information about the recipe" })     
        }
          
    })
    .catch(err=>{
        res.status(500).json({ message: "Sorry! Something is gone wrong" })    
    })
})

//---GET steps

router.get("/:id/steps", (req,res)=>{
    const{id} = req.params
    Rcp.getInstructions(id)
    .then(recipe=>{
        if(recipe){
         res.status(200).json(recipe)   
        }else{
            res.status(500).json({ message: "Failed to get steps of the recipe" })     
        }
          
    })
    .catch(err=>{
        res.status(500).json({ message: "Failed to get information" })    
    })

})

module.exports = router;