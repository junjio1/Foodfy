const express = require('express')
const routes = express.Router()


const admin = require("./app/controllers/admin")
const users = require("./app/controllers/users")



// USER
routes.get('/', users.indexPage)
routes.get("/recipes", users.recipePage)
routes.get("/sobre", users.sobrePage)
routes.get("/recipes/:index", users.recipeIndex)


// ADMIN
routes.get("/admin/recipes", admin.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create",admin.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:index", admin.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:index/edit", admin.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", admin.post); // Cadastrar nova receita
routes.put("/admin/recipes/:index", admin.put); // Editar uma receita
routes.delete("/admin/recipes/:index", admin.delete); // Deletar uma receita



module.exports = routes