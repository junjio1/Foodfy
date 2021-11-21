const Chef = require("../models/chef")

module.exports = {
    index(req, res){
        Chef.Show(function(chefs){
            res.render("admin/chef/indexChef", {chefs})
        })

    },
    create(req, res){
        res.render("admin/chef/createChef")
    },
    show(req, res){
        res.render("admin/chef/showChef")
    },
    edit(req, res){
        res.render("admin/chef/editChef")
    },
    post(req, res){

        console.log(req.body)
        Chef.Create(req.body, function(){
             res.render("admin/chef/indexChef")
        })
       
    },
    put(req, res){
        res.render("admin/chef/indexChef")
    },
    delete(req, res){
        res.render("admin/chef/indexChef")
    },
}