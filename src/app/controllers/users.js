// const cards = require("../card_data")
// const recipes =  require("../data")
const  data  = require("../../../data.json")
const User = require("../models/user")

module.exports = {
    indexPage(req , res){
        User.all(function(recipes){
            return res.render("users/index",{recipes})
        })
        
    },
    recipePage(req , res) {
        return res.render("users/recipes", {recipes: data.recipes})
    },
    sobrePage(req, res){
        return res.render("users/sobre")
    },
    recipeIndex(req, res){
        const recipeIndex = req.params.index;
        const recipe = data.recipes[recipeIndex]   
        
        if (!recipe){
            return res.send("Recipe not found")
        }
    
        return res.render("users/preparo", {recipe})
    }
}

