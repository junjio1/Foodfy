const fs =  require("fs")

const data = require("../data.json")

// const cards = require("../card_data")
// const recipes =  require("../data")



exports.index = function (req, res) {
    return res.render("admin/index", {recipes : data.recipes})

}
exports.create = function (req, res) {
    return res.render("admin/create")

}
exports.show = function (req, res) {

    const recipeIndex = req.params.index;
    const recipe = data.recipes[recipeIndex] 
    
    
    if (!recipe){
        return res.send("Recipe not found")
    }

    return res.render("admin/show", {recipe, recipeIndex})

}
exports.edit = function (req, res) {
    
    const recipeIndex = req.params.index;
    const recipe = data.recipes[recipeIndex]   
    
    if (!recipe){
        return res.send("Recipe not found")
    }

    return res.render("admin/edit", {recipe, recipeIndex})

}
exports.post = function (req, res) {
    const keys = Object.keys(req.body)

    for (key of keys){
        if (req.body[key] == ""){
             return res.send("Preencha todos os campos")
        }
    }

    data.recipes.push(req.body)

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error")

        return res.redirect("/admin/recipes")
    })

}
exports.put = function (req, res) {

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


}
exports.delete = function (req, res) {
    const recipeIndex = req.params.index

    data.recipes.splice([recipeIndex])

    const newData = data

    fs.writeFile("data.json", JSON.stringify(newData, null, 2), function(err){
        if(err) return res.send("Write Error.")

        return res.redirect(`/admin/recipes`)
    })

}