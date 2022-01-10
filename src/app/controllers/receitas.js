// const fs =  require("fs")

// const data = require("../../../data.json")

const Receita = require("../models/receita")

module.exports = {
    index(req, res){

        // Admin.all(function(recipes) {
        //     return res.render("admin/recipes/index", {recipes})
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
                return res.render("admin/recipes/index",{recipes , filter, pagination}) 
            }
        }

        Receita.paginate(params)

    },
    create(req, res){
        
        Receita.findChef(function(chefs){
            return res.render("admin/recipes/create", {chefs})
        })
        
        
    },
    show(req, res){

        const recipeIndex = req.params.index;

        Receita.find(recipeIndex , function(recipe){
             if (!recipe){
                 return res.send("Recipe not found")
                }
             return res.render("admin/recipes/show", {recipe, recipeIndex})
        })
    
        

    },
    edit(req, res){

    const recipeIndex = req.params.index; 


        Receita.find(recipeIndex , function(recipe){
            if (!recipe){
                return res.send("Recipe not found")
               }
               
               return res.render("admin/recipes/edit", {recipe, recipeIndex})
       })
        
    },

    post(req, res){
        const keys = Object.keys(req.body)

        for (key of keys){
            if (req.body[key] == ""){
                 return res.send("Preencha todos os campos")
            }
        }


        Receita.create(req.body, function(recipes){
            return res.redirect(`/admin/recipes/${recipes.id}`)
        })
            
    
    },

    put(req, res){
        
        Receita.update(req.body, function(){
        return res.redirect(`/admin/recipes/${req.body.id}`)
        })

    },

    delete(req, res){

        Receita.delete(req.body.id, function(){
            return res.redirect(`/admin/recipes`)
        })
    }
}

