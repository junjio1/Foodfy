const express = require('express')
const routes = express.Router()


const admins = require("./app/controllers/admins")
const users = require("./app/controllers/users")



// USER
routes.get('/', users.indexPage)
routes.get("/recipes", users.recipePage)
routes.get("/sobre", users.sobrePage)
routes.get("/recipes/:index", users.recipeIndex)


// ADMIN
routes.get("/admin/recipes", admins.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create",admins.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:index", admins.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:index/edit", admins.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", admins.post); // Cadastrar nova receita
routes.put("/admin/recipes/:index", admins.put); // Editar uma receita
routes.delete("/admin/recipes/:index", admins.delete); // Deletar uma receita



module.exports = routes