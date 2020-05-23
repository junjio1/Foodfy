const cards = require("../card_data")
const recipes =  require("../data")


exports.index = function (req, res) {
    return res.render("admin/index", {cards : cards})

}
exports.create = function (req, res) {
    return res.send("ok")

}
exports.show = function (req, res) {
    return res.send("ok")

}
exports.edit = function (req, res) {
    return res.send("ok")

}
exports.post = function (req, res) {
    return res.send("ok")

}
exports.put = function (req, res) {
    return res.send("ok")

}
exports.delete = function (req, res) {
    return res.send("ok")

}