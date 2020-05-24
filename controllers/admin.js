const cards = require("../card_data")
const recipes =  require("../data")


exports.index = function (req, res) {
    return res.render("admin/index", {cards : cards})

}
exports.create = function (req, res) {
    return res.render("admin/create")

}
exports.show = function (req, res) {
    return res.send("ok")

}
exports.edit = function (req, res) {
    return res.send("ok")

}
exports.post = function (req, res) {
    const keys = Object.keys(req.body)

    for (key of keys){
        if (req.body[key] == ""){
             return res.send("Preencha todos os campos")
        }
    }

    return res.send(req.body)
}
exports.put = function (req, res) {
    return res.send("ok")

}
exports.delete = function (req, res) {
    return res.send("ok")

}