const fs =  require("fs")

const data = require("../../../data.json")
const db = require("../../config/db")

const {date} = require("../../lib/utils")

module.exports = {
    index(req, res){
        db.query(`SELECT * FROM recipes`, function(err, results ){
            if(err) throw`Database err ${err}`

            return res.render("admin/index", {recipes : results.rows})
        })
        

    },
    create(req, res){

        return res.render("admin/create")
    },
    show(req, res){

        const recipeIndex = req.params.index;
        const recipe = data.recipes[recipeIndex] 
        
        
        if (!recipe){
            return res.send("Recipe not found")
        }
    
        return res.render("admin/show", {recipe, recipeIndex})

    },
    edit(req, res){

    const recipeIndex = req.params.index;
    const recipe = data.recipes[recipeIndex]   
    
        if (!recipe){
            return res.send("Recipe not found")
        }

    return res.render("admin/edit", {recipe, recipeIndex})

    },

    post(req, res){
        const keys = Object.keys(req.body)

        for (key of keys){
            if (req.body[key] == ""){
                 return res.send("Preencha todos os campos")
            }
        }

        const query = `
        INSERT INTO recipes (
            image,
            title,
            author,
            ingredients,
            preparation,
            information,
            created_at
        ) VALUES ($1, $2 ,$3 ,$4 ,$5, $6, $7 )
        RETURNING id
        `

        const values = [
            req.body.image,
            req.body.title,
            req.body.author,
            req.body.ingredients,
            req.body.preparation,
            req.body.information,
            date(Date.now()).iso
        ]

        

        db.query(query , values, function(err, results){
            if(err) throw`Database err ${err}`
            console.log(results)
            return res.redirect("/admin/recipes")
        } )
    
    },

    put(req, res){

    const recipeIndex = req.params.index;
    const recipe = data.recipes[recipeIndex]   
    
        if (!recipe){
            return res.send("Recipe not found")
        }
    

    const updateRecipe = {
        ...recipe,
        ...req.body
    }
    

    data.recipes[recipeIndex] = updateRecipe

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write Error.")

        return res.redirect(`/admin/recipes/${recipeIndex}`)
    })

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

