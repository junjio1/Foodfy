const express = require('express')
const routes = express.Router()


const receitas = require("./app/controllers/receitas")
const users = require("./app/controllers/users")
const chefs = require("./app/controllers/adminChefs")



// USER
routes.get('/', users.indexPage)
routes.get("/recipes", users.recipePage)
routes.get("/sobre", users.sobrePage)
routes.get("/chefs", users.chefsPage)
routes.get("/recipes/:index", users.recipeIndex)


//  ADMIN RECEITAS
routes.get("/admin/recipes", receitas.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create",receitas.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:index", receitas.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:index/edit", receitas.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", receitas.post); // Cadastrar nova receita
routes.put("/admin/recipes/:index", receitas.put); // Editar uma receita
routes.delete("/admin/recipes/:index", receitas.delete); // Deletar uma receita

// ADMIN CHEF
routes.get("/admin/chefs", chefs.index); // Mostrar a lista de receitas
routes.get("/admin/chefs/create",chefs.create); // Mostrar formulário de nova receita
routes.get("/admin/chefs/:index", chefs.show); // Exibir detalhes de uma receita
routes.get("/admin/chefs/:index/edit", chefs.edit); // Mostrar formulário de edição de receita

routes.post("/admin/chefs", chefs.post); // Cadastrar nova receita
routes.put("/admin/chefs/:index", chefs.put); // Editar uma receita
routes.delete("/admin/chefs/:index", chefs.delete); // Deletar uma receita


module.exports = routes