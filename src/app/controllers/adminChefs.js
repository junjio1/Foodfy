const Chef = require("../models/chef")

module.exports = {
    index(req, res){
        Chef.Show(function(chefs){
            res.render("admin/chefs/indexChef", {chefs})
        })

    },
    create(req, res){
        res.render("admin/chefs/createChef")
    },
    show(req, res){
        const id = req.params.index
        Chef.Find(id, function(chefs){

            if(!chefs){
                return res.send("Chef nao localizado")
            }
            res.render("admin/chefs/showChef", {chefs})
        })
        
    },
    edit(req, res){
        res.render("admin/chefs/editChef")
    },
    post(req, res){

        const keys = Object.keys(req.body)

        for (key of keys){
            if (req.body[key] == ""){
                 return res.send("Preencha todos os campos")
            }
        }

        Chef.Create(req.body, function(chef){
             res.redirect(`chefs/${chef.id}`)
        })
       
    },
    put(req, res){
        res.render("admin/chefs/indexChef")
    },
    delete(req, res){
        res.render("admin/chefs/indexChef")
    },
}