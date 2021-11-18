// const fs =  require("fs")

// const data = require("../../../data.json")

const Admin = require("../models/admin")

module.exports = {
    index(req, res){

        Admin.all(function(recipes) {
            return res.render("admin/recipes/index", {recipes})
        })  

    },
    create(req, res){

        return res.render("admin/recipes/create")
        
    },
    show(req, res){

        const recipeIndex = req.params.index;

        Admin.find(recipeIndex , function(recipe){
             if (!recipe){
                 return res.send("Recipe not found")
                }
             return res.render("admin/recipes/show", {recipe, recipeIndex})
        })
    
        

    },
    edit(req, res){

    const recipeIndex = req.params.index; 


        Admin.find(recipeIndex , function(recipe){
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

        Admin.create(req.body, function(recipes){
            return res.redirect(`/admin/recipes/${recipes.id}`)
        })
            
    
    },

    put(req, res){
        
        Admin.update(req.body, function(){
        return res.redirect(`/admin/recipes/${req.body.id}`)
        })

    },

    delete(req, res){

        Admin.delete(req.body.id, function(){
            return res.redirect(`/admin/recipes`)
        })
    }

// admin chefs

}

