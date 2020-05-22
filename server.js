const express =  require("express")
const nunjucks = require("nunjucks")


const server = express()
const cards = require("./card_data")
const recipes =  require("./data")

server.use(express.static("public"))



server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true,


})


server.get("/", function(req, res){
    return res.render("index",{cards: cards})
})

server.get("/receitas", function(req, res){
    return res.render("receitas", {cards:cards})
})

server.get("/sobre", function(req, res){
    return res.render("sobre")
})

server.get("/receitas/:index", function(req, res){

    const recipeIndex = req.params.index;
    const recipe = recipes[recipeIndex]   
    
    if (!recipeIndex){
        return res.send("Recipe not found")
    }

    return res.render("preparo", {recipe})
  })


     

server.listen(5000, function() {
    console.log("Server is running")
})