// const fs =  require("fs")

// const data = require("../../../data.json")

const Admin = require("../models/admin")

module.exports = {
    index(req, res){

        Admin.all(function(recipes) {
            return res.render("admin/index", {recipes})
        })  

    },
    create(req, res){

        return res.render("admin/create")
    },
    show(req, res){

        const recipeIndex = req.params.index;
        

        Admin.find(recipeIndex , function(recipe){
             if (!recipe){
                 return res.send("Recipe not found")
                }
             return res.render("admin/show", {recipe, recipeIndex})
        })
    
        

    },
    edit(req, res){

    const recipeIndex = req.params.index; 


        Admin.find(recipeIndex , function(recipe){
            if (!recipe){
                return res.send("Recipe not found")
               }
               return res.render("admin/edit", {recipe, recipeIndex})
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

    // const recipeIndex = req.params.index;
    // const recipe = data.recipes[recipeIndex]   
    
    //     if (!recipe){
    //         return res.send("Recipe not found")
    //     }
    

    // const updateRecipe = {
    //     ...recipe,
    //     ...req.body
    // }
    

    // data.recipes[recipeIndex] = updateRecipe

    // fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    //     if(err) return res.send("Write Error.")

    //     return res.redirect(`/admin/recipes/${recipeIndex}`)
    // })
    return

    },

    delete(req, res){
        const recipeIndex = req.params.index

        data.recipes.splice([recipeIndex])
    
        const newData = data
    
        fs.writeFile("data.json", JSON.stringify(newData, null, 2), function(err){
            if(err) return res.send("Write Error.")
    
            return res.redirect(`/admin/recipes`)
        })
    
    }
}

