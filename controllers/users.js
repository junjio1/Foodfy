const cards = require("../card_data")
const recipes =  require("../data")


exports.indexPage = function(req, res ){
    return res.render("users/index",{cards: cards})
}

exports.recipePage = function(req, res){
    return res.render("users/recipes", {cards:cards})
}

exports.sobrePage = function(req, res){
    return res.render("users/sobre")
}

exports.recipeIndex = function(req, res){

    const recipeIndex = req.params.index;
    const recipe = recipes[recipeIndex]   
    
    if (!recipe){
        return res.send("Recipe not found")
    }

    return res.render("users/preparo", {recipe})
  }