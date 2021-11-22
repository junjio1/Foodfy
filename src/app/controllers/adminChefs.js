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
        Chef.find(id, function(chefs){

            if(!chefs){
                return res.send("Chef nao localizado")
            }
            res.render("admin/chefs/showChef", {chefs})
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
        console.log(req.params.index)
        // Chef.edit(req.body, function(){
            
        // })
        res.render("admin/chefs/indexChef")
    },
    delete(req, res){
        console.log(req.body.id)
        Chef.delete(req.body.id, function(){
            return res.redirect("/admin/chefs")
        })
    },
}