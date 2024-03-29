// const fs =  require("fs")

// const data = require("../../../data.json")

const Receita = require("../models/receita")
const File = require("../models/File")
module.exports = {
    index(req, res){

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
async edit(req, res){
        


        const recipeIndex = req.params.index; 

        Receita.find(recipeIndex , function(recipe){
            if (!recipe){
                return res.send("Recipe not found")
               }
               
               return res.render("admin/recipes/edit", {recipe, recipeIndex})
       })
},

async post(req, res){
        const keys = Object.keys(req.body)

        for (key of keys){
            if (req.body[key] == ""){
                    return res.send("Preencha todos os campos")
            }
        }
        
        // if(req.files.length == 0 ){
        //     return res.send("please send a least one image ")
        // }

        const results = await Receita.create(req.body)
        const recipeId = results.rows[0].id


        // desafio upload imagem

        // const filesPromise = req.files.map(file => File.create({...file}))
        
        
        // await Promise.all(filesPromise)
        
    
        
        return res.redirect(`/admin/recipes/${recipeId}`)
        

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

