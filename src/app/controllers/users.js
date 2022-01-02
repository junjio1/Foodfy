// const cards = require("../card_data")
// const recipes =  require("../data")
const  data  = require("../../../data.json")
const User = require("../models/user")

module.exports = {
    indexPage(req , res){
        // User.all(function(recipes){
        //     return res.render("users/index",{recipes}) 
        // })
        let {filter, page , limit} = req.query

        page = page || 1
        limit = limit || 6
        let offset = limit * (page - 1)

        const params = {
            filter,
            page,
            limit,
            offset,     
            callback(recipes){
                const pagination = {
                    filter,
                    total : Math.ceil(recipes[0]?.total / limit),
                    page,
                }
                return res.render("users/index",{recipes , filter, pagination}) 
            }
        }

        User.paginate(params)
        
    },
    recipePage(req , res) {

        let {filter, page , limit} = req.query

        page = page || 1
        limit = limit || 6
        let offset = limit * (page - 1)

        const params = {
            filter,
            page,
            limit,
            offset,     
            callback(recipes){
                const pagination = {
                    filter,
                    total : Math.ceil(recipes[0]?.total / limit),
                    page,
                }
                return res.render("users/recipes",{recipes , filter, pagination}) 
            }
        }

        User.paginate(params)
    },
    sobrePage(req, res){
        return res.render("users/sobre")
    },
    recipeIndex(req, res){

        const recipeIndex = req.params.index;
     User.showRecipe(recipeIndex, function(recipe){
        if (!recipe){
            return res.send("Recipe not found")
        }
            return res.render("users/preparo", {recipe})
     })


    },
    chefsPage(req, res){
        
        User.showChef(function(chefs){
            res.render("users/chefs" ,{chefs})
        })
    }
}

