const express =  require("express")
const nunjucks = require("nunjucks")
const routes = require("./routes.js")
const methodOverride = require('method-override')


const server = express()

server.use(express.urlencoded({ extended : true })) //Middle to make the form method post
server.use(express.static("public"))
server.use(methodOverride('_method'))
server.use(routes)



server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true,
})

server.listen(5000, function() {
    console.log("Server is running")
})