const db = require("../../config/db")
const Chef = require("../models/chef")

module.exports = {
    index(req, res){
        Chef.show(function(chefs){
            res.render("admin/chefs/indexChef", {chefs})
        })

    },
    create(req, res){
        res.render("admin/chefs/createChef")
    },
    show(req, res){
        const id = req.params.index

        Chef.find(id, function(chef){
            let recipes = []
            
            for (recipe in chef.recipes){
                recipes.push(chef.recipes[recipe])
            }
                if(recipes[0].id === null){
                    recipes = []        
                  }

            if(!chef){
                return res.send("Chef nao localizado")
            }
            res.render("admin/chefs/showChef", {chef, recipes})
        })
        
    },
    edit(req, res){
        const id = req.params.index
        
        Chef.find(id, function(chef){
            res.render("admin/chefs/editChef", {chef})
        })
        
    },
    post(req, res){

        const keys = Object.keys(req.body)

        for (key of keys){
            if (req.body[key] == ""){
                 return res.send("Preencha todos os campos")
            }
        }

        Chef.create(req.body, function(chef){
             res.redirect(`chefs/${chef.id}`)
        })
       
    },
    put(req, res){
        Chef.edit(req.body, function(){
            res.redirect(`/admin/chefs/${req.body.id}`)
        })
        
    },
    delete(req, res){
        const recipes = req.body.totalRecipes
        if(recipes >= 1){
            return res.send("Delete todas as receitas do chef")
        }

        Chef.delete(req.body.id, function(){
            return res.redirect("/admin/chefs")
        })
    },
}