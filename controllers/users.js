// const cards = require("../card_data")
// const recipes =  require("../data")
const  data  = require("../data.json")

exports.indexPage = function(req, res ){
    return res.render("users/index",{recipes: data.recipes})
}

exports.recipePage = function(req, res){
    return res.render("users/recipes", {recipes: data.recipes})
}

exports.sobrePage = function(req, res){
    return res.render("users/sobre")
}

exports.recipeIndex = function(req, res){

    const recipeIndex = req.params.index;
    const recipe = data.recipes[recipeIndex]   
    
    if (!recipe){
        return res.send("Recipe not found")
    }

    return res.render("users/preparo", {recipe})
  }